import {
    DM_GET_DISPATCHER,
    DM_DISPATCHER_CREATE,
    DM_DISPATCHER_DELETE
  } from './ActionTypes';
  
// Multi dispatchers
export function dmGetDispatcherRequest(responseCallback) {
    return {
      responseCallback,
      type: DM_GET_DISPATCHER.REQUEST
    };
  }
  
  export function dmGetDispatcherSuccess(data) {
    return {
      data,
      type: DM_GET_DISPATCHER.SUCCESS
    };
  }
  
  export function dmCreateDispatcherRequest(payload, responseCallback) {
    return {
      payload,
      responseCallback,
      type: DM_DISPATCHER_CREATE.REQUEST
    };
  }
  
  export function dmCreateDispatcherSuccess(data) {
    return {
      data,
      type: DM_DISPATCHER_CREATE.SUCCESS
    };
  }
  
  export function dmDeleteDispatcherRequest(payload, responseCallback) {
    return {
      payload,
      responseCallback,
      type: DM_DISPATCHER_DELETE.REQUEST
    };
  }
  
  export function dmDeleteDispatcherSuccess(data) {
    return {
      data,
      type: DM_DISPATCHER_DELETE.SUCCESS
    };
  }