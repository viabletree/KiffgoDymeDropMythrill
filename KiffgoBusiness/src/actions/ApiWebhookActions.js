import {
  GET_API_KEYS,
  GET_WEB_HOOKS,
  CREATE_API_KEY,
  DELETE_API_KEY,
  EDIT_API_KEY,
  GET_WEB_HOOKS_EVENTS,
  CREATE_WEB_HOOK,
  EDIT_WEB_HOOK,
  DELETE_WEB_HOOK,
  DM_GET_THIRDPARTY_API,
  DM_CHANGE_THIRDPARTY_API_ID,
  DM_CHANGE_THIRDPARTY_API_KEY,
  DM_POST_THIRDPARTY_API,
} from './ActionTypes';

export function dmGetApiKeysRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_API_KEYS.REQUEST
  };
}

export function dmGetApiKeysSuccess(data) {
  return {
    data,
    type: GET_API_KEYS.SUCCESS
  };
}
export function dmCreateApiKeyRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: CREATE_API_KEY.REQUEST
  };
}

export function dmCreateApiKeySuccess(data) {
  return {
    data,
    type: CREATE_API_KEY.SUCCESS
  };
}
export function dmDeleteApiKeyRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DELETE_API_KEY.REQUEST
  };
}

export function dmDeleteApiKeySuccess(id) {
  return {
    id,
    type: DELETE_API_KEY.SUCCESS
  };
}
export function dmEditApiKeyRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: EDIT_API_KEY.REQUEST
  };
}

export function dmEditApiKeySuccess(data) {
  return {
    data,
    type: EDIT_API_KEY.SUCCESS
  };
}
export function dmGetWebHooksRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_WEB_HOOKS.REQUEST
  };
}

export function dmGetWebHooksSuccess(data) {
  return {
    data,
    type: GET_WEB_HOOKS.SUCCESS
  };
}

export function dmGetWebHookEventsRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_WEB_HOOKS_EVENTS.REQUEST
  };
}
export function dmCreateWebHookRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: CREATE_WEB_HOOK.REQUEST
  };
}

export function dmCreateWebHookSuccess(data) {
  return {
    data,
    type: CREATE_WEB_HOOK.SUCCESS
  };
}
export function dmEditWebHookRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: EDIT_WEB_HOOK.REQUEST
  };
}

export function dmEditWebHookSuccess(data) {
  return {
    data,
    type: EDIT_WEB_HOOK.SUCCESS
  };
}
export function dmDeleteWebHookRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DELETE_WEB_HOOK.REQUEST
  };
}

export function dmDeleteWebHookSuccess(data) {
  return {
    data,
    type: DELETE_WEB_HOOK.SUCCESS
  };
}


// get third party api keys

export function dmGetThirdPartyApikeyRequest(responseCallback) {
  return {
  
    responseCallback,
    type: DM_GET_THIRDPARTY_API.REQUEST
  };
}

export function dmGetThirdPartyApikeySuccess(data) {
  return {
    data,
    type: DM_GET_THIRDPARTY_API.SUCCESS
  };
}

export function dmChangeThirdPartyApiId(data) {
  return {
    data,
    type: DM_CHANGE_THIRDPARTY_API_ID
  };
}

export function dmChangeThirdPartyApiKey(data) {
  return {
    data,
    type: DM_CHANGE_THIRDPARTY_API_KEY
  };
}


export function dmUpdateThirdPartyAPI(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DM_POST_THIRDPARTY_API.REQUEST
  };
}

export function dmUpdateThirdPartyAPISuccess(data) {
  return {
    data,
    type: DM_POST_THIRDPARTY_API.SUCCESS
  };
}