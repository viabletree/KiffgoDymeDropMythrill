import { take, put, call, fork } from 'redux-saga/effects';
import { GET_PUBLIC_TRACKING } from '../actions/ActionTypes';
import {
  SAGA_ALERT_TIMEOUT,
  SOMETHING_WRONG,
  TRACKING_TYPE_JOB
} from '../constants';
import { getPublicTrackingSuccess } from '../actions/PublicTracking';
import {
  GET_PUBLIC_TRACKING_JOB as GET_PUBLIC_TRACKING_JOB_URL,
  GET_PUBLIC_TRACKING_STOP as GET_PUBLIC_TRACKING_STOP_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* PublicTracking() {
  while (true) {
    const { payload, responseCallback } = yield take(
      GET_PUBLIC_TRACKING.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        payload.tackingType === TRACKING_TYPE_JOB
          ? GET_PUBLIC_TRACKING_JOB_URL
          : GET_PUBLIC_TRACKING_STOP_URL,
        { id: payload.trackingId },
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(getPublicTrackingSuccess(response.data[0]));
        if (responseCallback) responseCallback(response.data.length, null);
      } else {
        if (responseCallback) responseCallback(false, null);
        // alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
export default function* root() {
  yield fork(PublicTracking);
}
