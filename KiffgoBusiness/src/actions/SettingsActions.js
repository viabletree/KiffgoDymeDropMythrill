// @flow

import { UPDATE_COMMUNICATION_SETTINGS } from './ActionTypes';

export function updateCommunicationSettingRequest(responseCallback, payload) {
  return {
    payload,
    responseCallback,
    type: UPDATE_COMMUNICATION_SETTINGS.REQUEST
  };
}

export function updateCommunicationSettingSuccess(data) {
  return {
    data,
    type: UPDATE_COMMUNICATION_SETTINGS.SUCCESS
  };
}
