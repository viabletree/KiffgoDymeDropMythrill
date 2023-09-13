import {
  DM_GET_HUB_LIST,
  DM_ON_HUB_INPUT_UPDATE,
  DM_ON_HUB_INPUT_CLEAR,
  DM_CREATE_HUB,
  DM_DELETE_HUB,
  DM_UPDATE_HUB
} from './ActionTypes';

export function dmGetHubListRequest(responseCallback) {
  return {
    responseCallback,
    type: DM_GET_HUB_LIST.REQUEST
  };
}
export function dmGetHubListSuccess(data) {
  return {
    data,
    type: DM_GET_HUB_LIST.SUCCESS
  };
}
export function dmDeleteHubRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_DELETE_HUB.REQUEST
  };
}
export function dmDeleteHubSuccess(data) {
  return {
    data,
    type: DM_DELETE_HUB.SUCCESS
  };
}
export function dmUpdateHubRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_UPDATE_HUB.REQUEST
  };
}
export function dmUpdateHubSuccess(data) {
  return {
    data,
    type: DM_UPDATE_HUB.SUCCESS
  };
}
export function dmOnHubInputUpdate(data) {
  return {
    data,
    type: DM_ON_HUB_INPUT_UPDATE
  };
}
export function dmClearHubInput() {
  return {
    type: DM_ON_HUB_INPUT_CLEAR
  };
}
export function dmHubCreateRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_CREATE_HUB.REQUEST
  };
}
export function dmHubCreateSuccess(data) {
  return {
    data,
    type: DM_CREATE_HUB.SUCCESS
  };
}
