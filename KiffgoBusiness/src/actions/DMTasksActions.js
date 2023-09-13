// @flow

import {
  DM_ON_MIGRATION_START,
  DM_ON_TASK_INPUT_UPDATE,
  DM_TASK_RECENT_RECORD,
  DM_TASK_CREATE,
  DM_CLEAR_TASK_INPUT,
  DM_TASK_DELETE,
  DM_GET_SINGLE_TASK_DETAILS,
  DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN,
  DM_ASSIGN_TASK,
  DM_UNASSIGN_TASK,
  DM_VERIFY_BULK_TASK_POSTCODE,
  DM_UPLOAD_BULK_TASKS,
  DM_UPDATE_TASK_SEQUENCE,
  DM_TASK_SEQUENCE_CHANGED,
  DM_SHOW_OPTIMIZE_TASK_MODAL,
  DM_SHOW_COMMUNICATION_MODAL,
  DM_ROUTE_OPTIMIZATION_VALIDATE,
  DM_ROUTE_OPTIMIZATION_SUBMIT,
  DM_UPDATE_TASK_ETA,
  DM_SUBMIT_TRACKING_RATING,
  DM_UPDATE_BULK_TIME_WINDOW,
  DM_NOTIFY,
  DM_TASK_SEARCH,
  DM_CLEAR_TASK_LIST,
  DM_CHANGE_PRIORITY
} from './ActionTypes';

export function dmMigrationStart(responseCallback) {
  return {
    responseCallback,
    type: DM_ON_MIGRATION_START.REQUEST
  };
}
export function dmOnTaskInputUpdate(data) {
  return {
    data,
    type: DM_ON_TASK_INPUT_UPDATE
  };
}

export function dmRouteOptimizationValidate(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_ROUTE_OPTIMIZATION_VALIDATE.REQUEST
  };
}
export function dmTaskRecentRecordRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_TASK_RECENT_RECORD.REQUEST
  };
}
export function dmTaskCreateRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_TASK_CREATE.REQUEST
  };
}

export function dmTaskDeleteRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_TASK_DELETE.REQUEST
  };
}
export function dmTaskSearchRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_TASK_SEARCH.REQUEST
  };
}
export function dmTaskSearchSuccess(data) {
  return {
    data,
    type: DM_TASK_SEARCH.SUCCESS
  };
}

export function dmClearTaskInput() {
  return {
    type: DM_CLEAR_TASK_INPUT
  };
}

export function dmGetSingleTaskDetailsRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_GET_SINGLE_TASK_DETAILS.REQUEST
  };
}

export function dmGetSingleTaskDetailsSuccess(data) {
  return {
    data,
    type: DM_GET_SINGLE_TASK_DETAILS.SUCCESS
  };
}
export function dmGetSingleTaskDetailsNoTokenRequest(
  payload,
  responseCallback
) {
  return {
    payload,
    responseCallback,
    type: DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN.REQUEST
  };
}

export function dmGetSingleTaskDetailsNoTokenSuccess(data) {
  return {
    data,
    type: DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN.SUCCESS
  };
}

export function dmAssignTaskRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_ASSIGN_TASK.REQUEST
  };
}

export function dmUnassignTaskRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_UNASSIGN_TASK.REQUEST
  };
}
export function verifyTaskPostCodeRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_VERIFY_BULK_TASK_POSTCODE.REQUEST
  };
}
export function uploadBulkTaskRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_UPLOAD_BULK_TASKS.REQUEST
  };
}

export function updateTaskSequenceRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_UPDATE_TASK_SEQUENCE.REQUEST
  };
}
export function updateBulkTimeWindow(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_UPDATE_BULK_TIME_WINDOW.REQUEST
  };
}
export function dmTaskSequenceChanged(data) {
  return {
    data,
    type: DM_TASK_SEQUENCE_CHANGED
  };
}

export function dmShowOptimizeTaskModal(show) {
  return {
    show,
    type: DM_SHOW_OPTIMIZE_TASK_MODAL
  };
}
export function dmShowCommunicationModal(show) {
  return {
    show,
    type: DM_SHOW_COMMUNICATION_MODAL
  };
}

export function dmRouteOptimizationSubmit(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_ROUTE_OPTIMIZATION_SUBMIT.REQUEST
  };
}
export function notifyRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_NOTIFY.REQUEST
  };
}
export function dmTaskEtaChanged(data, changeShowEta) {
  return {
    data,
    changeShowEta,
    type: DM_UPDATE_TASK_ETA
  };
}
export function submitTrackingRating(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_SUBMIT_TRACKING_RATING.REQUEST
  };
}
export function clearTaskList() {
  return {
    type: DM_CLEAR_TASK_LIST
  };
}
export function changePriorityRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_CHANGE_PRIORITY.REQUEST
  };
}
