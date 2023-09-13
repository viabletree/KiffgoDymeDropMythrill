// @flow

import {
  DELETE_SAVE_CARD_INFO,
  GET_SAVE_CARD_INFO,
  GET_CARD_INTENT
} from './ActionTypes';

export function getCardIntentRequest(payload, responseCallback) {
  return {
    responseCallback,
    payload,
    type: GET_CARD_INTENT.REQUEST
  };
}

export function getCardIntentSuccess(data) {
  return {
    data,
    type: GET_CARD_INTENT.SUCCESS
  };
}
export function getSaveCardInfoRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_SAVE_CARD_INFO.REQUEST
  };
}

export function getSaveCardInfoSuccess(data) {
  return {
    data,
    type: GET_SAVE_CARD_INFO.SUCCESS
  };
}

export function deleteCardInfoRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DELETE_SAVE_CARD_INFO.REQUEST
  };
}

export function deleteCardInfoSuccess() {
  return {
    type: DELETE_SAVE_CARD_INFO.SUCCESS
  };
}
