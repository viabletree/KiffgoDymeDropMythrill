import { take, put, call, fork } from 'redux-saga/effects';
import { UPDATE_COMMUNICATION_SETTINGS } from '../actions/ActionTypes';
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from '../constants';
import { updateCommunicationSettingSuccess } from '../actions/SettingsActions';
import {
  UPDATE_COMMUNICATION_SETTINGS as UPDATE_COMMUNICATION_SETTINGS_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}
function* updateCommunicationSettings() {
  while (true) {
    const { responseCallback, payload } = yield take(
      UPDATE_COMMUNICATION_SETTINGS.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        UPDATE_COMMUNICATION_SETTINGS_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response) {
        yield put(updateCommunicationSettingSuccess(payload));
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

export default function* root() {
  yield fork(updateCommunicationSettings);
}
