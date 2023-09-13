import { take, put, call, fork } from 'redux-saga/effects';
import {
  USER_UPLOAD_LOGO,
  USER_SIGNIN,
  USER_SIGNUP,
  USER_FORGOT_PASSWORD,
  USER_RESET_PASSWORD,
  USER_LOGOUT,
  DM_UPDATE_ORGANIZATION,
  DM_CHANGE_MAP_SERVICE_PROVIDER,
  DM_CHANGE_OFFLINE_MODE
} from '../actions/ActionTypes';
import {
  SAGA_ALERT_TIMEOUT,
  SOMETHING_WRONG,
  MESSAGE_TYPES,
  SIGNUP_SUCCESS_MSG
} from '../constants';
import {
  userUploadLogoSuccess,
  userSigninSuccess,
  userLogoutSuccess,
  dmUpdateOrganizationSuccess,
  dmChangeMapServiceProviderFailed,
  dmChangeOfflineModeFailed
} from '../actions/UserAction';

import {
  USER_UPLOAD_LOGO as USER_UPLOAD_LOGO_URL,
  USER_SIGNIN as USER_SIGNIN_URL,
  USER_SIGNUP as USER_SIGNUP_URL,
  USER_FORGOT_PASSWORD as USER_FORGOT_PASSWORD_URL,
  USER_RESET_PASSWORD as USER_RESET_PASSWORD_URL,
  USER_LOGOUT as USER_LOGOUT_URL,
  DM_UPDATE_ORGANIZATION as DM_UPDATE_ORGANIZATION_URL,
  DM_CHANGE_MAP_SERVICE_PROVIDER as DM_CHANGE_MAP_SERVICE_PROVIDER_URL,
  DM_CHANGE_OFFLINE_MODE as DM_CHANGE_OFFLINE_MODE_URL,
  callRequest
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';
import { util } from 'prettier';

function alert(message, type = MESSAGE_TYPES.ERROR) {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* uploadLogo() {
  while (true) {
    const { payload, responseCallback } = yield take(USER_UPLOAD_LOGO.REQUEST);
    try {
      const response = yield call(
        callRequest,
        USER_UPLOAD_LOGO_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
        // alert(response.message, MESSAGE_TYPES.SUCCESS);
        yield put(userUploadLogoSuccess(response.data));
      } else {
        if (responseCallback) responseCallback(null, true);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* userLogin() {
  while (true) {
    const { payload, responseCallback } = yield take(USER_SIGNIN.REQUEST);
    try {
      const response = yield call(
        callRequest,
        USER_SIGNIN_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
        // alert(response.message, MESSAGE_TYPES.SUCCESS);
        yield put(userSigninSuccess(response.data));
      } else {
        if (responseCallback) responseCallback(null, true);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* userSignup() {
  while (true) {
    const { payload, responseCallback } = yield take(USER_SIGNUP.REQUEST);
    try {
      const response = yield call(
        callRequest,
        USER_SIGNUP_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (payload.verificationCode) {
          // user has successfully verified his email by code
          // alert(SIGNUP_SUCCESS_MSG, MESSAGE_TYPES.SUCCESS);
          // yield put(userSignupSuccess(response.data));
          if (responseCallback)
            responseCallback(response.status, response.data);
        } else {
          if (responseCallback) responseCallback(response.status, null);
        }
      } else {
        if (responseCallback) responseCallback(null, true);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* userForgotPassword() {
  while (true) {
    const { payload, responseCallback } = yield take(
      USER_FORGOT_PASSWORD.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        USER_FORGOT_PASSWORD_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(null, true);
        // alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* userResetPassword() {
  while (true) {
    const { payload, responseCallback } = yield take(
      USER_RESET_PASSWORD.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        USER_RESET_PASSWORD_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(null, true);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* userLogout() {
  while (true) {
    const { responseCallback } = yield take(USER_LOGOUT.REQUEST);
    const payload = { token: Util.getCurrentRefreshToken() };

    try {
      const response = yield call(
        callRequest,
        USER_LOGOUT_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
        yield put(userLogoutSuccess());
      } else {
        if (responseCallback) responseCallback(null, true);
        yield put(userLogoutSuccess());
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      yield put(userLogoutSuccess());
      // alert(err.message);
    }
  }
}

function* updateOrganization() {
  while (true) {
    const { payload, responseCallback } = yield take(
      DM_UPDATE_ORGANIZATION.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_UPDATE_ORGANIZATION_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
        // alert(response.message, MESSAGE_TYPES.SUCCESS);
        yield put(dmUpdateOrganizationSuccess(response.data[0]));
      } else {
        if (responseCallback) responseCallback(null, true);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* changeMapServiceProvider() {
  while (true) {
    const { payload } = yield take(DM_CHANGE_MAP_SERVICE_PROVIDER.REQUEST);

    try {
      const response = yield call(
        callRequest,
        DM_CHANGE_MAP_SERVICE_PROVIDER_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (Util.checkDev) {
          console.log('changeMapServiceProvider success');
        }
      } else {
        yield put(dmChangeMapServiceProviderFailed(payload));
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      yield put(dmChangeMapServiceProviderFailed(payload));
      alert(err.message);
    }
  }
}
function* changeOfflineMode() {
  while (true) {
    const { payload } = yield take(DM_CHANGE_OFFLINE_MODE.REQUEST);

    try {
      const response = yield call(
        callRequest,
        DM_CHANGE_OFFLINE_MODE_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      debugger;
      if (response.status) {
        if (Util.checkDev) {
          console.log('changeOfflineMode success');
        }
      } else {
        yield put(dmChangeOfflineModeFailed(payload));
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      yield put(dmChangeOfflineModeFailed(payload));
      alert(err.message);
    }
  }
}

export default function* root() {
  yield fork(userLogin);
  yield fork(uploadLogo);
  yield fork(userSignup);
  yield fork(userForgotPassword);
  yield fork(userResetPassword);
  yield fork(userLogout);
  yield fork(updateOrganization);
  yield fork(changeMapServiceProvider);
  yield fork(changeOfflineMode);
}
