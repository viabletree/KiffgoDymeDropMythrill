// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';

import DMOptimizeRouteView from './DMOptimizeRouteView';
import { getActiveDrivers } from '../../../helpers/dmHelper';
import {
  DRIVER_TRANSPORT_TYPES,
  SAME_VEHICLE_ERROR,
  TASK_REQUIRED_ERROR,
  SERVICE_TIME_ERROR,
  MAX_OPTIMIZATION_DELAY_ERROR,
  MAX_TASKS_PER_DRIVER_ERROR,
  DRIVER_REQUIRED_ERROR,
  LOCATION_OPTIMIZATION_REQUIRED_ERROR,
  DATE_TIME_FORMAT1,
  OPTIMIZE_TYPE_VALUES
} from '../../../constants';
import {
  dmRouteOptimizationValidate,
  dmShowOptimizeTaskModal,
  dmRouteOptimizationSubmit
} from '../../../actions/DMTasksActions';

import Util from '../../../services/Util';

export const OPTIMIZATION_STEPS = {
  STEP1: 'step1',
  STEP2: 'step2',
  STEP3: 'step3',
  STEP4: 'step4'
};
/**
 * List of all drivers
 * @typedef Driver
 * @property {number} id
 * @property {[number,number]} time_window
 * @property {[number,number]} start
 * @property {[number,number]} end
 */

/**
 * Vehicle type
 * @typedef Vehicle
 * @property {"car"|"truck"} vehicle
 */

/**
 * Payload for route optimization api
 * @typedef RouteOptimization
 * @property {Driver[]} drivers
 * @property {Vehicle} vehicle
 * @property {string[]} uniqeStrings
 * @property {number} serviceTime
 * @property {number} taskPerDriver
 * @property {number} criteria
 * @property {number} maxAllowedDelay
 * @property {string} date
 */

/**
 * driver must be same vehicle ( validation ) ✓
 * get driver detail from  this.props.driverListing ✓
 * number validation should not be less then 0 ✓
 * number validation should be valid number ✓
 * start / end should not be empty ✓
 *
 *
 */

