// @flow

import {
  CHECK_FORBIDDEN,
  SHOW_MODAL,
  HIDE_MODAL,
  GET_IN_TOUCH,
  REQUEST_A_DEMO,
  REFRESH_TOKEN,
  GET_VEHICLES,
  DM_TABLE_COLUMN_VISIBILITY,
  DM_TABLE_COLUMN_UPDATE,
  DM_CALCULATE_ETA
} from './ActionTypes';

export function getVehiclesRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_VEHICLES.REQUEST
  };
}

export function getVehiclesSuccess(data) {
  return {
    data,
    type: GET_VEHICLES.SUCCESS
  };
}
export function checkForbiddenRequest(responseCallback) {
  return {
    responseCallback,
    type: CHECK_FORBIDDEN.REQUEST
  };
}

export function showModal(modalType) {
  return {
    modalType,
    type: SHOW_MODAL
  };
}

export function hideModal(modalType) {
  return {
    modalType,
    type: HIDE_MODAL
  };
}

export function getInTouchRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_IN_TOUCH.REQUEST
  };
}
export function requestDemoRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: REQUEST_A_DEMO.REQUEST
  };
}
export function calculateEtaRequest() {
  return {
    type: DM_CALCULATE_ETA.REQUEST
  };
}
export function changeTableColumnVisibility(columnName) {
  return {
    columnName,
    type: DM_TABLE_COLUMN_VISIBILITY
  };
}

export function updateTableColumns() {
  return {
    type: DM_TABLE_COLUMN_UPDATE
  };
}
