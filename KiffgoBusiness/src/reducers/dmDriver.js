// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import {
  DM_ON_DRIVER_INPUT_UPDATE,
  DM_CLEAR_DRIVER_INPUT,
  USER_LOGOUT,
  DM_GET_ALL_DRIVERS,
  DM_VIEW_DRIVER,
  DM_SCHEDULE_DRIVER,
  DM_DRIVER_DETAIL_UPDATE,
  DM_HIDE_DRIVER_VIEWER,
  DM_DRIVER_CREATE,
  DM_DRIVER_DELETE,
  DM_DRIVER_UPDATE_TRACKING,
  DM_DRIVER_OFF_DUTY_AUTOMATICALLY,
  DM_HIDE_DRIVER_SCHEDULER,
  DM_GET_DRIVER_TASKS,
  DM_SELECT_BULK_DRIVER_TASKS,
  DM_UNSELECT_ALL_DRIVER_TASKS,
  DM_ON_DRIVER_TASK_SELECT,
  DM_TASK_SEQUENCE_CHANGED,
  DM_ON_TASK_DELETED
} from '../actions/ActionTypes';
import {
  DRIVER_FIELDS_NAME,
  DM_DRIVER_STATUS_TYPE,
  TASK_FIELDS_NAME,
  DM_TASK_TYPE
} from '../constants';
const moment = extendMoment(Moment);

const initialDriverInput = {
  [DRIVER_FIELDS_NAME.DRIVER_PHONE]: '',
  [DRIVER_FIELDS_NAME.DRIVER_NAME]: '',
  [DRIVER_FIELDS_NAME.DRIVER_EMAIL]: '',
  [DRIVER_FIELDS_NAME.DRIVER_LOCATION]: '',
  [DRIVER_FIELDS_NAME.DRIVER_ADDRESS]: '',
  [DRIVER_FIELDS_NAME.DRIVER_POSTCODE]: '',
  [DRIVER_FIELDS_NAME.DRIVER_CITY]: '',
  [DRIVER_FIELDS_NAME.DRIVER_STREET_NAME]: '',
  [DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER]: '',
  [DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME]: '',
  [DRIVER_FIELDS_NAME.NUMBER_PLATE]: '',
  [DRIVER_FIELDS_NAME.MAKE_MODEL]: '',
  [DRIVER_FIELDS_NAME.YEAR]: '',
  [DRIVER_FIELDS_NAME.COLOR]: '',
  [DRIVER_FIELDS_NAME.TRANSPORT_TYPE]: 4,
  [DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE]: {},
  [DRIVER_FIELDS_NAME.VEHICLE_CAPACITY]: 0,
  [DRIVER_FIELDS_NAME.SPEED]: 100
};

const initialState = Immutable({
  driverInput: _.cloneDeep(initialDriverInput),
  allDrivers: [],
  viewDriverId: null,
  scheduleDriverId: null,
  viewDriverOpenedFromListing: false, // this flag is used to navigate back to driver listing when user closes driver editing
  allTasks: [],
  selectedDriverTasks: []
});

