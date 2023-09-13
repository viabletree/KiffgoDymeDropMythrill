// @flow

import {
  GET_PAGE_DETAILS,
  VIEW_PAGE_COUNT,
  CLICK_PAGE_COUNT,
  ADD_PASS_VIEW,
} from "./ActionTypes";

export function getPageDetailsRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_PAGE_DETAILS.REQUEST,
  };
}

export function getPageDetailsSuccess(data) {
  return {
    data,
    type: GET_PAGE_DETAILS.SUCCESS,
  };
}

export function viewPageCountRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: VIEW_PAGE_COUNT.REQUEST,
  };
}

export function clickPageCountRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: CLICK_PAGE_COUNT.REQUEST,
  };
}

export function addPassView(params, responseCallback) {
  return {
    params,
    responseCallback,
    type: ADD_PASS_VIEW,
  };
}
