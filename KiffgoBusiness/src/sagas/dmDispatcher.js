import { take, put, call, fork } from 'redux-saga/effects';
import {
  DM_DISPATCHER_CREATE,
  DM_DISPATCHER_DELETE,
  DM_GET_DISPATCHER
} from '../actions/ActionTypes';
import {
  SAGA_ALERT_TIMEOUT,
  SOMETHING_WRONG,
  MESSAGE_TYPES
} from '../constants';
import {
  DM_GET_DISPATCHER as DM_GET_DISPATCHER_URL,
  DM_DISPATCHER_CREATE as DM_DISPATCHER_CREATE_URL,
  DM_DISPATCHER_DELETE as DM_DISPATCHER_DELETE_URL,
  callRequest
} from '../config/WebService';
import {
  dmGetDispatcherSuccess,
  dmCreateDispatcherSuccess,
  dmDeleteDispatcherSuccess
} from '../actions/DispatcherActions';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';

function alert(message, type = MESSAGE_TYPES.ERROR) {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* dmGetDispatcher() {
  while (true) {
    const { responseCallback } = yield take(DM_GET_DISPATCHER.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_GET_DISPATCHER_URL,
        {},
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmGetDispatcherSuccess(response.data));
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(false);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false);
      alert(err.message);
    }
  }
}

function* dmCreateDispatcher() {
  while (true) {
    const { payload, responseCallback } = yield take(
      DM_DISPATCHER_CREATE.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_DISPATCHER_CREATE_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmCreateDispatcherSuccess(response.data));
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(false);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false);
      alert(err.message);
    }
  }
}

function* dmDeleteDispatcher() {
  while (true) {
    const { payload, responseCallback } = yield take(
        DM_DISPATCHER_DELETE.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_DISPATCHER_DELETE_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmDeleteDispatcherSuccess(response.data));
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(false);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false);
      alert(err.message);
    }
  }
}
export default function* root() {
  yield fork(dmCreateDispatcher);
  yield fork(dmGetDispatcher);
  yield fork(dmDeleteDispatcher);
}