const addTrackingDataInDriverDetail = (existingDetails, newData) => {
  const taskId = newData.taskId == -1 ? null : newData.taskId || null;
  const latitude = newData.location.coords.latitude || '';
  const longitude = newData.location.coords.longitude || '';
  let battery = null;
  if (!_.isUndefined(newData.location)) {
    if (!_.isUndefined(newData.location.battery)) {
      if (
        !_.isUndefined(newData.location.battery.level) &&
        newData.location.battery.level > 0
      ) {
        battery = (newData.location.battery.level * 100).toFixed(0);
      }
    }
  }
  // newData.location.battery.level == -1
  //   ? null
  //   : newData.location.battery.level * 100 || null;
  const appVersion = newData.appVersion || null;
  let manufacturer = null;
  let model = null;
  let platform = null;
  let version = null;

  if (!_.isUndefined(newData.deviceInfo) && !_.isEmpty(newData.deviceInfo)) {
    manufacturer = newData.deviceInfo.manufacturer || null;
    model = newData.deviceInfo.model || null;
    platform = newData.deviceInfo.platform || null;
    version = newData.deviceInfo.version || null;
  }

  // if (manufacturer != null && manufacturer == "Apple") {
  //   manufacturer = '';
  // }
  let status = existingDetails[DRIVER_FIELDS_NAME.STATUS]; // DM_DRIVER_STATUS_TYPE.ACTIVE.slug;

  if (!_.isNull(taskId) && latitude !== '' && longitude !== '') {
    status = DM_DRIVER_STATUS_TYPE.IN_TRANSIT.slug;
  } else if (_.isNull(taskId) && latitude !== '' && longitude !== '') {
    status = DM_DRIVER_STATUS_TYPE.ACTIVE.slug;
  } else if (_.isNull(taskId) && latitude === '' && longitude === '') {
    status = DM_DRIVER_STATUS_TYPE.INACTIVE.slug;
  }

  return {
    ...existingDetails,
    ...{
      [DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE]: latitude,
      [DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE]: longitude,
      [DRIVER_FIELDS_NAME.DRIVER_APP_VERSION]: appVersion,
      [DRIVER_FIELDS_NAME.DRIVER_PHONE_MANUFACTURER]: manufacturer,
      [DRIVER_FIELDS_NAME.DRIVER_PHONE_MODEL]: model,
      [DRIVER_FIELDS_NAME.DRIVER_PHONE_OS]: platform,
      [DRIVER_FIELDS_NAME.DRIVER_PHONE_OS_VERSION]: version,
      [DRIVER_FIELDS_NAME.DRIVER_PHONE_BATTERY]: battery,
      [DRIVER_FIELDS_NAME.DRIVER_LOCATION_TIMESTAMP]:
        newData.location.timestamp || null,
      [DRIVER_FIELDS_NAME.DRIVER_CURRENT_TASK_ID]: taskId,
      [DRIVER_FIELDS_NAME.STATUS]: status
    }
  };
};

