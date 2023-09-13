import { take, put, call, fork } from 'redux-saga/effects';
import {
  DM_DRIVER_OFF_DUTY,
  DM_DRIVER_CREATE,
  DM_GET_ALL_DRIVERS,
  DM_DRIVER_EDIT,
  DM_DRIVER_DELETE,
  DM_DRIVER_SCHEDULE,
  DM_GET_DRIVER_TASKS
} from '../actions/ActionTypes';
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from '../constants';
import {
  dmGetAllDriversSuccess,
  dmDriverDeleteSuccess,
  dmGetDriverTasksSuccess
} from '../actions/DMDriverActions';
import {
  DM_DRIVER_OFF_DUTY as DM_DRIVER_OFF_DUTY_URL,
  DM_DRIVER_CREATE as DM_DRIVER_CREATE_URL,
  DM_DRIVER_EDIT as DM_DRIVER_EDIT_URL,
  DM_DRIVER_DELETE as DM_DRIVER_DELETE_URL,
  DM_DRIVER_SCHEDULE as DM_DRIVER_SCHEDULE_URL,
  DM_GET_ALL_DRIVERS as DM_GET_ALL_DRIVERS_URL,
  DM_GET_DRIVER_TASKS as DM_GET_DRIVER_TASKS_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';
import {
  getManipulatedAllDriverData,
  getManipulatedTaskList
} from '../helpers/dmHelper';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* dmDriverScheduleAdd() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_DRIVER_SCHEDULE.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_DRIVER_SCHEDULE_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
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
function* dmDriverDelete() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_DRIVER_DELETE.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_DRIVER_DELETE_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(dmDriverDeleteSuccess(payload.driverId));
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

function* dmDriverOffDuty() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_DRIVER_OFF_DUTY.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_DRIVER_OFF_DUTY_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
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
function* dmDriverEdit() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_DRIVER_EDIT.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_DRIVER_EDIT_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
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
function* dmDriverCreate() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_DRIVER_CREATE.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_DRIVER_CREATE_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
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

function* dmGetAllDrivers() {
  while (true) {
    const { responseCallback } = yield take(DM_GET_ALL_DRIVERS.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_GET_ALL_DRIVERS_URL,
        {},
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        debugger;
        yield put(
          dmGetAllDriversSuccess(
            getManipulatedAllDriverData(response.data.drivers)
          )
        );
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
function* dmGetDriverTasks() {
  while (true) {
    const { payload, responseCallback } = yield take(
      DM_GET_DRIVER_TASKS.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_GET_DRIVER_TASKS_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(
          dmGetDriverTasksSuccess(getManipulatedTaskList(response.data))
        );
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

export default function* root() {
  yield fork(dmDriverCreate);
  yield fork(dmGetAllDrivers);
  yield fork(dmDriverEdit);
  yield fork(dmDriverOffDuty);
  yield fork(dmDriverDelete);
  yield fork(dmDriverScheduleAdd);
  yield fork(dmGetDriverTasks);
}
