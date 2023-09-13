// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import {
  dmOnTaskSelect,
  dmOnDriverSelect,
  dmUnselectAllTasks,
  dmAddNewTask,
  dmUpdateTaskDelay,
  getDmFilterDataSuccess,
  dmOnTaskDeleted
} from '../../../actions/DMFilterActions';

import {
  dmDriverCreateSuccess,
  dmDriverDetailUpdate,
  dmDriverDeleteSuccess,
  dmViewDriver
} from '../../../actions/DMDriverActions';
import DMMapView from './DMMapView';
import {
  TASK_FIELDS_NAME,
  DM_TASK_TYPE,
  DRIVER_FIELDS_NAME,
  DM_DRIVER_STATUS_TYPE
} from '../../../constants';
import {
  getSelectedFilterTasksOnly,
  getActiveDrivers,
  sortBySequence,
  showHubEditDetail,
  showTaskDetail
} from '../../../helpers/dmHelper';
import Util from '../../../services/Util';

const getPolylineData = (
  driverWiseGroupedTasks,
  tasksList,
  selectedTasks,
  driversList,
  selectedDriverId
) => {
  const finalData = {
    uniqueDriversForSelectedTasks: [],
    polyLineFinalData: []
  };

  if (selectedTasks.length > 0) {
    let uniqueDriversForSelectedTasks = [];

    selectedTasks.forEach(element => {
      const taskIndex = _.findIndex(tasksList, {
        [TASK_FIELDS_NAME.TASK_NUMBER]: element
      });

      if (taskIndex !== -1 && tasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_ID])
        finalData.uniqueDriversForSelectedTasks.push(
          tasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_ID]
        );
    });

    finalData.uniqueDriversForSelectedTasks = _.uniq(
      finalData.uniqueDriversForSelectedTasks
    );

    finalData.uniqueDriversForSelectedTasks.forEach((taskDriverId, index) => {
      let polylineData = driverWiseGroupedTasks[taskDriverId];

      if (polylineData.length > 0) {
        polylineData = sortBySequence(polylineData);
        finalData.polyLineFinalData.push([]);

        // adding driver point in polyline
        const driverIndex = _.findIndex(driversList, {
          [DRIVER_FIELDS_NAME.ID]: taskDriverId
        });
        if (driverIndex !== -1) {
          const driverDetail = driversList[driverIndex];

          if (
            !_.isNil(driverDetail[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE])
          ) {
            finalData.polyLineFinalData[index].push({
              lat: driverDetail[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE],
              lng: driverDetail[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE]
            });
          }
        }

        polylineData.forEach(internalElement => {
          // adding tasks point in polyline
          if (
            !_.isNull(internalElement.latitude) &&
            (internalElement[TASK_FIELDS_NAME.STATUS] ===
              DM_TASK_TYPE.ASSIGNED.slug ||
              internalElement[TASK_FIELDS_NAME.STATUS] ===
                DM_TASK_TYPE.IN_TRANSIT.slug)
          ) {
            finalData.polyLineFinalData[index].push({
              lat: internalElement[TASK_FIELDS_NAME.LOCATION_LATITUDE],
              lng: internalElement[TASK_FIELDS_NAME.LOCATION_LONGITUDE]
            });
          }
        });
      }
    });
  } else if (selectedDriverId >= 0) {
    // else if any driver is selected
    finalData.polyLineFinalData.push([]);
    const liveDriver = _.find(driversList, driver => {
      // getting driver from driver list for live update reason
      return driver[DRIVER_FIELDS_NAME.ID] === selectedDriverId;
    });
    let selectedDriverTasks = _.filter(tasksList, task => {
      // getting driver specific tasks from task list
      if (task.driver_id === selectedDriverId) {
        if (
          task[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.ASSIGNED.slug ||
          task[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    selectedDriverTasks.forEach(element => {
      // adding tasks to finalData.uniqueDriversForSelectedTasks for task number on map

      const taskIndex = _.findIndex(tasksList, {
        [TASK_FIELDS_NAME.TASK_NUMBER]: element[TASK_FIELDS_NAME.TASK_NUMBER]
      });
      if (tasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_ID])
        finalData.uniqueDriversForSelectedTasks.push(
          tasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_ID]
        );
    });

    selectedDriverTasks = sortBySequence(selectedDriverTasks); // sorting driver specific tasks by sequence

    // adding driver current lat long to poly data to start line from driver
    if (liveDriver) {
      if (
        // checking if driver is ACTIVE/IN_TRANSIT
        liveDriver[DRIVER_FIELDS_NAME.STATUS] ===
          DM_DRIVER_STATUS_TYPE.ACTIVE.slug ||
        liveDriver[DRIVER_FIELDS_NAME.STATUS] ===
          DM_DRIVER_STATUS_TYPE.IN_TRANSIT.slug
      ) {
        if (
          // checking if driver's lat/lng is not null
          !_.isNil(liveDriver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE]) &&
          !_.isNil(liveDriver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE])
        ) {
          finalData.polyLineFinalData[0].push({
            lat: liveDriver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE],
            lng: liveDriver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE]
          });
        }
      }
    }
    selectedDriverTasks.forEach((element, index) => {
      // adding tasks lat/lng objects to finalData.polyLineFinalData[0] to draw lines
      finalData.polyLineFinalData[0].push({
        lat: element[TASK_FIELDS_NAME.LOCATION_LATITUDE],
        lng: element[TASK_FIELDS_NAME.LOCATION_LONGITUDE]
      });
    });
  }
  return finalData;
};

