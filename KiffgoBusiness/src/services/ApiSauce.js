/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
// @flow
// eslint-disable-next-line max-classes-per-file
import _ from 'lodash';
import {
  API_LOG,
  ERROR_SOMETHING_WENT_WRONG,
  BASE_URL,
  REQUEST_TYPE,
  ERROR_SESSION_EXPIRED,
  ABORT_REQUEST_MESSAGE,
  DM_UPDATE_TASK_SEQUENCE,
  DM_ASSIGN_TASK,
  DM_TASK_DELETE,
  DM_UNASSIGN_TASK,
  DM_TASK_CREATE,
  API_TIMEOUT
} from '../config/WebService';
import DataHandler from '../services/DataHandler';

import Util from '../services/Util';
import { userLogoutRequest } from '../actions/UserAction';
import { calculateEtaRequest } from '../actions/GeneralActions';
import { FAILED_TO_FETCH, SOMETHING_WRONG } from '../constants';

let timer;
const getOptions = (reqType, data, headers) => {
  // eslint-disable-next-line no-undef
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, API_TIMEOUT);
  const options = { method: reqType };
  options.credentials = 'include';
  if (reqType !== REQUEST_TYPE.GET) options.body = JSON.stringify(data);
  options.headers = {
    ...headers,
    ...{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      dataType: 'json'
    }
  };
  options.signal = controller.signal;
  return options;
};

const onForbidden = async () => {
  const newToken = await Util.refreshAccessToken();
  if (newToken) {
    return newToken;
  }

  return false;
};
class RequestAbort extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = 'ForcedAbortRequest'; // (2)
  }
}

class ApiSauce {
  async post(url, data, headers, baseUrl) {
    if (API_LOG) {
      console.log('url', url);
      console.log('data', data);
      console.log('headers', headers);
    }

    try {
      const response = await fetch(
        `${baseUrl || BASE_URL}${url}`,
        getOptions(REQUEST_TYPE.POST, data, headers)
      );
      // return this.manipulateResponse(response);
      if (response.status === 403) {
        try {
          // Below function will store new CSRF token
          const newToken = await onForbidden();

          if (newToken) {
            headers.Authorization = `Bearer ${newToken}`;
          } else {
            DataHandler.getStore().dispatch(userLogoutRequest());
            return false;
          }
        } catch (err) {
          Util.topAlertError(SOMETHING_WRONG);
          DataHandler.getStore().dispatch(userLogoutRequest());
        }

        const responseNew = await fetch(
          `${baseUrl || BASE_URL}${url}`,
          getOptions(REQUEST_TYPE.POST, data, headers)
        );

        return this.manipulateResponse(responseNew, url, data);
      } else {
        return this.manipulateResponse(response, url, data);
      }
    } catch (err) {
      return this.catchResponseError(err);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  catchResponseError(err) {
    if (err.name === 'AbortError') {
      throw new RequestAbort(ABORT_REQUEST_MESSAGE);
    } else {
      console.error('Uh oh, an error!', err);
      return {
        status: false,
        message:
          err.message == 'Failed to fetch' ? FAILED_TO_FETCH : err.message
      };
    }
  }

  async get(url, data, headers, baseUrl) {
    try {
      const response = await fetch(
        `${baseUrl || BASE_URL}${url}`,
        getOptions(REQUEST_TYPE.GET, data, headers)
      );

      if (API_LOG) {
        console.log('url', url);
        console.log('headers', headers);
        console.log(response);
      }
      return this.manipulateResponse(response, url, data);
    } catch (err) {
      return this.catchResponseError(err);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async manipulateResponse(response, url, data) {
    try {
      const responseJson = await response.json();

      // responseJson.isLoggedIn = false;
      // console.log({ response, responseJson });

      // check if session out then redirect to login page
      if (!_.isUndefined(responseJson.isLoggedIn) && !responseJson.isLoggedIn) {
        DataHandler.getStore().dispatch(userLogoutRequest());
      }

      return new Promise((resolve, reject) => {
        if (response) {
          if (response.status === 200) {
            if (
              url === DM_UPDATE_TASK_SEQUENCE.route ||
              url === DM_ASSIGN_TASK.route ||
              url === DM_UNASSIGN_TASK.route ||
              (url === DM_TASK_DELETE.route && data.isAssigned) ||
              (url === DM_TASK_CREATE.route &&
                data.hasOwnProperty('driver') &&
                data.driver != '')
            ) {
              clearTimeout(timer);
              timer = setTimeout(() => {
                DataHandler.getStore().dispatch(calculateEtaRequest());
              }, 20000);
            }
            resolve(responseJson);
          } else {
            if (response.status === 403) {
              reject(ERROR_SESSION_EXPIRED);
            }
            reject(responseJson || ERROR_SOMETHING_WENT_WRONG);
          }
        } else {
          reject(responseJson || ERROR_SOMETHING_WENT_WRONG);
        }
      });
    } catch (err) {
      return err;
    }
  }
}

export default new ApiSauce();
