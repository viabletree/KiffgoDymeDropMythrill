// @flow
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const CANCEL = "CANCEL";
const FAILURE = "FAILURE";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const NETWORK_INFO = "NETWORK_INFO";
export const USER_UPLOAD_LOGO = createRequestTypes("GET_VEHICLES");
export const SELECT_BOOKING_VEHICLE = "SELECT_BOOKING_VEHICLE";
export const CHANGE_BOOKING_TAB = "CHANGE_BOOKING_TAB";
export const GET_VEHICLES = createRequestTypes("GET_VEHICLES");
export const GET_PAGE_DETAILS = createRequestTypes("GET_PAGE_DETAILS");
export const VIEW_PAGE_COUNT = createRequestTypes("VIEW_PAGE_COUNT");
export const CLICK_PAGE_COUNT = createRequestTypes("CLICK_PAGE_COUNT");
export const ADD_PASS_VIEW = "ADD_PASS_VIEW";
