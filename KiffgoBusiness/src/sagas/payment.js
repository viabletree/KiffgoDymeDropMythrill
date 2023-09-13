import { take, put, call, fork } from 'redux-saga/effects';
import _ from 'lodash';
import {
  DELETE_SAVE_CARD_INFO,
  GET_SAVE_CARD_INFO,
  GET_CARD_INTENT
} from '../actions/ActionTypes';
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from '../constants';
import {
  deleteCardInfoSuccess,
  getSaveCardInfoSuccess,
  getCardIntentSuccess
} from '../actions/PaymentAction';
import {
  DELETE_SAVE_CARD_INFO as DELETE_SAVE_CARD_INFO_URL,
  GET_SAVE_CARD_INFO as GET_SAVE_CARD_INFO_URL,
  GET_CARD_INTENT as GET_CARD_INTENT_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';
import { getManipulatedSaveCardInfo } from '../helpers/paymentHelper';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* getCardIntent() {
  while (true) {
    const { payload, responseCallback } = yield take(GET_CARD_INTENT.REQUEST);

    try {
      const response = yield call(
        callRequest,
        GET_CARD_INTENT_URL,
        {},
        '',
        {
          Authorization: `Bearer ${payload.token}`
        },
        ApiSauce
      );

      if (response.status) {
        yield put(getCardIntentSuccess(response.data));
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(false, null);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* getSaveCardInfo() {
  while (true) {
    const { responseCallback } = yield take(GET_SAVE_CARD_INFO.REQUEST);

    try {
      const response = yield call(
        callRequest,
        GET_SAVE_CARD_INFO_URL,
        {},
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(
          getSaveCardInfoSuccess(getManipulatedSaveCardInfo(response.data))
        );
        if (responseCallback) responseCallback(true, null);
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

function* deleteCardInfo() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DELETE_SAVE_CARD_INFO.REQUEST
    );

    try {
      const response = yield call(
        callRequest,
        DELETE_SAVE_CARD_INFO_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(deleteCardInfoSuccess());
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(false, null);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

export default function* root() {
  yield fork(getSaveCardInfo);
  yield fork(deleteCardInfo);
  yield fork(getCardIntent);
}
