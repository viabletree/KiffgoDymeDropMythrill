// @flow

import {
  GET_VEHICLES,
  SELECT_BOOKING_VEHICLE,
  CHANGE_BOOKING_TAB,
  SELECT_BOOKING_SERVICE,
  CHANGE_PICKUP_DATE,
  SELECT_ASAP_HOURS_OPTION,
  SET_FOCUSED_LOCATION_INDEX,
  ADDRESS_AUTO_COMPLETE,
  VALIDATE_ADDRESS,
  UPDATE_BOOKING_LOCATION_DATA,
  ADD_ADDITIONAL_LOCATION,
  REMOVE_ADDITIONAL_LOCATION,
  UPDATE_RETURN_DISCOUNT,
  GET_DISTANCE_DURATION,
  GET_SMART_ESTIMATE,
  UPDATE_EXTRA_LOADING_TIME,
  UPDATE_EXTRA_UNLOADING_TIME,
  UPDATE_NOTE_TO_DRIVER,
  GET_ADDRESS_FROM_COORDINATES,
  FLUSH_CURRENT_BOOKING,
  SUBMIT_BOOKING,
  BOOKED_CURRENT_BOOKING,
  BOOKING_THANK_YOU_VISITED,
  REMOVE_UPDATED_ROUTE_FLAG,
  VALIDATE_MAP_PIN_ADDRESS
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

export function selectBookingVehicle(index) {
  return {
    type: SELECT_BOOKING_VEHICLE,
    data: index
  };
}

export function changeBookingTab(index) {
  return {
    type: CHANGE_BOOKING_TAB,
    data: index
  };
}

export function selectBookingService(id) {
  return {
    type: SELECT_BOOKING_SERVICE,
    data: id
  };
}

export function changePickupDate(date) {
  return {
    type: CHANGE_PICKUP_DATE,
    data: date
  };
}

export function selectAsapHours(key, index, value) {
  return {
    type: SELECT_ASAP_HOURS_OPTION,
    key,
    index,
    value
  };
}

export function setFocusedLocationIndex(index) {
  return {
    type: SET_FOCUSED_LOCATION_INDEX,
    index
  };
}

export function addressAutoCompleteRequest(payload, responseCallback) {
  return {
    responseCallback,
    payload,
    type: ADDRESS_AUTO_COMPLETE.REQUEST
  };
}

export function validateAddressRequest(payload, responseCallback) {
  return {
    responseCallback,
    payload,
    type: VALIDATE_ADDRESS
  };
}
export function validateMapPinAddressRequest(payload, responseCallback) {
  return {
    responseCallback,
    payload,
    type: VALIDATE_MAP_PIN_ADDRESS
  };
}

export function updateBookingLocationData(data, callback) {
  return {
    data,
    callback,
    type: UPDATE_BOOKING_LOCATION_DATA
  };
}

export function addAdditionalLocation(stopType) {
  return {
    stopType,
    type: ADD_ADDITIONAL_LOCATION
  };
}

export function removeAdditionalLocation(index) {
  return {
    type: REMOVE_ADDITIONAL_LOCATION,
    index
  };
}

export function updateReturnDiscount() {
  return {
    type: UPDATE_RETURN_DISCOUNT
  };
}

export function getSmartEstimateRequest(payload, responseCallback) {
  return {
    responseCallback,
    payload,
    type: GET_SMART_ESTIMATE.REQUEST
  };
}

export function getSmartEstimateSuccess(data) {
  return {
    data,
    type: GET_SMART_ESTIMATE.SUCCESS
  };
}

export function updateExtraLoadingTime(updateType) {
  return {
    updateType,
    type: UPDATE_EXTRA_LOADING_TIME
  };
}

export function updateExtraUnloadingTime(updateType) {
  return {
    updateType,
    type: UPDATE_EXTRA_UNLOADING_TIME
  };
}

export function updateNoteToDriver(data) {
  return {
    data,
    type: UPDATE_NOTE_TO_DRIVER
  };
}

export function getAddressFromCoordinatesRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_ADDRESS_FROM_COORDINATES.REQUEST
  };
}

export function flushCurrentBooking() {
  return {
    type: FLUSH_CURRENT_BOOKING
  };
}

export function submitBookingRequest(payload, responseCallback) {
  return {
    responseCallback,
    payload,
    type: SUBMIT_BOOKING.REQUEST
  };
}

export function submitBookingSuccess(data) {
  return {
    data,
    type: SUBMIT_BOOKING.SUCCESS
  };
}

export function bookingThankyouVisited() {
  return {
    type: BOOKING_THANK_YOU_VISITED
  };
}

export function removeUpdatedRouteFlag() {
  return {
    type: REMOVE_UPDATED_ROUTE_FLAG
  };
}
