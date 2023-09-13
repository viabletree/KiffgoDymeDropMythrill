import { take, put, call, fork, delay } from 'redux-saga/effects';
import _ from 'lodash';
import { GET_DM_FILTER_DATA } from '../actions/ActionTypes';
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from '../constants';
import {
  getDmFilterDataSuccess,
  getDmFilterDataFailure
} from '../actions/DMFilterActions';
import {
  GET_DM_FILTER_DATA as GET_DM_FILTER_DATA_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';
import {
  getManipulatedTaskList,
  getManipulatedDriverList
} from '../helpers/dmHelper';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* getDmFilterData() {
  while (true) {
    const { responseCallback, payload, showLoader } = yield take(
      GET_DM_FILTER_DATA.REQUEST
    );

    try {
      const response = yield call(
        callRequest,
        GET_DM_FILTER_DATA_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        const tasksList = getManipulatedTaskList(response.data);
        let lastId = null;
        if (!_.isEmpty(tasksList)) {
          lastId = tasksList[tasksList.length - 1].id;
        }
        if (showLoader) yield delay(2000);
        yield put(
          getDmFilterDataSuccess(
            {
              tasksList
            },
            false
          )
        );
        if (responseCallback)
          responseCallback(response.status, response.count, lastId);
      } else {
        yield put(getDmFilterDataFailure());
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      yield put(getDmFilterDataFailure());
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

export default function* root() {
  yield fork(getDmFilterData);
}
