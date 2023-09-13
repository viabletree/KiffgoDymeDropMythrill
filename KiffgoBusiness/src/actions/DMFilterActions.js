// @flow

import {
  UPDATE_TASK_DM_FILTER,
  DM_FILTER_MODAL_VISIBLE,
  GET_ACTIVE_TAB_SLUG,
  SET_DELAY_MIN,
  UNSELECTE_ALL_TASK_STATUS,
  SELECTE_ALL_TASK_STATUS,
  UPDATE_TIME_RANGE_DM_FILTER,
  UPDATE_DATE_DM_FILTER,
  GET_DM_FILTER_DATA,
  DM_LOADER,
  DM_ON_TASK_SELECT,
  DM_ON_DRIVER_SELECT,
  DM_UNSELECT_ALL_TASKS,
  DM_SELECT_BULK_TASKS,
  DM_ADD_NEW_TASK,
  DM_UPDATE_TASK_DELAY,
  DM_ON_TASK_DELETED,
  UPDATE_DRIVER_DM_FILTER,
  UNSELECTE_ALL_DRIVER_STATUS,
  SELECTE_ALL_DRIVER_STATUS,
  DM_UPDATE_TASK_BAR_EXPENDED_SECTIONS,
  DM_UPDATE_FILTER_NOTIFICATION_TYPE
} from './ActionTypes';
import { getFilterPayload } from '../helpers/dmHelper';

export function updateTaskDMFilter(taskType) {
  return {
    taskType,
    type: UPDATE_TASK_DM_FILTER
  };
}

export function dmFilterModalVisible(value) {
  return {
    value,
    type: DM_FILTER_MODAL_VISIBLE
  };
}

export function getActiveTabSlug(slug) {
  return {
    slug,
    type: GET_ACTIVE_TAB_SLUG
  };
}
export function setDelayMin(value) {
  return {
    value,
    type: SET_DELAY_MIN
  };
}
export function unselectedAllTaskStatus() {
  return {
    type: UNSELECTE_ALL_TASK_STATUS
  };
}
export function selectedAllTaskStatus(payload) {
  return {
    payload,
    type: SELECTE_ALL_TASK_STATUS
  };
}

export function updateTimeRangeDMFilter(range) {
  return {
    range,
    type: UPDATE_TIME_RANGE_DM_FILTER
  };
}

export function updateDateDMFilter(date) {
  return {
    date,
    type: UPDATE_DATE_DM_FILTER
  };
}

export function getDmFilterDataRequest(showLoader, lastId, responseCallback) {
  const payload = getFilterPayload();
  payload.lastTask = lastId;
  return {
    payload,
    responseCallback,
    showLoader,
    type: GET_DM_FILTER_DATA.REQUEST
  };
}

export function getDmFilterDataSuccess(data, isSocketUpdate) {
  return {
    data,
    isSocketUpdate,
    type: GET_DM_FILTER_DATA.SUCCESS
  };
}

export function getDmFilterDataFailure() {
  return {
    type: GET_DM_FILTER_DATA.FAILURE
  };
}

export function dmLoader(value) {
  return {
    value,
    type: DM_LOADER
  };
}

export function dmOnTaskSelect(data) {
  return {
    data,
    type: DM_ON_TASK_SELECT
  };
}
export function dmOnDriverSelect(data) {
  return {
    data,
    type: DM_ON_DRIVER_SELECT
  };
}

export function dmUnselectAllTasks() {
  return {
    type: DM_UNSELECT_ALL_TASKS
  };
}

export function dmAddNewTask(data) {
  return {
    data,
    type: DM_ADD_NEW_TASK
  };
}

export function dmUpdateTaskDelay(data) {
  return {
    data,
    type: DM_UPDATE_TASK_DELAY
  };
}

export function dmOnTaskDeleted(taskNumbers) {
  return {
    taskNumbers,
    type: DM_ON_TASK_DELETED
  };
}

export function updateDriverDMFilter(driverStatusType) {
  return {
    driverStatusType,
    type: UPDATE_DRIVER_DM_FILTER
  };
}

export function unselectedAllDriverStatus() {
  return {
    type: UNSELECTE_ALL_DRIVER_STATUS
  };
}

export function selectedAllDriverStatus(payload) {
  return {
    payload,
    type: SELECTE_ALL_DRIVER_STATUS
  };
}

export function dmUpdateTaskBarExpendedSections(sectionName) {
  return {
    sectionName,
    type: DM_UPDATE_TASK_BAR_EXPENDED_SECTIONS
  };
}

export function dmSelectBulkTasks(taskNumbers) {
  return {
    taskNumbers,
    type: DM_SELECT_BULK_TASKS
  };
}
export function dmUpdateFilterNotificationType(data) {
  return {
    data,
    type: DM_UPDATE_FILTER_NOTIFICATION_TYPE
  };
}
