import {
  take,
  put,
  call,
  fork,
  takeLatest,
  takeEvery
} from 'redux-saga/effects';
import {
  ADDRESS_AUTO_COMPLETE,
  VALIDATE_ADDRESS,
  VALIDATE_MAP_PIN_ADDRESS,
  GET_SMART_ESTIMATE,
  GET_ADDRESS_FROM_COORDINATES,
  SUBMIT_BOOKING,
  UPDATE_BOOKING_LOCATION_DATA
} from '../actions/ActionTypes';
import {
  SAGA_ALERT_TIMEOUT,
  SOMETHING_WRONG,
  LOCATION_POSTCODE_REQUIRED
} from '../constants';
import {
  getVehiclesSuccess,
  getSmartEstimateSuccess,
  submitBookingSuccess
} from '../actions/BookingActions';

import {
  ADDRESS_AUTO_COMPLETE as ADDRESS_AUTO_COMPLETE_URL,
  GET_ADDRESS_DETAILS as GET_ADDRESS_DETAILS_URL,
  GET_MAP_PIN_ADDRESS_DETAILS as GET_MAP_PIN_ADDRESS_DETAILS_URL,
  VALIDATE_POST_CODE as VALIDATE_POST_CODE_URL,
  GET_SMART_ESTIMATE as GET_SMART_ESTIMATE_URL,
  GET_ADDRESS_FROM_COORDINATES as GET_ADDRESS_FROM_COORDINATES_URL,
  SUBMIT_BOOKING as SUBMIT_BOOKING_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';
import {
  getRefinedAddressDetails,
  getMapPinRefinedAddressDetails
} from '../helpers/bookingHelper';
import { getFineData } from '../helpers/autoCompleteHelper';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* addressAutoCompleteRequest(action) {
  const { responseCallback, payload } = action;

  try {
    const response = yield call(
      callRequest,
      ADDRESS_AUTO_COMPLETE_URL,
      payload,
      '',
      {},
      ApiSauce
    );

    if (response) {
      if (responseCallback)
        responseCallback(getFineData(response.data.predictions), null);
    } else {
      if (responseCallback) responseCallback(null);
      alert(SOMETHING_WRONG);
    }
  } catch (err) {
    if (responseCallback) responseCallback(null, err);
    alert(err.message);
  }
}

function* validateAddress() {
  while (true) {
    const { responseCallback, payload } = yield take(VALIDATE_ADDRESS);
    try {
      const addressDetailsResponse = yield call(
        callRequest,
        GET_ADDRESS_DETAILS_URL,
        { place_id: payload.place_id },
        '',
        {},
        ApiSauce
      );

      let validatePostcodeResponse = null;
      let resultComponents = null;
      let resultComponentsPostcode = null;
      if (addressDetailsResponse.status) {
        resultComponents =
          addressDetailsResponse.data.result.address_components;
        resultComponents.forEach(element => {
          if (element.types[0] === 'postal_code') {
            resultComponentsPostcode = element;
          }
        });
      }
      if (resultComponentsPostcode != null) {
        validatePostcodeResponse = yield call(
          callRequest,
          VALIDATE_POST_CODE_URL,
          {
            postcode: resultComponentsPostcode.long_name,
            jobType: payload.jobType
          },
          '',
          {},
          ApiSauce
        );
        if (addressDetailsResponse && validatePostcodeResponse) {
          if (responseCallback)
            responseCallback(
              getRefinedAddressDetails({
                ...addressDetailsResponse.data.result,
                ...validatePostcodeResponse,
                ...payload
              }),
              null
            );
          /* if (responseCallback) {
            if (validatePostcodeResponse.isValid) {
              responseCallback({validatePostcodeResponse}, null);
            } else {
              responseCallback(null, true);
            }
          } */
        } else {
          if (responseCallback) responseCallback(null);

          alert(SOMETHING_WRONG);
        }
      } else {
        if (responseCallback) responseCallback(null);

        alert(LOCATION_POSTCODE_REQUIRED);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* validateMapPinAddress() {
  while (true) {
    const { responseCallback, payload } = yield take(VALIDATE_MAP_PIN_ADDRESS);
    try {
      const addressDetailsResponse = yield call(
        callRequest,
        GET_MAP_PIN_ADDRESS_DETAILS_URL,
        { udprn: payload.udprn },
        '',
        {},
        ApiSauce
      );
      let validatePostcodeResponse = null;

      if (addressDetailsResponse.result.postcode) {
        validatePostcodeResponse = yield call(
          callRequest,
          VALIDATE_POST_CODE_URL,
          {
            postcode: addressDetailsResponse.result.postcode,
            jobType: payload.jobType
          },
          '',
          {},
          ApiSauce
        );
      }
      if (addressDetailsResponse && validatePostcodeResponse) {
        if (responseCallback)
          responseCallback(
            getMapPinRefinedAddressDetails({
              ...addressDetailsResponse.result,
              ...validatePostcodeResponse,
              ...payload
            }),
            null
          );
        /* if (responseCallback) {
          if (validatePostcodeResponse.isValid) {
            responseCallback({validatePostcodeResponse}, null);
          } else {
            responseCallback(null, true);
          }
        } */
      } else {
        if (responseCallback) responseCallback(null);

        alert(SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* watchGetSmartEstimate(action) {
  const { responseCallback, payload } = action;
  try {
    const response = yield call(
      callRequest,
      GET_SMART_ESTIMATE_URL,
      payload,
      '',
      {},
      ApiSauce
    );
    if (response.status) {
      yield put(getSmartEstimateSuccess(response.data));
      if (responseCallback) responseCallback(true, null);
    } else {
      // re-setting estimates to zero on error
      yield put(getSmartEstimateSuccess({ estimate: 0, duration: 0 }));
      if (responseCallback) responseCallback(null);
      alert(response.message || SOMETHING_WRONG);
    }
  } catch (err) {
    if (responseCallback) responseCallback(null, err);
    alert(err.message);
  }
}

function* getAddressFromCoordinates() {
  while (true) {
    const { responseCallback, payload } = yield take(
      GET_ADDRESS_FROM_COORDINATES.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        GET_ADDRESS_FROM_COORDINATES_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response) {
        if (responseCallback) responseCallback(response.result, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* submitBooking() {
  while (true) {
    const { responseCallback, payload } = yield take(SUBMIT_BOOKING.REQUEST);
    try {
      const response = yield call(
        callRequest,
        SUBMIT_BOOKING_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(submitBookingSuccess(response.data));
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* updateBookingLocationData() {
  while (true) {
    const { callback } = yield take(UPDATE_BOOKING_LOCATION_DATA);
    if (callback) callback();
  }
}

export default function* root() {
  yield takeLatest(ADDRESS_AUTO_COMPLETE.REQUEST, addressAutoCompleteRequest);
  yield fork(validateAddress);
  yield fork(validateMapPinAddress);
  yield fork(getAddressFromCoordinates);
  // yield fork(getSmartEstimate);
  yield takeEvery(GET_SMART_ESTIMATE.REQUEST, watchGetSmartEstimate);
  yield fork(submitBooking);
  yield fork(updateBookingLocationData);
}
