// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import {
  USER_LOGOUT,
  DM_ON_TASK_INPUT_UPDATE,
  DM_CLEAR_TASK_INPUT,
  GET_DM_FILTER_DATA,
  DM_ON_TASK_SELECT,
  DM_UNSELECT_ALL_TASKS,
  DM_ADD_NEW_TASK,
  DM_UPDATE_TASK_DELAY,
  DM_ON_TASK_DELETED,
  DM_GET_SINGLE_TASK_DETAILS,
  DM_SELECT_BULK_TASKS,
  DM_TASK_SEQUENCE_CHANGED,
  DM_ON_DRIVER_SELECT,
  DM_SHOW_OPTIMIZE_TASK_MODAL,
  DM_SHOW_COMMUNICATION_MODAL,
  DM_UPDATE_TASK_ETA,
  DM_TASK_SEARCH,
  DM_CLEAR_TASK_LIST
} from '../actions/ActionTypes';
import { calculateDelayInMinutes, calculateETD } from '../helpers/dmHelper';
import {
  DM_TASK_STATUS_LENGTH,
  DM_TASK_TYPE,
  TASK_FIELDS_NAME
} from '../constants';

const moment = extendMoment(Moment);

const initalTaskInput = {
  [TASK_FIELDS_NAME.RECIPIENT_PHONE]: '',
  [TASK_FIELDS_NAME.RECIPIENT_EMAIL]: '',
  [TASK_FIELDS_NAME.RECIPIENT_NAME]: '',
  [TASK_FIELDS_NAME.RECIPIENT_NOTES]: '',
  [TASK_FIELDS_NAME.IS_PICKUP]: false,
  [TASK_FIELDS_NAME.IS_DROPOFF]: true,
  [TASK_FIELDS_NAME.DESCRIPTION]: '',
  [TASK_FIELDS_NAME.LOCATION]: {
    [TASK_FIELDS_NAME.LOCATION_LATITUDE]: '',
    [TASK_FIELDS_NAME.LOCATION_LONGITUDE]: ''
  },
  [TASK_FIELDS_NAME.DESTINATION_NOTES]: '',
  [TASK_FIELDS_NAME.COMPLETE_AFTER]: '',
  [TASK_FIELDS_NAME.COMPLETE_BEFORE]: '',
  [TASK_FIELDS_NAME.QUANTITY]: 0,
  [TASK_FIELDS_NAME.SERVICE_MIN]: 0,
  [TASK_FIELDS_NAME.PROOF]: [],
  [TASK_FIELDS_NAME.LOCATION_ADDRESS]: '',
  [TASK_FIELDS_NAME.LOCATION_BUILDING]: '',
  [TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]: '',
  [TASK_FIELDS_NAME.LOCATION_POSTCODE]: '',
  [TASK_FIELDS_NAME.LOCATION_TOWN]: '',
  [TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER]: '',
  [TASK_FIELDS_NAME.TASK_NUMBER]: '',
  [TASK_FIELDS_NAME.OWNER]: '',
  [TASK_FIELDS_NAME.LOCATION_LATITUDE]: '',
  [TASK_FIELDS_NAME.LOCATION_LONGITUDE]: '',
  [TASK_FIELDS_NAME.LOCATION_STREET_NAME]: '',
  [TASK_FIELDS_NAME.LOCATION_STREET_NUMBER]: '',
  [TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME]: ''
};

const getSortedTasklist = taskList => taskList;
// _.sortBy(taskList, ['id']);

const getFilteredSelectedTasks = (selectedTasks, tasksList) => {
  const finalSelectedTask = [];
  selectedTasks.forEach(element => {
    const itsIndex = _.findIndex(tasksList, {
      [TASK_FIELDS_NAME.TASK_NUMBER]: element
    });
    if (itsIndex >= 0) {
      finalSelectedTask.push(element);
    }
  });
  return finalSelectedTask;
};

