import { take, put, call, fork } from 'redux-saga/effects';
import {
  GET_API_KEYS,
  CREATE_API_KEY,
  DELETE_API_KEY,
  EDIT_API_KEY,
  GET_WEB_HOOKS,
  GET_WEB_HOOKS_EVENTS,
  CREATE_WEB_HOOK,
  EDIT_WEB_HOOK,
  DELETE_WEB_HOOK,
  DM_GET_THIRDPARTY_API,
  DM_POST_THIRDPARTY_API,
} from '../actions/ActionTypes';
import {
  SAGA_ALERT_TIMEOUT,
  SOMETHING_WRONG,
  MESSAGE_TYPES
} from '../constants';
import {
  GET_API_KEYS as GET_API_KEYS_URL,
  CREATE_API_KEY as CREATE_API_KEY_URL,
  DELETE_API_KEY as DELETE_API_KEY_URL,
  EDIT_API_KEY as EDIT_API_KEY_URL,
  GET_WEB_HOOKS as GET_WEB_HOOKS_URL,
  GET_WEB_HOOKS_EVENTS as GET_WEB_HOOKS_EVENTS_URL,
  CREATE_WEB_HOOK as CREATE_WEB_HOOK_URL,
  EDIT_WEB_HOOK as EDIT_WEB_HOOK_URL,
  DELETE_WEB_HOOK as DELETE_WEB_HOOK_URL,
  DM_GET_THIRDPARTY_API as DM_GET_THIRDPARTY_API_URL,
  DM_POST_THIRDPARTY_API as DM_POST_THIRDPARTY_API_URL,
  callRequest
} from '../config/WebService';
import {
  dmGetApiKeysSuccess,
  dmCreateApiKeySuccess,
  dmDeleteApiKeySuccess,
  dmEditApiKeySuccess,
  dmGetWebHooksSuccess,
  dmCreateWebHookSuccess,
  dmEditWebHookSuccess,
  dmDeleteWebHookSuccess,
  dmGetThirdPartyApikeySuccess,
  dmUpdateThirdPartyAPISuccess,
} from '../actions/ApiWebhookActions';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';

function alert(message, type = MESSAGE_TYPES.ERROR) {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}
function* dmGetApiKeys() {
  while (true) {
    const { responseCallback } = yield take(GET_API_KEYS.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_API_KEYS_URL,
        {},
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(dmGetApiKeysSuccess(response.data));
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
function* dmCreateApiKey() {
  while (true) {
    const { payload, responseCallback } = yield take(CREATE_API_KEY.REQUEST);
    try {
      const response = yield call(
        callRequest,
        CREATE_API_KEY_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmCreateApiKeySuccess(response.data));
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
function* dmDeleteApiKey() {
  while (true) {
    const { payload, responseCallback } = yield take(DELETE_API_KEY.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DELETE_API_KEY_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmDeleteApiKeySuccess(payload.id));
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
function* dmEditApiKey() {
  while (true) {
    const { payload, responseCallback } = yield take(EDIT_API_KEY.REQUEST);
    try {
      const response = yield call(
        callRequest,
        EDIT_API_KEY_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmEditApiKeySuccess(response.data));
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
function* dmGetWebHooks() {
  while (true) {
    const { responseCallback } = yield take(GET_WEB_HOOKS.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_WEB_HOOKS_URL,
        {},
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmGetWebHooksSuccess(response.data));
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
function* dmGetWebHookEvents() {
  while (true) {
    const { responseCallback } = yield take(GET_WEB_HOOKS_EVENTS.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_WEB_HOOKS_EVENTS_URL,
        {},
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, response.data);
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
function* dmCreateWebHook() {
  while (true) {
    const { payload, responseCallback } = yield take(CREATE_WEB_HOOK.REQUEST);
    try {
      const response = yield call(
        callRequest,
        CREATE_WEB_HOOK_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmCreateWebHookSuccess(response.data));
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
function* dmEditWebHook() {
  while (true) {
    const { payload, responseCallback } = yield take(EDIT_WEB_HOOK.REQUEST);
    try {
      const response = yield call(
        callRequest,
        EDIT_WEB_HOOK_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmEditWebHookSuccess(response.data));
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
function* dmDeleteWebHook() {
  while (true) {
    const { payload, responseCallback } = yield take(DELETE_WEB_HOOK.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DELETE_WEB_HOOK_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmDeleteWebHookSuccess(payload));
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

function* dmGetThrirdPartyApi() {
  while (true) {
    const { responseCallback } = yield take(DM_GET_THIRDPARTY_API.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_GET_THIRDPARTY_API_URL,
        {},
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmGetThirdPartyApikeySuccess(response.data));
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

function* dmUpdateThirdPartyAPI() {


  while (true) {
    const {payload, responseCallback } = yield take(DM_POST_THIRDPARTY_API.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_POST_THIRDPARTY_API_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(dmUpdateThirdPartyAPISuccess(response.data));
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
  yield fork(dmGetApiKeys);
  yield fork(dmCreateApiKey);
  yield fork(dmDeleteApiKey);
  yield fork(dmEditApiKey);
  yield fork(dmGetWebHooks);
  yield fork(dmGetWebHookEvents);
  yield fork(dmCreateWebHook);
  yield fork(dmEditWebHook);
  yield fork(dmDeleteWebHook);
  yield fork(dmGetThrirdPartyApi);
  yield fork(dmUpdateThirdPartyAPI);
}
