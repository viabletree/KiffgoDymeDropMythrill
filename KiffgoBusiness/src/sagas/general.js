import { take, put, call, fork } from 'redux-saga/effects';
import {
  CHECK_FORBIDDEN,
  GET_IN_TOUCH,
  REQUEST_A_DEMO,
  GET_VEHICLES,
  DM_CALCULATE_ETA
} from '../actions/ActionTypes';
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from '../constants';
import { getVehiclesSuccess } from '../actions/GeneralActions';
import {
  CHECK_FORBIDDEN as CHECK_FORBIDDEN_URL,
  GET_IN_TOUCH as GET_IN_TOUCH_URL,
  REQUEST_A_DEMO as REQUEST_A_DEMO_URL,
  GET_VEHICLES as GET_VEHICLES_URL,
  DM_CALCULATE_ETA as DM_CALCULATE_ETA_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}
function* getVehicles() {
  while (true) {
    const { responseCallback } = yield take(GET_VEHICLES.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_VEHICLES_URL,
        {},
        '',
        {},
        ApiSauce
      );

      if (response) {
        yield put(getVehiclesSuccess(response.data));
        if (responseCallback) responseCallback(true, null);
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

function* checkForbidden() {
  while (true) {
    const { responseCallback } = yield take(CHECK_FORBIDDEN.REQUEST);
    try {
      const response = yield call(
        callRequest,
        CHECK_FORBIDDEN_URL,
        {},
        '',
        {},
        ApiSauce
      );
      if (response.success) {
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null, true);
        alert(response.err);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* getInTouch() {
  while (true) {
    const { payload, responseCallback } = yield take(GET_IN_TOUCH.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_IN_TOUCH_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
      } else {
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* requestDemo() {
  while (true) {
    const { payload, responseCallback } = yield take(REQUEST_A_DEMO.REQUEST);
    try {
      const response = yield call(
        callRequest,
        REQUEST_A_DEMO_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
      } else {
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* calculateEta() {
  while (true) {
    const {} = yield take(DM_CALCULATE_ETA.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_CALCULATE_ETA_URL,
        {},
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (Util.checkDev()) {
          console.log({ response });
        }
      } else {
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (Util.checkDev()) {
        console.log({ err });
      }
      alert(err.message);
    }
  }
}

export default function* root() {
  yield fork(checkForbidden);
  yield fork(getInTouch);
  yield fork(getVehicles);
  yield fork(requestDemo);
  yield fork(calculateEta);
}