const setSelectionStatus = (tasksList, selectedTasks) => {
  const finalTasksList = [];

  if (selectedTasks.length === 0) {
    return _.map(tasksList, item => {
      return { ...item, ...{ isSelected: false } };
    });
  }

  tasksList.forEach((element, index) => {
    // selecting / unselecting individual task
    if (selectedTasks.includes(element[TASK_FIELDS_NAME.TASK_NUMBER])) {
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

const initialState = Immutable({
  taskInput: _.cloneDeep(initalTaskInput),
  tasksList: [],
  selectedTasks: [],
  selectedDriverId: -1,
  showOptimizeTaskModal: false,
  showCommunicationModal: false,
  searchedTasks: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    // on task selection and unselection
    case DM_ON_TASK_INPUT_UPDATE: {
      const tastCurrentState = _.cloneDeep(state.taskInput);
      const taskNewState = { ...tastCurrentState, ...action.data };

      return Immutable.merge(state, {
        taskInput: taskNewState
      });
    }

    case DM_CLEAR_TASK_INPUT: {
      return Immutable.merge(state, {
        taskInput: initalTaskInput
      });
    }

    case GET_DM_FILTER_DATA.SUCCESS: {
      const tasksList = [...action.data.tasksList, ...state.tasksList];

      const selectedTasks = getFilteredSelectedTasks(
        state.selectedTasks,
        action.data.tasksList
      );
      const finalTasksList = setSelectionStatus(tasksList, selectedTasks);
      return Immutable.merge(state, {
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id'),
        selectedTasks
      });
    }

    case DM_ON_TASK_SELECT: {
      const selectedTasks = _.xor(state.selectedTasks, [
        action.data[TASK_FIELDS_NAME.TASK_NUMBER]
      ]);

      const tasksListClone = _.cloneDeep(state.tasksList);

      const finalTasksList = setSelectionStatus(tasksListClone, selectedTasks);

      return Immutable.merge(state, {
        selectedTasks,
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id'),
        selectedDriverId: -1
      });
    }
    case DM_ON_DRIVER_SELECT: {
      return Immutable.merge(state, {
        selectedDriverId: action.data
      });
    }

    case DM_UNSELECT_ALL_TASKS: {
      // Unselect all markers
      const finalTasksList = _.cloneDeep(state.tasksList);
      finalTasksList.forEach((element, index) => {
        finalTasksList[index] = {
          ...element,
          ...{ isSelected: false }
        };
      });

      return Immutable.merge(state, {
        selectedTasks: [],
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id')
      });
    }

    case DM_SELECT_BULK_TASKS: {
      // Unselect all markers
      const finalTasksList = [];

      let selectedTasks = [];

      if (action.taskNumbers.length) {
        selectedTasks = action.taskNumbers;

        state.tasksList.forEach((element, index) => {
          // selecting / unselecting individual task
          if (selectedTasks.includes(element[TASK_FIELDS_NAME.TASK_NUMBER])) {
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
      }

      return Immutable.merge(state, {
        selectedTasks,
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id')
      });
    }

    case DM_ADD_NEW_TASK: {
      // add new tasks
      let finalTasksList = _.cloneDeep(state.tasksList);
      finalTasksList = [...finalTasksList, ...action.data];

      return Immutable.merge(state, {
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id')
      });
    }
    case DM_UPDATE_TASK_DELAY: {
      // update task delay
      let finalTasksList = _.cloneDeep(state.tasksList);
      const indexOfTask = _.findIndex(finalTasksList, {
        id: action.data.task.id
      });
      if (indexOfTask >= 0) {
        finalTasksList[indexOfTask].delayInMinutes =
          action.data.task.delayInMinutes;
      }

      return Immutable.merge(state, {
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id')
      });
    }

    case DM_UPDATE_TASK_ETA: {
      // update task delay
      let finalTasksList = _.cloneDeep(state.tasksList);

      action.data.forEach(element => {
        const indexOfTask = _.findIndex(finalTasksList, {
          [TASK_FIELDS_NAME.TASK_NUMBER]: element.uniquestring
        });

        if (indexOfTask >= 0) {
          finalTasksList[indexOfTask][TASK_FIELDS_NAME.ETA] = element.eta;

          finalTasksList[indexOfTask][
            TASK_FIELDS_NAME.DELAYED_IN_MINUTES
          ] = calculateDelayInMinutes(
            element.eta,
            finalTasksList[indexOfTask][TASK_FIELDS_NAME.COMPLETE_BEFORE],
            finalTasksList[indexOfTask][TASK_FIELDS_NAME.STATUS]
          );

          finalTasksList[indexOfTask][TASK_FIELDS_NAME.ETD] = calculateETD(
            element.eta,
            finalTasksList[indexOfTask][TASK_FIELDS_NAME.COMPLETE_AFTER],
            finalTasksList[indexOfTask][TASK_FIELDS_NAME.SERVICE_MIN]
          );
        }

        // const indexOfTask = _.findIndex(finalTasksList, {
        //   [TASK_FIELDS_NAME.TASK_NUMBER]: element.uniquestring
        // });
        // if (indexOfTask >= 0) {
        //   finalTasksList[indexOfTask].eta = action.data.eta;
        // }
      });
      return Immutable.merge(state, {
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id')
      });
    }

    case DM_ON_TASK_DELETED: {
      let finalTasksList = _.cloneDeep(state.tasksList);
      let finalSelectedTasks = _.cloneDeep(state.selectedTasks);
      _.remove(finalTasksList, function(el) {
        return (
          action.taskNumbers.indexOf(el[TASK_FIELDS_NAME.TASK_NUMBER]) >= 0
        );
      });

      _.remove(finalSelectedTasks, function(el) {
        return _.includes(action.taskNumbers, el);
      });

      return Immutable.merge(state, {
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id'),
        selectedTasks: finalSelectedTasks
      });
    }

    case DM_GET_SINGLE_TASK_DETAILS.SUCCESS: {
      // add new tasks
      let finalTasksList = _.cloneDeep(state.tasksList);
      finalTasksList = [...finalTasksList, ...action.data];
      return Immutable.merge(state, {
        tasksList: _.uniqBy(getSortedTasklist(finalTasksList), 'id')
      });
    }

    case DM_TASK_SEQUENCE_CHANGED: {
      // task sequence changed
      let finalTasksList = _.cloneDeep(state.tasksList);
      let taskIsUnassigned = action.data.driver == null;

      action.data.tasks.forEach(element => {
        let taskIndex = _.findIndex(finalTasksList, {
          [TASK_FIELDS_NAME.TASK_NUMBER]: element.uniquestring
        });

        if (taskIndex !== -1) {
          finalTasksList[taskIndex][TASK_FIELDS_NAME.SEQUENCE] =
            element.sequence;

          if (element.driver === action.data.driverId) {
            if (taskIsUnassigned) {
              finalTasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_ID] = null;
              finalTasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_NAME] = '';
              finalTasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_PHONE] = '';
              finalTasksList[taskIndex][TASK_FIELDS_NAME.STATUS] =
                DM_TASK_TYPE.UNASSIGNED.slug;
            } else {
              // setting assgined details
              finalTasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_ID] =
                action.data.driver.id;
              finalTasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_NAME] =
                action.data.driver.name;
              finalTasksList[taskIndex][TASK_FIELDS_NAME.DRIVER_PHONE] =
                action.data.driver.phone;
              finalTasksList[taskIndex][TASK_FIELDS_NAME.STATUS] =
                DM_TASK_TYPE.ASSIGNED.slug;
            }
          }
        }
      });

      return Immutable.merge(state, {
        tasksList: _.uniqBy(finalTasksList, 'id')
      });
    }

    case DM_TASK_SEARCH.SUCCESS: {
      return Immutable.merge(state, { searchedTasks: action.data });
    }
    case DM_CLEAR_TASK_LIST: {
      return Immutable.merge(state, { tasksList: [] });
    }
    case DM_SHOW_OPTIMIZE_TASK_MODAL: {
      // hide / show optimize task modal
      return Immutable.merge(state, {
        showOptimizeTaskModal: action.show
      });
    }
    case DM_SHOW_COMMUNICATION_MODAL: {
      // hide / show optimize task modal
      return Immutable.merge(state, {
        showCommunicationModal: action.show
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