const checkIfFilterHasToday = (dateStartingFrom, dateEndingTill) => {
  const isYesterday = moment(moment().subtract(1, 'day')).isBetween(
    dateStartingFrom,
    dateEndingTill
  );
  const isTomorrow = moment(moment().add(1, 'day')).isBetween(
    dateStartingFrom,
    dateEndingTill
  );
  const isToday = moment(moment()).isBetween(dateStartingFrom, dateEndingTill); // true
  return isToday || isTomorrow || isYesterday;
};

class DMMapController extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!_.isEqual(nextProps.tasksList)) {
      return {
        polylineData: getPolylineData(
          nextProps.driverWiseGroupedTasks,
          nextProps.tasksList,
          nextProps.selectedTasks,
          nextProps.driversList,
          nextProps.selectedDriverId
        )
      };
    } else return null; // Triggers no change in the state
  }

  static propTypes = {
    tasksList: PropTypes.array.isRequired,
    isFilterVisble: PropTypes.bool.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      polylineData: getPolylineData(
        props.driverWiseGroupedTasks,
        props.tasksList,
        props.selectedTasks,
        props.driversList,
        props.selectedDriverId
      ),
      hoveredDriver: null,
      mapZoom: 10,
      hoveredHubId: null,
      mapTypeId: 'roadmap',
      showTraffic: false
    };
  }

  componentDidMount() {
    this._registerOnEscPress();
    setTimeout(() => {
      this.onMapZoomToFitClick();
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', () => {});
  }

  _registerOnEscPress = () => {
    window.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === 27) {
        this.props.dmUnselectAllTasks();
        this.props.dmOnDriverSelect(-1);
        this.onDriverMouseOut();
      }
    });
  };

  onDriverMouseOver = id => {
    this.setState({
      hoveredDriver: id
    });
  };

  onDriverMouseOut = () => {
    this.setState({
      hoveredDriver: null,
      hoveredHubId: null
    });
  };

  onMapClick = () => {
    this.props.dmUnselectAllTasks();
    this.props.dmOnDriverSelect(-1);
    this.onDriverMouseOut();
  };

  setHoveredHubId = id => {
    this.setState({ hoveredHubId: id });
  };

  onHubClick = data => {
    const hubId = data.id;
    if (hubId) return showHubEditDetail(this.props.history, hubId);
  };

  driverClick = selectedDriverId => {
    this.props.dmViewDriver(selectedDriverId);
    this.props.dmUnselectAllTasks();
    this.props.dmOnDriverSelect(selectedDriverId);
    getPolylineData(
      this.props.driverWiseGroupedTasks,
      this.props.tasksList,
      this.props.selectedTasks,
      this.props.driversList,
      selectedDriverId
    );
  };

  handleMarkerClick = marker => {
    this.setState({
      hoveredDriver: null,
      hoveredHubId: null
    });
    showTaskDetail(this.props.history, marker[TASK_FIELDS_NAME.TASK_NUMBER]);

    this.props.dmOnTaskSelect(marker);
  };

  fitSelectedPinsInMapFrame = tasksList => {
    //
  };

  onMapZoomInClick = () => {
    if (this.mapReference) {
      const currentZoom = this.mapReference.getZoom();
      if (currentZoom < 22) {
        this.setState({
          mapZoom: currentZoom + 1
        });
      }
    }
  };

  onMapZoomOutClick = () => {
    if (this.mapReference) {
      const currentZoom = this.mapReference.getZoom();
      if (currentZoom > 2) {
        this.setState(
          {
            mapZoom: currentZoom - 1
          },
          () => {
            if (Util.checkDev()) console.log({ zoooooooom: currentZoom });
          }
        );
      }
    }
  };

  onMapZoomToFitClick = () => {
    const {
      selectedTasks,
      tasksList,
      selectedDriverId,
      driversList
    } = this.props;
    if (selectedDriverId !== -1) {
      // some driver is selected
      const driver = _.find(driversList, { id: selectedDriverId });
      const points = [];
      if (
        // checking if driver's lat/lng is not null
        !_.isNil(driver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE]) &&
        !_.isNil(driver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE])
      ) {
        points.push({
          lat: driver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE],
          lng: driver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE]
        });
      }
      const selectedDriverTasks = _.filter(tasksList, task => {
        // getting driver specific tasks from task list
        if (task.driver_id === selectedDriverId) {
          if (
            task[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.ASSIGNED.slug ||
            task[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
      selectedDriverTasks.forEach(element => {
        points.push({
          lat: element[TASK_FIELDS_NAME.LOCATION_LATITUDE],
          lng: element[TASK_FIELDS_NAME.LOCATION_LONGITUDE]
        });
      });
      this.autoFitToGivenPoints(points);
    } else if (selectedTasks.length > 0) {
      // tasks selected
      const points = [];
      for (let i = 0; i < selectedTasks.length; i++) {
        const element = selectedTasks[i];

        const taskIndex = _.findIndex(tasksList, {
          [TASK_FIELDS_NAME.TASK_NUMBER]: element
        });

        if (taskIndex !== -1) {
          points.push({
            lat: tasksList[taskIndex][TASK_FIELDS_NAME.LOCATION_LATITUDE],
            lng: tasksList[taskIndex][TASK_FIELDS_NAME.LOCATION_LONGITUDE]
          });
        }
      }

      this.autoFitToGivenPoints(points);
    } else {
      // nothing selected
      this.autoFitMapMarkers();
    }
  };

  autoFitToGivenPoints = points => {
    if (points.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      points.forEach(point => {
        bounds.extend({
          lat: point.lat,
          lng: point.lng
        });
      });

      if (this.mapReference) {
        this.mapReference.fitBounds(bounds);
        const zoomState = this.mapReference.getZoom();

        if (zoomState > 20) {
          this.setState(prevState => ({
            mapZoom: prevState.mapZoom === 10 ? 11 : 10
          }));
        }
      }
    } else {
      if (Util.checkDev()) console.warn('no data in points array');
    }
  };

  switchMapType = () => {
    if (this.state.mapTypeId === 'roadmap') {
      this.setState({ mapTypeId: 'hybrid' });
    } else {
      this.setState({ mapTypeId: 'roadmap' });
    }
  };

  switchTrafficLayer = () => {
    this.setState({ showTraffic: !this.state.showTraffic });
  };

  autoFitMapMarkers() {
    const { tasksList } = this.props;
    if (tasksList.length && window.google) {
      const bounds = new window.google.maps.LatLngBounds();
      for (let i = 0; i < tasksList.length; i++) {
        bounds.extend({
          lat: tasksList[i][TASK_FIELDS_NAME.LOCATION_LATITUDE],
          lng: tasksList[i][TASK_FIELDS_NAME.LOCATION_LONGITUDE]
        });
      }
      if (this.mapReference) {
        this.mapReference.fitBounds(bounds);
        const zoomState = this.mapReference.getZoom();

        if (zoomState > 20) {
          this.setState(prevState => ({
            mapZoom: prevState.mapZoom === 10 ? 11 : 10
          }));
        }
      }
    }
  }

  render() {
    return (
      <DMMapView
        {...this.props}
        mapRef={node => (this.mapReference = node)}
        polylineData={this.state.polylineData}
        handleMarkerClick={this.handleMarkerClick}
        onDriverMouseOver={this.onDriverMouseOver}
        onDriverMouseOut={this.onDriverMouseOut}
        hoveredDriver={this.state.hoveredDriver}
        onMapClick={this.onMapClick}
        mapZoom={this.state.mapZoom}
        hoveredHubId={this.state.hoveredHubId}
        setHoveredHubId={this.setHoveredHubId}
        onHubClick={this.onHubClick}
        driverClick={this.driverClick}
        onMapZoomInClick={this.onMapZoomInClick}
        onMapZoomOutClick={this.onMapZoomOutClick}
        onMapZoomToFitClick={this.onMapZoomToFitClick}
        mapTypeId={this.state.mapTypeId}
        switchMapType={this.switchMapType}
        showTraffic={this.state.showTraffic}
        switchTrafficLayer={this.switchTrafficLayer}
      />
    );
  }
}

const mapStateToProps = ({ dmTasks, dmFilter, user, dmDriver, dmHub }) => {
  const allFilteredTasks = _.sortBy(
    getSelectedFilterTasksOnly(dmTasks.tasksList),
    [TASK_FIELDS_NAME.STATUS]
  );

  const driverWiseGroupedTasks = _.chain(allFilteredTasks)
    .groupBy('driver_id')
    .value();

  return {
    tasksList: allFilteredTasks,
    driverWiseGroupedTasks,
    isFilterVisble: dmFilter.isFilterVisble,
    selectedTasks: dmTasks.selectedTasks,
    selectedDriverId: dmTasks.selectedDriverId,
    isAdmin: user.data.admin,
    driversList: getActiveDrivers(dmDriver.allDrivers),
    userData: user.data,
    filterHasToday: checkIfFilterHasToday(
      dmFilter.dateStartingFrom,
      dmFilter.dateEndingTill
    ),
    lastFilterUpdatedTime: dmFilter.lastUpdatedTime,
    filterDelayMinutes: dmFilter.delayedInMinutes,
    hubList: dmHub.allHubs
  };
};

const actions = {
  dmOnTaskSelect,
  dmOnDriverSelect,
  dmUnselectAllTasks,
  dmAddNewTask,
  dmUpdateTaskDelay,
  getDmFilterDataSuccess,
  dmOnTaskDeleted,
  dmDriverCreateSuccess,
  dmDriverDetailUpdate,
  dmDriverDeleteSuccess,
  dmViewDriver
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMMapController)));
