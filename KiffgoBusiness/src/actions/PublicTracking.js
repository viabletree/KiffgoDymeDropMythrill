// @flow

import { GET_PUBLIC_TRACKING } from './ActionTypes';

export function getPublicTrackingRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_PUBLIC_TRACKING.REQUEST
  };
}

export function getPublicTrackingSuccess(data) {
  return {
    data,
    type: GET_PUBLIC_TRACKING.SUCCESS
  };
}
