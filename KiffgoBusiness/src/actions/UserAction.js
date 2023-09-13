// @flow

import {
  USER_UPLOAD_LOGO,
  USER_SIGNIN,
  USER_SIGNUP,
  USER_FORGOT_PASSWORD,
  USER_RESET_PASSWORD,
  USER_LOGOUT,
  SET_LOGGED_OUT_RECENTLY,
  REFRESH_TOKEN,
  DM_CHANGE_TAB_SELECTION,
  DM_UPDATE_ORGANIZATION,
  DM_CHANGE_MAP_SERVICE_PROVIDER,
  DM_SET_PREVIOUS_SOCKET_ID,
  DM_CHANGE_OFFLINE_MODE
} from './ActionTypes';

export function refreshTokenRequest(responseCallback, payload) {
  return {
    responseCallback,
    payload,
    type: REFRESH_TOKEN.REQUEST
  };
}
export function refreshTokenSuccess(data) {
  return {
    data,
    type: REFRESH_TOKEN.SUCCESS
  };
}
export function userUploadLogoSuccess(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_UPLOAD_LOGO.SUCCESS
  };
}
export function userUploadLogoRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_UPLOAD_LOGO.REQUEST
  };
}
export function userSigninRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_SIGNIN.REQUEST
  };
}

export function userSigninSuccess(data) {
  return {
    data,
    type: USER_SIGNIN.SUCCESS
  };
}

export function userSignupRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_SIGNUP.REQUEST
  };
}

export function userSignupSuccess(data) {
  return {
    data,
    type: USER_SIGNUP.SUCCESS
  };
}

export function userForgotPasswordRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_FORGOT_PASSWORD.REQUEST
  };
}

export function userForgotPasswordSuccess(data) {
  return {
    data,
    type: USER_FORGOT_PASSWORD.SUCCESS
  };
}

export function userResetPasswordRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_RESET_PASSWORD.REQUEST
  };
}

export function userResetPasswordSuccess(data) {
  return {
    data,
    type: USER_RESET_PASSWORD.SUCCESS
  };
}

export function userLogoutRequest(responseCallback) {
  return {
    responseCallback,
    type: USER_LOGOUT.REQUEST
  };
}

export function userLogoutSuccess() {
  return {
    type: USER_LOGOUT.SUCCESS
  };
}

export function setLoggedOutRecently(data) {
  return {
    data,
    type: SET_LOGGED_OUT_RECENTLY
  };
}

export function dmChangeTabSelection(selectedIndex) {
  return {
    selectedIndex,
    type: DM_CHANGE_TAB_SELECTION
  };
}

export function dmUpdateOrganizationRequest(payload) {
  return {
    payload,
    type: DM_UPDATE_ORGANIZATION.REQUEST
  };
}

export function dmUpdateOrganizationSuccess(data) {
  return {
    data,
    type: DM_UPDATE_ORGANIZATION.SUCCESS
  };
}
export function dmChangeMapServiceProviderRequest(payload) {
  return {
    payload,
    type: DM_CHANGE_MAP_SERVICE_PROVIDER.REQUEST
  };
}

export function dmChangeMapServiceProviderSuccess(data) {
  return {
    data,
    type: DM_CHANGE_MAP_SERVICE_PROVIDER.SUCCESS
  };
}
export function dmChangeMapServiceProviderFailed(data) {
  return {
    data,
    type: DM_CHANGE_MAP_SERVICE_PROVIDER.FAILURE
  };
}
export function dmChangeOfflineModeRequest(payload) {
  return {
    payload,
    type: DM_CHANGE_OFFLINE_MODE.REQUEST
  };
}

export function dmChangeOfflineModeFailed(data) {
  return {
    data,
    type: DM_CHANGE_OFFLINE_MODE.FAILURE
  };
}
export function dmSetPreviousSocketId(id) {
  return {
    id,
    type: DM_SET_PREVIOUS_SOCKET_ID
  };
}