class DMOptimizeRouteController extends React.Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      isLoading: false,
      calendarVisible: false,
      optimizeFormData: {
        date: moment(this.props.dmFilter.calendarDate).format(
          DATE_TIME_FORMAT1
        ),
        drivers: [],
        taskPerDriver: 30,
        serviceTime: 10,
        maxAllowedDelay: 0,
        startFromIndex: null,
        startFromLatitude: null,
        startFromLongitude: null,
        endToIndex: null,
        endToLatitude: null,
        endToLongitude: null,
        optimizeTo: 1,
        optimizationType: OPTIMIZE_TYPE_VALUES.SHIPMENT,
        startFrom: null,
        endTo: null
      },
      optimizationStep: OPTIMIZATION_STEPS.STEP1,
      optimizeServerErrors: [],
      optimizeServerWarning: [],
      optimizationId: null,
      optimizationInProgress: false,
      optimizationSuccessSummary: [
        /* { driverName: 'Johnson', tasksCount: 2 },
        { driverName: 'Ali', tasksCount: 5 } */
      ]
    };
  }

  componentDidMount() {}

  onSubmitClick = () => {
    const { optimizationStep } = this.state;
    if (optimizationStep === OPTIMIZATION_STEPS.STEP1) {
      // step one
      this.onStepOneSubmit();
    } else if (optimizationStep === OPTIMIZATION_STEPS.STEP2) {
      // step two
      this.onStepTwoSubmit();
    } else if (optimizationStep === OPTIMIZATION_STEPS.STEP3) {
      // step three
      this.onStepThreeSubmit();
    } else if (optimizationStep === OPTIMIZATION_STEPS.STEP4) {
      // step four, close the optimzation modal
      this.closeOptimizeModal();
    }
  };

  onStepOneSubmit = () => {
    const _tempDriverListing = _.cloneDeep(this.props.driverListing);
    const {
      maxAllowedDelay,
      drivers,
      serviceTime,
      startFromIndex,
      startFromLatitude,
      startFromLongitude,
      endToIndex,
      endToLatitude,
      endToLongitude,
      optimizeTo,
      optimizationType,
      date,
      taskPerDriver
    } = this.state.optimizeFormData;
    const { selectedTasks } = this.props;

    if (_tempDriverListing.length < 1 || drivers.length < 1) {
      Util.dmInformAlert('Error', DRIVER_REQUIRED_ERROR);
      return false;
    }
    const vehicle = _.find(_tempDriverListing, o => o.id === drivers[0])
      .transport_type;
    /**
     * @type {RouteOptimization}
     */
    const payload = {
      static: false
    };

    payload.vehicle = _.find(
      DRIVER_TRANSPORT_TYPES,
      o => o.id === _.subtract(vehicle, 1)
    ).name.toLowerCase();

    const _hub = {
      startFromIndex,
      startFromLatitude,
      startFromLongitude,
      endToIndex,
      endToLatitude,
      endToLongitude
    };
    payload.drivers = this.generateDriverData(_hub, drivers, date);

    payload.uniqeStrings = selectedTasks;
    payload.serviceTime = serviceTime;

    payload.criteria = optimizeTo;
    payload.optimizationType = optimizationType;
    payload.taskPerDriver = taskPerDriver;
    payload.maxAllowedDelay = maxAllowedDelay;
    payload.date = date;

    //* driver must be same vehicle ( validation )
    //No Need for vehicle validation as in api we mark every thing with car and adjust speed factor
    // const hasSameVehicle = this.hasSameVehicle(
    //   _tempDriverListing,
    //   drivers,
    //   vehicle
    // );
    // if (!hasSameVehicle) {
    //   Util.dmInformAlert('Error', SAME_VEHICLE_ERROR);

    //   return false;
    // }

    if (payload.uniqeStrings.length < 1) {
      Util.dmInformAlert('Error', TASK_REQUIRED_ERROR);

      return false;
    }

    if (
      payload.serviceTime < 1 ||
      payload.serviceTime == null ||
      _.isNaN(payload.serviceTime)
    ) {
      Util.dmInformAlert('Error', SERVICE_TIME_ERROR);

      return false;
    }

    if (
      payload.maxAllowedDelay < 0 ||
      payload.maxAllowedDelay == null ||
      _.isNaN(payload.maxAllowedDelay)
    ) {
      Util.dmInformAlert('Error', MAX_OPTIMIZATION_DELAY_ERROR);

      return false;
    }

    if (
      payload.taskPerDriver < 0 ||
      payload.taskPerDriver > 200 ||
      _.isNaN(payload.taskPerDriver)
    ) {
      Util.dmInformAlert('Error', MAX_TASKS_PER_DRIVER_ERROR);

      return false;
    }
    if (startFromIndex == null || endToIndex == null) {
      Util.dmInformAlert('Error', LOCATION_OPTIMIZATION_REQUIRED_ERROR);

      return false;
    }

    this.setState({
      isLoading: true
    });
    payload.startLocationIndex = startFromIndex;
    payload.endLocationIndex = endToIndex;
    this.props.dmRouteOptimizationValidate(payload, (response, err) => {
      let nextStep = OPTIMIZATION_STEPS.STEP1;
      const { errors, warnings, optimizationId } = response.data;

      if (errors.length > 0 || warnings.length > 0) {
        // has errors or warning go to step 2
        nextStep = OPTIMIZATION_STEPS.STEP2;
      } else {
        // has NO errors or warning go to step 3
        nextStep = OPTIMIZATION_STEPS.STEP3;
      }

      this.setState({
        isLoading: false,
        optimizeServerErrors: errors,
        optimizeServerWarning: warnings,
        optimizationStep: nextStep,
        optimizationId: errors.length === 0 ? optimizationId : null // we will get id when there will be no errors
      });
    });
  };

  onStepTwoSubmit = () => {
    this.changeStep(OPTIMIZATION_STEPS.STEP3);
  };

  onStepThreeSubmit = () => {
    if (!_.isNull(this.state.optimizationId)) {
      this.setState({
        optimizationInProgress: true,
        optimizationStep: OPTIMIZATION_STEPS.STEP4
      });
      this.props.dmRouteOptimizationSubmit(
        {
          uniqueKey: this.state.optimizationId
        },
        (response, err) => {
          const newState = {};
          newState.optimizationInProgress = false;
          if (err === 'err') {
            //
          } else if (response && response.status) {
            newState.optimizationSuccessSummary = response.data;
          }
          this.setState(newState);
        }
      );
    }
  };

  /**
   *
   * @param {Object} hub Object of hubs selected from dropdown
   * @param {Array} drivers Array of ids of drivers
   * @param {string} date
   * @return {Driver[]}
   */
  generateDriverData = (hub, drivers, date) => {
    /**
     * @type {Driver[]}
     */
    const _drivers = [];
    // _drivers[0].
    const timeWindow = [
      moment(date)
        .startOf('day')
        .unix(),
      moment(date)
        .endOf('day')
        .unix()
    ];

    for (let i = 0; i < drivers.length; i += 1) {
      _drivers.push({
        id: drivers[i],
        time_window: timeWindow,
        start: [hub.startFromLatitude, hub.startFromLongitude],
        end: [hub.endToLatitude, hub.endToLongitude]
      });
    }

    return _drivers;
  };

  /**
   * Checks if vehicle is same for all drivers
   * @param {Object[]} drivers Array of drivers objects
   * @param {number[]} selectedIds Array of selected drivers Id
   * @param {number} vehicle vehicle id
   * @returns {boolean}
   */
  hasSameVehicle = (drivers, selectedIds, vehicle) => {
    const driversObject = _.remove(
      drivers,
      n => n.transport_type === vehicle && selectedIds.includes(n.id)
    );

    return driversObject.length === selectedIds.length;
  };

  closeOptimizeModal = () => {
    this.props.dmShowOptimizeTaskModal(false);
  };

  closeCommunicationModal = () => {
    this.props.dmShowCommunicationModal(false);
  };

  hideDateCalendar = () => {
    this.setState({
      calendarVisible: false
    });
  };

  showDateCalendar = () => {
    this.setState({
      calendarVisible: true
    });
  };

  onDateSelect = date => {
    const newMoment = moment(date);

    this.setOptimizeFormData({
      date: newMoment.format(DATE_TIME_FORMAT1)
    });
  };

  onDriverClick = data => {
    const selectedDrivers = _.cloneDeep(this.state.optimizeFormData.drivers);

    if (selectedDrivers.includes(data.id)) {
      // unselect driver
      const indexOfSelectedDrivers = selectedDrivers.indexOf(data.id);
      selectedDrivers.splice(indexOfSelectedDrivers, 1);
    } else {
      // select driver
      selectedDrivers.push(data.id);
    }

    this.setOptimizeFormData({
      drivers: selectedDrivers
    });
  };

  onAllDriverPress = () => {
    this.setOptimizeFormData({
      drivers: _.map(this.props.driverListing, 'id')
    });
  };

  onNoneDriverPress = () => {
    this.setOptimizeFormData({
      drivers: []
    });
  };

  setOptimizeFormData = newValues => {
    this.setState(prevState => ({
      optimizeFormData: {
        ...prevState.optimizeFormData,
        ...newValues
      }
    }));
  };

  ontaskPerDriverChange = e => {
    const val = e.target.value;
    this.setState(prevState => ({
      optimizeFormData: {
        ...prevState.optimizeFormData,
        ...{ taskPerDriver: parseInt(val, 10) }
      }
    }));
  };

  onMaxDelayChange = e => {
    const val = e.target.value;
    this.setState(prevState => ({
      optimizeFormData: {
        ...prevState.optimizeFormData,
        ...{ maxAllowedDelay: parseInt(val, 10) }
      }
    }));
  };

  onServiceTimeChange = e => {
    const val = e.target.value;
    this.setState(prevState => ({
      optimizeFormData: {
        ...prevState.optimizeFormData,
        ...{ serviceTime: parseInt(val, 10) }
      }
    }));
  };

  onStartFromChange = data => {
    const {
      dataset: { latitude, longitude }
    } = data.target.options[data.target.selectedIndex].valueOf();
    this.setOptimizeFormData({
      startFromIndex: parseInt(data.target.value, 10),
      startFromLatitude: latitude,
      startFromLongitude: longitude
    });
  };

  onEndAtChange = data => {
    const {
      dataset: { latitude, longitude }
    } = data.target.options[data.target.selectedIndex].valueOf();

    this.setOptimizeFormData({
      endToIndex: parseInt(data.target.value, 10),
      endToLatitude: latitude,
      endToLongitude: longitude
    });
  };

  onOptimizeToChange = optionId => {
    this.setOptimizeFormData({ optimizeTo: parseInt(optionId, 10) });
  };

  onOptimizeTypeChange = type => {
    this.setState(
      {
        optimizationType: type
      },
      () => {
        this.setOptimizeFormData({
          optimizationType: type
        });
      }
    );
  };

  changeStep = stepNumber => {
    this.setState({
      optimizationStep: stepNumber
    });
  };

  onBackClick = () => {
    const { optimizationStep } = this.state;
    if (optimizationStep === OPTIMIZATION_STEPS.STEP2) {
      //
      this.changeStep(OPTIMIZATION_STEPS.STEP1);
    } else if (optimizationStep === OPTIMIZATION_STEPS.STEP3) {
      //
      this.changeStep(OPTIMIZATION_STEPS.STEP2);
    } else if (optimizationStep === OPTIMIZATION_STEPS.STEP4) {
      //
      this.changeStep(OPTIMIZATION_STEPS.STEP3);
    }
  };

  onRetryClick = () => {
    this.onStepOneSubmit();
  };

  render() {
    return (
      <DMOptimizeRouteView
        {...this.props}
        {...this.state}
        onModalCloseClick={this.closeOptimizeModal}
        onSubmitClick={this.onSubmitClick}
        hideDateCalendar={this.hideDateCalendar}
        showDateCalendar={this.showDateCalendar}
        onDateSelect={this.onDateSelect}
        onMaxDelayChange={this.onMaxDelayChange}
        onServiceTimeChange={this.onServiceTimeChange}
        onDriverClick={this.onDriverClick}
        onAllDriverPress={this.onAllDriverPress}
        onNoneDriverPress={this.onNoneDriverPress}
        onStartFromChange={this.onStartFromChange}
        onEndAtChange={this.onEndAtChange}
        onOptimizeToChange={this.onOptimizeToChange}
        onOptimizeTypeChange={this.onOptimizeTypeChange}
        ontaskPerDriverChange={this.ontaskPerDriverChange}
        changeStep={this.changeStep}
        onBackClick={this.onBackClick}
        onRetryClick={this.onRetryClick}
      />
    );
  }
}

const mapStateToProps = ({ dmTasks, dmDriver, dmHub, dmFilter }) => ({
  taskInput: dmTasks.taskInput,
  driverListing: getActiveDrivers(dmDriver.allDrivers),
  hubListing: dmHub.allHubs,
  selectedTasks: dmTasks.selectedTasks,
  dmFilter
});

const actions = {
  dmRouteOptimizationValidate,
  dmShowOptimizeTaskModal,
  dmRouteOptimizationSubmit
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMOptimizeRouteController)));
