// @flow

import {
  DM_ON_DRIVER_INPUT_UPDATE,
  DM_DRIVER_CREATE,
  DM_DRIVER_EDIT,
  DM_DRIVER_DELETE,
  DM_CLEAR_DRIVER_INPUT,
  DM_GET_ALL_DRIVERS,
  DM_VIEW_DRIVER,
  DM_SCHEDULE_DRIVER,
  DM_HIDE_DRIVER_SCHEDULER,
  DM_DRIVER_DETAIL_UPDATE,
  DM_HIDE_DRIVER_VIEWER,
  DM_DRIVER_UPDATE_TRACKING,
  DM_DRIVER_OFF_DUTY,
  DM_DRIVER_OFF_DUTY_AUTOMATICALLY,
  DM_DRIVER_SCHEDULE,
  DM_GET_DRIVER_TASKS,
  DM_SELECT_BULK_DRIVER_TASKS,
  DM_UNSELECT_ALL_DRIVER_TASKS,
  DM_ON_DRIVER_TASK_SELECT
} from './ActionTypes';

export function dmDriverOffDuty(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_DRIVER_OFF_DUTY.REQUEST
  };
}
export function dmOnDriverInputUpdate(data) {
  return {
    data,
    type: DM_ON_DRIVER_INPUT_UPDATE
  };
}
export function dmDriverCreateRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_DRIVER_CREATE.REQUEST
  };
}
export function dmDriverEditRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_DRIVER_EDIT.REQUEST
  };
}
export function dmDriverDeleteRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_DRIVER_DELETE.REQUEST
  };
}
export function dmDriverScheduleAddRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_DRIVER_SCHEDULE.REQUEST
  };
}
export function dmDriverCreateSuccess(data) {
  return {
    data,
    type: DM_DRIVER_CREATE.SUCCESS
  };
}
export function dmClearDriverInput() {
  return {
    type: DM_CLEAR_DRIVER_INPUT
  };
}

export function dmGetAllDriversRequest(responseCallback) {
  return {
    responseCallback,
    type: DM_GET_ALL_DRIVERS.REQUEST
  };
}

export function dmGetAllDriversSuccess(data) {
  return {
    data,
    type: DM_GET_ALL_DRIVERS.SUCCESS
  };
}

export function dmDriverDetailUpdate(data) {
  return {
    data,
    type: DM_DRIVER_DETAIL_UPDATE
  };
}

export function dmViewDriver(driverId, viewDriverOpenedFromListing = false) {
  return {
    driverId,
    viewDriverOpenedFromListing,
    type: DM_VIEW_DRIVER
  };
}
export function dmScheduleDriver(
  driverId,
  viewDriverOpenedFromListing = false
) {
  return {
    driverId,
    viewDriverOpenedFromListing,
    type: DM_SCHEDULE_DRIVER
  };
}

export function dmHideDriverViewer() {
  return {
    type: DM_HIDE_DRIVER_VIEWER
  };
}

export function dmHideDriverScheduler() {
  return {
    type: DM_HIDE_DRIVER_SCHEDULER
  };
}

export function dmDriverDeleteSuccess(driverId) {
  return {
    driverId,
    type: DM_DRIVER_DELETE.SUCCESS
  };
}

export function dmDriverUpdateTracking(data) {
  return {
    data,
    type: DM_DRIVER_UPDATE_TRACKING
  };
}

export function dmDriverOffDutyAutomatically(data) {
  return {
    data,
    type: DM_DRIVER_OFF_DUTY_AUTOMATICALLY
  };
}

export function dmGetDriverTasksRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_GET_DRIVER_TASKS.REQUEST
  };
}

export function dmGetDriverTasksSuccess(tasks) {
  return {
    tasks,
    type: DM_GET_DRIVER_TASKS.SUCCESS
  };
}
export function dmSelectBulkDriverTasks(taskNumbers) {
  return {
    taskNumbers,
    type: DM_SELECT_BULK_DRIVER_TASKS
  };
}

export function dmUnselectAllDriverTasks() {
  return {
    type: DM_UNSELECT_ALL_DRIVER_TASKS
  };
}

export function dmOnDriverTaskSelect(data) {
  return {
    data,
    type: DM_ON_DRIVER_TASK_SELECT
  };
}
