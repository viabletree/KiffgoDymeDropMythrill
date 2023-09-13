// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import isValidCoordinates from 'is-valid-coordinates';
import moment from 'moment';
import DMTaskInputView from './DMTaskInputView';
import {
  dmOnTaskInputUpdate,
  dmTaskCreateRequest,
  dmTaskDeleteRequest,
  dmClearTaskInput,
  dmGetSingleTaskDetailsRequest,
  dmTaskRecentRecordRequest
} from '../../../actions/DMTasksActions';
import { dmGetAllDriversRequest } from '../../../actions/DMDriverActions';
import Util from '../../../services/Util';
import {
  ROUTES,
  TASK_FIELDS_NAME,
  INVALID_NAME_ERROR,
  INVALID_PHONE_ERROR,
  INVALID_EMAIL_ERROR,
  DM_MODULES,
  DM_TASK_TYPE,
  ARE_YOU_SURE,
  CONFIRM_DELETE_TASK,
  NAME_IS_REQUIRED_ERROR,
  ADDRESS_IS_REQUIRED_ERROR,
  PHONE_IS_REQUIRED_ERROR,
  TIME_ERROR,
  INVALID_LAT,
  INVALID_LNG,
  DM_TASK_STATUS_LENGTH
} from '../../../constants';
import {
  getTaskDetailFromReducer,
  showCreateTask,
  getActiveDrivers
} from '../../../../src/helpers/dmHelper';

