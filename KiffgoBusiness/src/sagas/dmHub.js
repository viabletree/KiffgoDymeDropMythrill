import { take, put, call, fork } from 'redux-saga/effects';
import {
  DM_GET_HUB_LIST,
  DM_CREATE_HUB,
  DM_DELETE_HUB,
  DM_UPDATE_HUB
} from '../actions/ActionTypes';
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from '../constants';
import {
  dmGetHubListSuccess,
  dmHubCreateSuccess,
  dmDeleteHubSuccess,
  dmUpdateHubSuccess
} from '../actions/DMHubActions';
import {
  DM_GET_HUB_LIST as DM_GET_HUB_LIST_URL,
  DM_CREATE_HUB as DM_CREATE_HUB_URL,
  DM_DELETE_HUB as DM_DELETE_HUB_URL,
  DM_UPDATE_HUB as DM_UPDATE_HUB_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';
import { getManipulatedHubList } from '../helpers/hubHelper';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* dmGetHubList() {
  while (true) {
    const { responseCallback } = yield take(DM_GET_HUB_LIST.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_GET_HUB_LIST_URL,
        {},
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(dmGetHubListSuccess(getManipulatedHubList(response.data)));
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* dmCreateHub() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_CREATE_HUB.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_CREATE_HUB_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(dmHubCreateSuccess(getManipulatedHubList(response.data)));
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* dmDeleteHub() {
  while (true) {
    const { payload, responseCallback } = yield take(DM_DELETE_HUB.REQUEST);

    try {
      const response = yield call(
        callRequest,
        DM_DELETE_HUB_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(dmDeleteHubSuccess({ hubId: payload.hubId }));
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* dmUpdateHub() {
  while (true) {
    const { payload, responseCallback } = yield take(DM_UPDATE_HUB.REQUEST);

    try {
      const response = yield call(
        callRequest,
        DM_UPDATE_HUB_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(dmUpdateHubSuccess({ hubId: payload.hubId }));
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

export default function* root() {
  yield fork(dmGetHubList);
  yield fork(dmCreateHub);
  yield fork(dmDeleteHub);
  yield fork(dmUpdateHub);
}