const setSelectionStatus = (tasksList, selectedDriverTasks) => {
  const finalTasksList = [];

  if (selectedDriverTasks.length === 0) {
    return _.map(tasksList, item => {
      return { ...item, ...{ isSelected: false } };
    });
  }

  tasksList.forEach((element, index) => {
    // selecting / unselecting individual task
    if (selectedDriverTasks.includes(element[TASK_FIELDS_NAME.TASK_NUMBER])) {
      finalTasksList.push({
        ...element,
        ...{ isSelected: true }
      });
    } else {
      finalTasksList.push({
        ...element,
        ...{ isSelected: false }
      });
    }
  });
  return finalTasksList;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DM_ON_DRIVER_INPUT_UPDATE: {
      const driverCurrentState = _.cloneDeep(state.driverInput);
      const driverNewState = { ...driverCurrentState, ...action.data };

      return Immutable.merge(state, {
        driverInput: driverNewState
      });
    }
    case DM_CLEAR_DRIVER_INPUT: {
      return Immutable.merge(state, {
        driverInput: initialDriverInput
      });
    }

    case DM_GET_ALL_DRIVERS.SUCCESS: {
      return Immutable.merge(state, {
        allDrivers: _.uniqBy(action.data, 'id')
      });
    }

    case DM_DRIVER_CREATE.SUCCESS: {
      return Immutable.merge(state, {
        allDrivers: _.uniqBy([...state.allDrivers, ...action.data], 'id')
      });
    }
    case DM_VIEW_DRIVER: {
      return Immutable.merge(state, {
        viewDriverId: action.driverId,
        viewDriverOpenedFromListing: action.viewDriverOpenedFromListing
      });
    }
    case DM_SCHEDULE_DRIVER: {
      return Immutable.merge(state, {
        scheduleDriverId: action.driverId,
        viewDriverOpenedFromListing: action.viewDriverOpenedFromListing
      });
    }

    case DM_DRIVER_DETAIL_UPDATE: {
      const data = action.data[0];
      const allDriversClone = _.cloneDeep(state.allDrivers);
      if (allDriversClone.length) {
        const indexOfExistingDriver = _.findIndex(allDriversClone, {
          id: data.id
        });
        if (indexOfExistingDriver >= 0) {
          // driver already exists in list
          allDriversClone[indexOfExistingDriver] = data;
        }
      }

      return Immutable.merge(state, {
        allDrivers: _.uniqBy(allDriversClone, 'id')
      });
    }

    case DM_DRIVER_UPDATE_TRACKING: {
      const allDriversClone = _.cloneDeep(state.allDrivers);
      const dataCopy = _.cloneDeep(action.data);

      if (_.isArray(dataCopy)) {
        dataCopy.forEach((element, index) => {
          const indexOfExistingDriver = _.findIndex(allDriversClone, {
            id: element.driverId
          });

          if (indexOfExistingDriver >= 0) {
            // driver already exists in list

            allDriversClone[
              indexOfExistingDriver
            ] = addTrackingDataInDriverDetail(
              allDriversClone[indexOfExistingDriver],
              element
            );
          }
        });
      } else if (_.isObject(dataCopy)) {
        const indexOfExistingDriver = _.findIndex(allDriversClone, {
          id: dataCopy.driverId
        });
        if (indexOfExistingDriver >= 0) {
          // driver already exists in list
          allDriversClone[
            indexOfExistingDriver
          ] = addTrackingDataInDriverDetail(
            allDriversClone[indexOfExistingDriver],
            dataCopy
          );
        }
      }
      return Immutable.merge(state, {
        allDrivers: _.uniqBy(allDriversClone, 'id')
      });
    }

    case DM_HIDE_DRIVER_VIEWER: {
      return Immutable.merge(state, {
        viewDriverId: null,
        viewDriverOpenedFromListing: false
      });
    }
    case DM_GET_DRIVER_TASKS.SUCCESS: {
      return Immutable.merge(state, {
        allTasks: action.tasks
      });
    }
    case DM_HIDE_DRIVER_SCHEDULER: {
      return Immutable.merge(state, {
        scheduleDriverId: null,
        viewDriverOpenedFromListing: false
      });
    }

    case DM_DRIVER_DELETE.SUCCESS: {
      const { driverId } = action;

      // Deleting driver from all driver
      const allDriversClone = _.cloneDeep(state.allDrivers);

      if (allDriversClone.length) {
        const indexOfExistingAllDriver = _.findIndex(allDriversClone, {
          id: driverId
        });
        if (indexOfExistingAllDriver >= 0) {
          // driver already exists in all list
          allDriversClone.splice(indexOfExistingAllDriver, 1);
        }
      }

      return Immutable.merge(state, {
        allDrivers: _.uniqBy(allDriversClone, 'id')
      });
    }

    case DM_DRIVER_OFF_DUTY_AUTOMATICALLY: {
      const driverIds = action.data.data.drivers;
      const allDriversClone = _.cloneDeep(state.allDrivers);

      driverIds.forEach(item => {
        const indexOfThisDriver = _.findIndex(allDriversClone, {
          id: item
        });

        if (indexOfThisDriver !== -1) {
          allDriversClone[indexOfThisDriver] = {
            ...allDriversClone[indexOfThisDriver],
            ...{
              [DRIVER_FIELDS_NAME.STATUS]: DM_DRIVER_STATUS_TYPE.INACTIVE.slug,
              [DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE]: null,
              [DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE]: null
            }
          };
        }
      });

      return Immutable.merge(state, {
        allDrivers: _.uniqBy(allDriversClone, 'id')
      });
    }

    case DM_SELECT_BULK_DRIVER_TASKS: {
      // Unselect all markers
      const finalAllTasks = [];

      let selectedDriverTasks = [];

      if (action.taskNumbers.length) {
        selectedDriverTasks = action.taskNumbers;

        state.allTasks.forEach((element, index) => {
          // selecting / unselecting individual task
          if (
            selectedDriverTasks.includes(element[TASK_FIELDS_NAME.TASK_NUMBER])
          ) {
            finalAllTasks.push({
              ...element,
              ...{ isSelected: true }
            });
          } else {
            finalAllTasks.push({
              ...element,
              ...{ isSelected: false }
            });
          }
        });
      }

      return Immutable.merge(state, {
        selectedDriverTasks,
        allTasks: _.uniqBy(finalAllTasks, 'id')
      });
    }

    case DM_UNSELECT_ALL_DRIVER_TASKS: {
      // Unselect all markers
      const finalTasksList = _.cloneDeep(state.allTasks);
      finalTasksList.forEach((element, index) => {
        finalTasksList[index] = {
          ...element,
          ...{ isSelected: false }
        };
      });

      return Immutable.merge(state, {
        selectedDriverTasks: [],
        allTasks: _.uniqBy(finalTasksList, 'id')
      });
    }

    case DM_ON_DRIVER_TASK_SELECT: {
      const selectedDriverTasks = _.xor(state.selectedDriverTasks, [
        action.data[TASK_FIELDS_NAME.TASK_NUMBER]
      ]);

      const allTasksClone = _.cloneDeep(state.allTasks);

      const finalAllTasks = setSelectionStatus(
        allTasksClone,
        selectedDriverTasks
      );

      return Immutable.merge(state, {
        selectedDriverTasks,
        allTasks: _.uniqBy(finalAllTasks, 'id')
      });
    }

    case DM_TASK_SEQUENCE_CHANGED: {
      // task sequence changed
      const finalAllTasks = _.cloneDeep(state.allTasks);
      let taskIsUnassigned = action.data.driver == null;

      action.data.tasks.forEach(element => {
        let taskIndex = _.findIndex(finalAllTasks, {
          [TASK_FIELDS_NAME.TASK_NUMBER]: element.uniquestring
        });

        if (taskIndex !== -1) {
          finalAllTasks[taskIndex][TASK_FIELDS_NAME.SEQUENCE] =
            element.sequence;

          if (element.driver === action.data.driverId) {
            if (taskIsUnassigned) {
              finalAllTasks[taskIndex][TASK_FIELDS_NAME.DRIVER_ID] = null;
              finalAllTasks[taskIndex][TASK_FIELDS_NAME.DRIVER_NAME] = '';
              finalAllTasks[taskIndex][TASK_FIELDS_NAME.DRIVER_PHONE] = '';
              finalAllTasks[taskIndex][TASK_FIELDS_NAME.STATUS] =
                DM_TASK_TYPE.UNASSIGNED.slug;
            } else {
              // setting assgined details
              finalAllTasks[taskIndex][TASK_FIELDS_NAME.DRIVER_ID] =
                action.data.driver.id;
              finalAllTasks[taskIndex][TASK_FIELDS_NAME.DRIVER_NAME] =
                action.data.driver.name;
              finalAllTasks[taskIndex][TASK_FIELDS_NAME.DRIVER_PHONE] =
                action.data.driver.phone;
              finalAllTasks[taskIndex][TASK_FIELDS_NAME.STATUS] =
                DM_TASK_TYPE.ASSIGNED.slug;
            }
          }
        }
      });

      return Immutable.merge(state, {
        allTasks: _.uniqBy(finalAllTasks, 'id')
      });
    }

    case DM_ON_TASK_DELETED: {
      const finalTasksList = _.cloneDeep(state.allTasks);
      const finalSelectedTasks = _.cloneDeep(state.selectedDriverTasks);
      _.remove(finalTasksList, function(el) {
        return (
          action.taskNumbers.indexOf(el[TASK_FIELDS_NAME.TASK_NUMBER]) >= 0
        );
      });

      _.remove(finalSelectedTasks, function(el) {
        return _.includes(action.taskNumbers, el);
      });

      return Immutable.merge(state, {
        allTasks: _.uniqBy(finalTasksList, 'id'),
        selectedDriverTasks: finalSelectedTasks
      });
    }
    // when user logout then empty data
    case USER_LOGOUT.SUCCESS: {
      return Immutable.merge(state, initialState);
    }
    default:
      return state;
  }
};