class DMTaskInputController extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      noRecipient: false,
      isLoading: false,
      [TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR]: '',
      [TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR]: '',
      [TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR]: '',
      timeError: false,
      taskDetail: this.getTaskIfEdit(),
      isDeleting: false,
      isActiveDriverLoading: false,
      useCoordinates: false,
      isCordDataValid: true
    };
  }

  componentDidMount() {
    /* if (!_.isNull(this.state.taskDetail)) {
      if (
        _.isEmpty(this.state.taskDetail[TASK_FIELDS_NAME.RECIPIENT_PHONE]) &&
        _.isEmpty(this.state.taskDetail[TASK_FIELDS_NAME.RECIPIENT_NAME])
      ) {
        this.setState({ noRecipient: true });
      }
    } */

    this.dmGetAllDriversRequest();
    this.onEditMount();
    this.isUseCord();
  }

  decideNoRecipientOnEdit = () => {
    if (!_.isNull(this.state.taskDetail)) {
      if (
        (_.isEmpty(this.state.taskDetail[TASK_FIELDS_NAME.RECIPIENT_PHONE]) &&
          _.isEmpty(this.state.taskDetail[TASK_FIELDS_NAME.RECIPIENT_NAME])) ||
        this.state.taskDetail[TASK_FIELDS_NAME.STATUS] ===
          DM_TASK_TYPE.IN_TRANSIT.slug
      ) {
        this.setState({ noRecipient: true });
      }
    }
  };

  onEditMount = () => {
    // redirect to create task if no data for edit task

    if (
      this.props.match.params.moduleAction === DM_MODULES.TASK.ACTIONS.EDIT &&
      _.isNull(this.state.taskDetail)
    ) {
      this.props.dmGetSingleTaskDetailsRequest(
        {
          task: this.props.match.params.actionData
        },
        success => {
          if (success) {
            this.setState(
              { taskDetail: this.getTaskIfEdit() },
              this.decideNoRecipientOnEdit
            );
          } else {
            showCreateTask(this.props.history);
          }
        }
      );
    } else {
      this.decideNoRecipientOnEdit();
    }
  };

  isInTransit = () => {
    return (
      this.state.taskDetail[[TASK_FIELDS_NAME.STATUS]] ===
      DM_TASK_TYPE.IN_TRANSIT.slug
    );
  };

  isEditTask = () =>
    this.props.match.params.moduleAction === DM_MODULES.TASK.ACTIONS.EDIT;

  isUseCord = () => {
    if (this.isEditTask()) {
      const returnReducer = getTaskDetailFromReducer(
        this.props.tasksList,
        this.props.match.params.actionData
      );
      if (returnReducer != null) {
        if (
          returnReducer[TASK_FIELDS_NAME.LOCATION_ADDRESS] === '' &&
          returnReducer[TASK_FIELDS_NAME.LOCATION_LATITUDE] !== ''
        ) {
          this.setState({ useCoordinates: true });
        }
      }
    }
  };

  getTaskIfEdit = () => {
    if (this.isEditTask()) {
      const returnReducer = getTaskDetailFromReducer(
        this.props.tasksList,
        this.props.match.params.actionData
      );
      if (returnReducer === null) return returnReducer;

      const isCompleted =
        returnReducer[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.SUCCESS.slug ||
        returnReducer[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.FAIL.slug;
      if (isCompleted) return null;

      if (
        returnReducer[TASK_FIELDS_NAME.LOCATION_ADDRESS] === '' &&
        returnReducer[TASK_FIELDS_NAME.LOCATION_LATITUDE] !== ''
      ) {
        this.setState({ useCoordinates: true });
      }

      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.RECIPIENT_PHONE]:
          returnReducer[TASK_FIELDS_NAME.RECIPIENT_PHONE],
        [TASK_FIELDS_NAME.RECIPIENT_NAME]:
          returnReducer[TASK_FIELDS_NAME.RECIPIENT_NAME],
        [TASK_FIELDS_NAME.RECIPIENT_EMAIL]:
          returnReducer[TASK_FIELDS_NAME.RECIPIENT_EMAIL],
        [TASK_FIELDS_NAME.RECIPIENT_NOTES]:
          returnReducer[TASK_FIELDS_NAME.RECIPIENT_NOTES],
        [TASK_FIELDS_NAME.IS_PICKUP]: returnReducer[TASK_FIELDS_NAME.IS_PICKUP],
        [TASK_FIELDS_NAME.IS_DROPOFF]:
          returnReducer[TASK_FIELDS_NAME.IS_DROPOFF],
        [TASK_FIELDS_NAME.DESCRIPTION]:
          returnReducer[TASK_FIELDS_NAME.DESCRIPTION],
        [TASK_FIELDS_NAME.LOCATION]: returnReducer[TASK_FIELDS_NAME.LOCATION],
        [TASK_FIELDS_NAME.DESTINATION_NOTES]:
          returnReducer[TASK_FIELDS_NAME.DESTINATION_NOTES],
        [TASK_FIELDS_NAME.COMPLETE_AFTER]:
          returnReducer[TASK_FIELDS_NAME.COMPLETE_AFTER],
        [TASK_FIELDS_NAME.COMPLETE_BEFORE]:
          returnReducer[TASK_FIELDS_NAME.COMPLETE_BEFORE],
        [TASK_FIELDS_NAME.QUANTITY]: returnReducer[TASK_FIELDS_NAME.QUANTITY],
        [TASK_FIELDS_NAME.ORDERVALUE]: returnReducer[TASK_FIELDS_NAME.ORDERVALUE],
        [TASK_FIELDS_NAME.SERVICE_MIN]:
          returnReducer[TASK_FIELDS_NAME.SERVICE_MIN],
        [TASK_FIELDS_NAME.PROOF]: returnReducer[TASK_FIELDS_NAME.PROOF],
        [TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR]:
          returnReducer[TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR],
        [TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR]:
          returnReducer[TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR],
        [TASK_FIELDS_NAME.LOCATION_ADDRESS]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_ADDRESS],
        [TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR],
        [TASK_FIELDS_NAME.LOCATION_POSTCODE]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_POSTCODE],
        [TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME],
        [TASK_FIELDS_NAME.LOCATION_BUILDING]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_BUILDING],
        [TASK_FIELDS_NAME.LOCATION_TOWN]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_TOWN],
        [TASK_FIELDS_NAME.LOCATION_STREET_NAME]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_STREET_NAME],
        [TASK_FIELDS_NAME.LOCATION_STREET_NUMBER]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_STREET_NUMBER],
        [TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME],
        [TASK_FIELDS_NAME.LOCATION_LATITUDE]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_LATITUDE],
        [TASK_FIELDS_NAME.LOCATION_LONGITUDE]:
          returnReducer[TASK_FIELDS_NAME.LOCATION_LONGITUDE],
        [TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER]:
          returnReducer[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER],
        [TASK_FIELDS_NAME.ID]: returnReducer[TASK_FIELDS_NAME.ID],
        [TASK_FIELDS_NAME.TIMELINE]: returnReducer[TASK_FIELDS_NAME.TIMELINE],
        [TASK_FIELDS_NAME.DRIVER_ID]: returnReducer[TASK_FIELDS_NAME.DRIVER_ID],
        [TASK_FIELDS_NAME.DRIVER_NAME]:
          returnReducer[TASK_FIELDS_NAME.DRIVER_NAME],
        [TASK_FIELDS_NAME.DRIVER_PHONE]:
          returnReducer[TASK_FIELDS_NAME.DRIVER_PHONE],
        [TASK_FIELDS_NAME.DELAYED_IN_MINUTES]:
          returnReducer[TASK_FIELDS_NAME.DELAYED_IN_MINUTES],
        [TASK_FIELDS_NAME.STATUS]: returnReducer[TASK_FIELDS_NAME.STATUS],
        [TASK_FIELDS_NAME.ETA]: returnReducer[TASK_FIELDS_NAME.ETA],
        [TASK_FIELDS_NAME.CREATED_AT]:
          returnReducer[TASK_FIELDS_NAME.CREATED_AT],
        [TASK_FIELDS_NAME.TASK_NUMBER]:
          returnReducer[TASK_FIELDS_NAME.TASK_NUMBER],
        [TASK_FIELDS_NAME.OWNER]: returnReducer[TASK_FIELDS_NAME.OWNER],
        created_at: returnReducer.created_at
      });

      return returnReducer;
    }
    return null;
  };

  dmGetAllDriversRequest = () => {
    this.setState({
      isActiveDriverLoading: true
    });
    this.props.dmGetAllDriversRequest(() => {
      if (this.state.isActiveDriverLoading)
        this.setState({
          isActiveDriverLoading: false
        });
    });
  };

  onDriverClick = data => {
    const { taskInput } = this.props;
    const currentDriverPressedId = data.id;
    const alreadySelectedDriverId = taskInput[TASK_FIELDS_NAME.DRIVER_ID];

    if (currentDriverPressedId === alreadySelectedDriverId) {
      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.DRIVER_ID]: null
      });
    } else {
      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.DRIVER_ID]: data.id
      });
    }
  };

  onNoRecipientToggle = () => {
    if (
      !_.isNil(this.state.taskDetail) &&
      this.state.taskDetail[TASK_FIELDS_NAME.STATUS] ===
        DM_TASK_TYPE.IN_TRANSIT.slug
    ) {
      return null;
    }

    this.setState(prevState => {
      const additionalState = {};
      if (!prevState.noRecipient) {
        // clearing error state
        additionalState[TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR] = '';
        additionalState[TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR] = '';
      }

      return {
        ...{ noRecipient: !prevState.noRecipient },
        ...additionalState
      };
    });
  };

  validateRecipientName = () => {
    const { taskInput } = this.props;
    const { noRecipient } = this.state;
    let isValid = true;

    const intialErrorState = {
      [TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR]: ''
    };

    // NAME VALIDATION
    if (!noRecipient && _.isEmpty(taskInput[TASK_FIELDS_NAME.RECIPIENT_NAME])) {
      // name is empty

      intialErrorState[
        TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR
      ] = NAME_IS_REQUIRED_ERROR;
      isValid = false;
    } else if (
      !noRecipient &&
      !Util.isValidName(taskInput[TASK_FIELDS_NAME.RECIPIENT_NAME])
    ) {
      // name is invalid
      intialErrorState[
        TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR
      ] = INVALID_NAME_ERROR;

      isValid = false;
    }

    this.setState(intialErrorState);

    return isValid;
  };

  validateRecipientPhone = () => {
    const { taskInput } = this.props;
    const { noRecipient } = this.state;

    let isValid = true;

    const intialErrorState = {
      [TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR]: ''
    };

    // PHONE VALIDATION
    if (
      !noRecipient &&
      _.isEmpty(taskInput[TASK_FIELDS_NAME.RECIPIENT_PHONE])
    ) {
      // phone is empty

      intialErrorState[
        TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR
      ] = PHONE_IS_REQUIRED_ERROR;
      isValid = false;
    } else if (
      !noRecipient &&
      !Util.isValidMobileNumber(taskInput[TASK_FIELDS_NAME.RECIPIENT_PHONE])
    ) {
      // phone is invalid

      intialErrorState[
        TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR
      ] = INVALID_PHONE_ERROR;

      isValid = false;
    }

    this.setState(intialErrorState);

    return isValid;
  };

  validateRecipientEmail = () => {
    const { taskInput } = this.props;
    const { noRecipient } = this.state;
    let isValid = true;
    const intialErrorState = {
      [TASK_FIELDS_NAME.RECIPIENT_EMAIL_ERROR]: ''
    };
    // EMAIL VALIDATION
    if (
      !noRecipient &&
      !_.isEmpty(taskInput[TASK_FIELDS_NAME.RECIPIENT_EMAIL]) &&
      !Util.isEmailValid(taskInput[TASK_FIELDS_NAME.RECIPIENT_EMAIL])
    ) {
      // email is invalid
      intialErrorState[
        TASK_FIELDS_NAME.RECIPIENT_EMAIL_ERROR
      ] = INVALID_EMAIL_ERROR;
      isValid = false;
    }
    this.setState(intialErrorState);
    return isValid;
  };

  validateCompleteBefore = () => {
    const completeBefore = this.props.taskInput[
      TASK_FIELDS_NAME.COMPLETE_BEFORE
    ];

    // dont validate compelete before on edit task
    if (this.isEditTask()) return true;

    if (_.isEmpty(completeBefore)) return true;

    return moment(completeBefore).isAfter(moment());
  };

  validateLocationAddress = () => {
    const { taskInput } = this.props;
    let isValid = true;
    const intialErrorState = {
      [TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR]: ''
    };

    if (_.isEmpty(taskInput[TASK_FIELDS_NAME.LOCATION_ADDRESS])) {
      /* intialErrorState[
        TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR
      ] = ADDRESS_IS_REQUIRED_ERROR; */

      isValid = false;
    } /* else if (!_.isNumber(taskInput[TASK_FIELDS_NAME.LOCATION_LATITUDE])) {
      //

      intialErrorState[TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR] =
        'Please use search for valid location';
    } */

    return isValid;
  };

  isValidCordData = () => {
    const { taskInput } = this.props;
    let isValid = true;
    if (
      _.isEmpty(
        taskInput[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME] &&
          taskInput[TASK_FIELDS_NAME.LOCATION_TOWN]
      )
    ) {
      isValid = false;
      this.setState({ isCordDataValid: false });
    }
    return isValid;
  };

  isValidLatitude = () => {
    if (this.props.taskInput[TASK_FIELDS_NAME.LOCATION_LATITUDE] === '') {
      return false;
    }
    return isValidCoordinates.latitude(
      parseFloat(this.props.taskInput[TASK_FIELDS_NAME.LOCATION_LATITUDE])
    );
  };

  isValidLongitude = () => {
    if (this.props.taskInput[TASK_FIELDS_NAME.LOCATION_LONGITUDE] === '') {
      return false;
    }
    return isValidCoordinates.longitude(
      parseFloat(this.props.taskInput[TASK_FIELDS_NAME.LOCATION_LONGITUDE])
    );
  };

  validateForm = () => {
    const { useCoordinates } = this.state;
    const isLocationValid = useCoordinates || this.validateLocationAddress();
    const isCordDataValid = useCoordinates ? this.isValidCordData() : true;
    const isNameValid = this.validateRecipientName();
    const isPhoneValid = this.validateRecipientPhone();
    const isEmailValid = this.validateRecipientEmail();
    const isValidCompleteBefore = this.validateCompleteBefore();
    const isValidLatitude = this.isValidLatitude();
    const isValidLongitude = this.isValidLongitude();

    const isFormValid =
      isLocationValid &&
      isPhoneValid &&
      isNameValid &&
      isValidCompleteBefore &&
      isValidLatitude &&
      isValidLongitude &&
      isCordDataValid &&
      !this.state.timeError;
    setTimeout(() => {
      const { timeError } = this.state;

      if (!isFormValid) {
        let text = '';
        if (!isPhoneValid) {
          text = this.state[TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR];
        } else if (!isNameValid) {
          text = this.state[TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR];
        } else if (!isLocationValid) {
          text = ADDRESS_IS_REQUIRED_ERROR; // this.state[TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR];
        } else if (!isValidLatitude) {
          text = INVALID_LAT;
        } else if (!isValidLongitude) {
          text = INVALID_LNG;
        } else if (!isCordDataValid) {
          text = 'Coordinates Data is required';
        } else if (timeError) {
          text = TIME_ERROR;
        } else if (!isValidCompleteBefore) {
          text =
            'Time window cannot be in the past. Adjust the time window for the current time or future time.';
        }

        Util.dmConfirmAlert('Error', text, null, null, false);
      }
    }, 200);

    return isFormValid;
  };

  onSubmitClick = () => {
    if (this.validateForm()) {
      const { taskInput } = this.props;
      const { noRecipient } = this.state;
      this.setState({
        isLoading: true
      });
      const payload = {
        name: taskInput[TASK_FIELDS_NAME.RECIPIENT_NAME],
        phone: taskInput[TASK_FIELDS_NAME.RECIPIENT_PHONE],
        email: taskInput[TASK_FIELDS_NAME.RECIPIENT_EMAIL],
        recipient_notes: taskInput[TASK_FIELDS_NAME.RECIPIENT_NOTES],
        isPickup: taskInput[TASK_FIELDS_NAME.IS_PICKUP],
        isDropoff: taskInput[TASK_FIELDS_NAME.IS_DROPOFF],
        order_id: taskInput[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER],
        description: taskInput[TASK_FIELDS_NAME.DESCRIPTION],
        location: {
          latitude: taskInput[TASK_FIELDS_NAME.LOCATION_LATITUDE],
          longitude: taskInput[TASK_FIELDS_NAME.LOCATION_LONGITUDE]
        },
        address: taskInput[TASK_FIELDS_NAME.LOCATION_ADDRESS],
        business_name: taskInput[TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME],
        building: taskInput[TASK_FIELDS_NAME.LOCATION_BUILDING],
        postcode: taskInput[TASK_FIELDS_NAME.LOCATION_POSTCODE],
        city_town: taskInput[TASK_FIELDS_NAME.LOCATION_TOWN],
        street_number: taskInput[TASK_FIELDS_NAME.LOCATION_STREET_NUMBER],
        street_name: taskInput[TASK_FIELDS_NAME.LOCATION_STREET_NAME],
        country: taskInput[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME],
        destination_notes: taskInput[TASK_FIELDS_NAME.DESTINATION_NOTES],
        completeAfter: taskInput[TASK_FIELDS_NAME.COMPLETE_AFTER],
        completeBefore: taskInput[TASK_FIELDS_NAME.COMPLETE_BEFORE],
        quantity: taskInput[TASK_FIELDS_NAME.QUANTITY] || 0,
        order_value: taskInput[TASK_FIELDS_NAME.ORDERVALUE] || 0,
        serviceMin: taskInput[TASK_FIELDS_NAME.SERVICE_MIN] || 0,
        proof: taskInput[TASK_FIELDS_NAME.PROOF],
        driver: taskInput[TASK_FIELDS_NAME.DRIVER_ID],
        task: taskInput[TASK_FIELDS_NAME.TASK_NUMBER]
      };

      if (noRecipient) {
        payload.name = '';
        payload.phone = '';
        payload.email = '';
        payload.recipient_notes = '';
      }

      this.props.dmTaskCreateRequest(payload, response => {
        this.setState({
          isLoading: false
        });

        if (response.status) {
          // close modal
          this.closeCreateTask();
        }
      });
    }
  };

  closeCreateTask = () => {
    this.props.dmClearTaskInput();
    this.props.history.push(ROUTES.DELIVERY_MANAGEMENT);
  };

  removeTask = () => {
    Util.dmConfirmAlert(
      ARE_YOU_SURE,
      CONFIRM_DELETE_TASK,
      'Yes, Delete',
      () => {
        const { taskInput } = this.props;

        this.setState({
          isDeleting: true
        });
        const payload = {
          tasks: [taskInput[TASK_FIELDS_NAME.TASK_NUMBER]],
          isAssigned: [taskInput[TASK_FIELDS_NAME.STATUS]] == 'ASSIGNED'
        };

        this.props.dmTaskDeleteRequest(payload, status => {
          this.setState({
            isDeleting: false
          });
          this.closeCreateTask();
        });
      }
    );
  };

  setTimeError = error => {
    this.setState({ timeError: error });
  };

  getRecentRecords = e => {
    if (
      !_.isEmpty(this.props.taskInput[TASK_FIELDS_NAME.RECIPIENT_PHONE]) && // phone
      _.isEmpty(this.props.taskInput[TASK_FIELDS_NAME.RECIPIENT_NAME]) && // name
      _.isEmpty(this.props.taskInput[TASK_FIELDS_NAME.RECIPIENT_NOTES]) && // rect notes
      _.isEmpty(this.props.taskInput[TASK_FIELDS_NAME.LOCATION_LATITUDE]) && // destination
      _.isEmpty(this.props.taskInput[TASK_FIELDS_NAME.LOCATION_LONGITUDE]) && // codinates
      _.isEmpty(this.props.taskInput[TASK_FIELDS_NAME.LOCATION_BUILDING]) && // building
      _.isEmpty(this.props.taskInput[TASK_FIELDS_NAME.DESTINATION_NOTES]) // desti notes
    ) {
      // call api
      const payload = {
        phone: this.props.taskInput[TASK_FIELDS_NAME.RECIPIENT_PHONE]
      };

      this.props.dmTaskRecentRecordRequest(payload, response => {
        if (
          !_.isUndefined(response.data) &&
          !_.isEmpty(response.data) &&
          !_.isNil(response.data[0])
        ) {
          const _res = response.data[0];
          this.props.dmOnTaskInputUpdate({
            [TASK_FIELDS_NAME.RECIPIENT_NAME]: _res.name || '',
            [TASK_FIELDS_NAME.RECIPIENT_EMAIL]: _res.email || '',
            [TASK_FIELDS_NAME.RECIPIENT_NOTES]: _res.instructions || '',
            [TASK_FIELDS_NAME.DESTINATION_NOTES]: _res.destination_notes || '',
            [TASK_FIELDS_NAME.LOCATION_LATITUDE]: _res.latitude || '',
            [TASK_FIELDS_NAME.LOCATION_LONGITUDE]: _res.longitude || '',
            [TASK_FIELDS_NAME.LOCATION_BUILDING]: _res.building || '',
            [TASK_FIELDS_NAME.LOCATION_ADDRESS]: _res.address || '',
            [TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]: _res.business_name || '',
            [TASK_FIELDS_NAME.LOCATION_POSTCODE]: _res.postcode || '',
            [TASK_FIELDS_NAME.LOCATION_TOWN]: _res.city_town || '',
            [TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME]: _res.country || '',
            [TASK_FIELDS_NAME.LOCATION_STREET_NAME]: _res.street_name || '',
            [TASK_FIELDS_NAME.LOCATION_STREET_NUMBER]: _res.street_number || ''
          });

          const intialErrorState = {
            [TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR]: ''
          };
          this.setState(intialErrorState);
        }
      });
    }
  };

  onUseCoordinatesToggle = () => {
    this.setState(
      {
        useCoordinates: !this.state.useCoordinates,
        isCordDataValid: true
      },
      () => {
        this.props.dmOnTaskInputUpdate({
          [TASK_FIELDS_NAME.LOCATION_ADDRESS]: ''
        });
      }
    );
  };

  render() {
    return (
      <DMTaskInputView
        {...this.props}
        {...this.state}
        onNoRecipientToggle={this.onNoRecipientToggle}
        onModalCloseClick={this.closeCreateTask}
        onSubmitClick={this.onSubmitClick}
        onPhoneChange={this.validateRecipientPhone}
        onNameChange={this.validateRecipientName}
        getRecentRecords={this.getRecentRecords}
        // onAddressChange={this.validateLocationAddress}
        onDriverClick={this.onDriverClick}
        taskDetail={this.state.taskDetail}
        useCoordinates={this.state.useCoordinates}
        isCordDataValid={this.state.isCordDataValid}
        isInTransit={this.isInTransit}
        removeTask={this.removeTask}
        setTimeError={this.setTimeError}
        onUseCoordinatesToggle={this.onUseCoordinatesToggle}
      />
    );
  }
}

const mapStateToProps = ({ dmTasks, dmDriver }) => ({
  taskInput: dmTasks.taskInput,
  driverListing: getActiveDrivers(dmDriver.allDrivers),
  tasksList: dmTasks.tasksList || null
});

const actions = {
  dmOnTaskInputUpdate,
  dmTaskCreateRequest,
  dmClearTaskInput,
  dmGetAllDriversRequest,
  dmTaskDeleteRequest,
  dmTaskRecentRecordRequest,
  dmGetSingleTaskDetailsRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMTaskInputController)));
