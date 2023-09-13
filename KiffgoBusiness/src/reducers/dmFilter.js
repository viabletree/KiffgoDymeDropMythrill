// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

import {
  UPDATE_TASK_DM_FILTER,
  USER_LOGOUT,
  DM_FILTER_MODAL_VISIBLE,
  GET_ACTIVE_TAB_SLUG,
  SET_DELAY_MIN,
  UNSELECTE_ALL_TASK_STATUS,
  SELECTE_ALL_TASK_STATUS,
  UPDATE_TIME_RANGE_DM_FILTER,
  UPDATE_DATE_DM_FILTER,
  DM_LOADER,
  GET_DM_FILTER_DATA,
  UPDATE_DRIVER_DM_FILTER,
  UNSELECTE_ALL_DRIVER_STATUS,
  SELECTE_ALL_DRIVER_STATUS,
  DM_UPDATE_FILTER_NOTIFICATION_TYPE
} from '../actions/ActionTypes';
import {
  DM_FILTER_TYPE,
  DM_TASK_TYPE,
  DM_DRIVER_STATUS_TYPE
} from '../constants';
const moment = extendMoment(Moment);

const INITIAL_START_TIME = moment()
  .subtract(1, 'day')
  .hours(18)
  .minute(0)
  .toISOString();

const INITIAL_END_TIME = moment()
  .add(1, 'day')
  .hours(6)
  .minute(0)
  .toISOString();

const getStartDateString = date =>
  moment(date)
    .subtract(1, 'day')
    .hours(18)
    .minute(0)
    .toISOString();

const getEndDateString = date =>
  moment(date)
    .add(1, 'day')
    .hours(6)
    .minute(0)
    .toISOString();

const initialState = Immutable({
  isFilterVisble: false,
  activeTab: DM_FILTER_TYPE.DATE,
  dateStartingFrom: _.clone(INITIAL_START_TIME),
  dateEndingTill: _.clone(INITIAL_END_TIME),
  calendarDate: moment().toISOString(),
  selectedTimeRange: [2, 36],
  tasksStatus: [
    DM_TASK_TYPE.UNASSIGNED.slug,
    DM_TASK_TYPE.IN_TRANSIT.slug,
    DM_TASK_TYPE.ASSIGNED.slug,
    DM_TASK_TYPE.SUCCESS.slug,
    DM_TASK_TYPE.FAIL.slug
  ],
  driversStatus: [
    DM_DRIVER_STATUS_TYPE.ACTIVE.slug,
    DM_DRIVER_STATUS_TYPE.IN_TRANSIT.slug,
    DM_DRIVER_STATUS_TYPE.INACTIVE.slug
  ],
  notificationStatus: {
    notified: false,
    nonNotified: false
  },
  delayedInMinutes: 1,
  showOnlyDelayedTasks: false,
  isloading: true,
  lastUpdatedTime: null,
  isGettingData: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    // on task selection and unselection
    case DM_UPDATE_FILTER_NOTIFICATION_TYPE: {
      const notificationStatus = _.cloneDeep(state.notificationStatus);
      notificationStatus[action.data.key] = action.data.value;
      return Immutable.merge(state, {
        notificationStatus
      });
    }

    case UPDATE_TASK_DM_FILTER: {
      const selectedTasks = _.xor(state.tasksStatus, [action.taskType]);
      return Immutable.merge(state, {
        tasksStatus: selectedTasks
      });
    }

    case UPDATE_DRIVER_DM_FILTER: {
      const selectedDriverStatus = _.xor(state.driversStatus, [
        action.driverStatusType
      ]);
      return Immutable.merge(state, {
        driversStatus: selectedDriverStatus
      });
    }

    // show filter modal
    case DM_FILTER_MODAL_VISIBLE: {
      return Immutable.merge(state, {
        isFilterVisble: action.value
      });
    }
    // show filter modal
    case GET_ACTIVE_TAB_SLUG: {
      return Immutable.merge(state, {
        activeTab: action.slug
      });
    }
    case SET_DELAY_MIN: {
      const delayValues = {};

      if (_.has(action.value, 'showOnlyDelayedTasks')) {
        delayValues['showOnlyDelayedTasks'] = action.value.showOnlyDelayedTasks;
      }

      if (_.has(action.value, 'delayedInMinutes')) {
        delayValues['delayedInMinutes'] =
          action.value.delayedInMinutes > -1
            ? action.value.delayedInMinutes
            : 0;
      }

      return Immutable.merge(state, delayValues);
    }

    case UNSELECTE_ALL_TASK_STATUS: {
      return Immutable.merge(state, {
        tasksStatus: []
      });
    }

    case SELECTE_ALL_TASK_STATUS: {
      return Immutable.merge(state, {
        tasksStatus: action.payload
      });
    }

    case UNSELECTE_ALL_DRIVER_STATUS: {
      return Immutable.merge(state, {
        driversStatus: []
      });
    }

    case SELECTE_ALL_DRIVER_STATUS: {
      return Immutable.merge(state, {
        driversStatus: action.payload
      });
    }

    case UPDATE_TIME_RANGE_DM_FILTER: {
      // selecting date
      const range = moment.range(
        _.clone(getStartDateString(_.cloneDeep(state.calendarDate))),
        _.clone(getEndDateString(_.cloneDeep(state.calendarDate)))
      );
      const hoursArray = Array.from(range.by('hour'));
      return Immutable.merge(state, {
        selectedTimeRange: action.range,
        dateStartingFrom: moment(hoursArray[action.range[0]]).toISOString(),
        dateEndingTill: moment(hoursArray[action.range[1]]).toISOString()
      });
    }

    case UPDATE_DATE_DM_FILTER: {
      // selecting date
      const range = moment.range(
        _.clone(getStartDateString(_.cloneDeep(action.date))),
        _.clone(getEndDateString(_.cloneDeep(action.date)))
      );
      const hoursArray = Array.from(range.by('hour'));
      return Immutable.merge(state, {
        calendarDate: action.date,
        dateStartingFrom: moment(
          hoursArray[state.selectedTimeRange[0]]
        ).toISOString(),
        dateEndingTill: moment(
          hoursArray[state.selectedTimeRange[1]]
        ).toISOString()
      });
    }
    case DM_LOADER: {
      return Immutable.merge(state, {
        isloading: action.value
      });
    }

    case GET_DM_FILTER_DATA.REQUEST: {
      return Immutable.merge(state, {
        isloading: action.showLoader,
        isGettingData: true
      });
    }

    case GET_DM_FILTER_DATA.SUCCESS: {
      return Immutable.merge(state, {
        isloading: false,
        lastUpdatedTime: moment().toISOString(),
        isGettingData: action.isSocketUpdate
          ? false
          : !action.data.tasksList.length <= 0
      });
    }

    case GET_DM_FILTER_DATA.FAILURE: {
      return Immutable.merge(state, {
        isloading: false
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
