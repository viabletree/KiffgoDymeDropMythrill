// @flow
import _ from "lodash";
import axios from "axios";
import {
  API_LOG,
  ERROR_SOMETHING_WENT_WRONG,
  BASE_URL,
  REQUEST_TYPE,
  ERROR_SESSION_EXPIRED,
  ERROR_NETWORK_NOT_AVAILABLE,
  ABORT_REQUEST_MESSAGE,
  API_TIMEOUT,
} from "../config/WebService";
import DataHandler from "../services/DataHandler";

import Util from "../services/Util";
import { FAILED_TO_FETCH, INTERNET_ERROR, SOMETHING_WRONG } from "../constants";

const getOptions = (reqType, data, headers) => {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, API_TIMEOUT);
  const options = Object.assign({ method: reqType, mode: "no-cors" });
  options.credentials = "include";
  if (reqType !== REQUEST_TYPE.GET) options.body = JSON.stringify(data);
  options.headers = {
    ...headers,
    Accept: "application/json",
    "Content-Type": "application/json",
    dataType: "json",
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
    this.name = "ForcedAbortRequest"; // (2)
  }
}

class ApiSauce {
  async post(url, data, headers, baseUrl) {
    if (API_LOG) {
      console.log("url", url);
      console.log("data", data);
      console.log("headers", headers);
    }
    try {
      const response = await axios
        .post(`${baseUrl || BASE_URL}${url}`, data)
        .then((response) => {
          return response;
        });

      if (API_LOG) {
        console.log("url", url);
        console.log("headers", headers);
        console.log(response);
      }
      return this.manipulateResponse(response);
    } catch (err) {
      return this.catchResponseError(err);
    }
  }
  catchResponseError(err) {
    if (err.name === "AbortError") {
      throw new RequestAbort(ABORT_REQUEST_MESSAGE);
    } else {
      console.error("Uh oh, an error!", err);
      return {
        status: false,
        message:
          err.message == "Failed to fetch" ? FAILED_TO_FETCH : err.message,
      };
    }
  }
  async get(url, data, headers, baseUrl) {
    console.log({ gegegtDAta: data });
    try {
      // const response = await fetch(
      //   `${baseUrl || BASE_URL}${url}`,
      //   getOptions(REQUEST_TYPE.GET, data, headers)
      // );

      const response = await axios
        .get(`${baseUrl || BASE_URL}${url}`)
        .then((response) => {
          return response;
        });

      if (API_LOG) {
        console.log("url", url);
        console.log("headers", headers);
        console.log(response);
      }
      return this.manipulateResponse(response);
    } catch (err) {
      return this.catchResponseError(err);
    }
  }

  async manipulateResponse(response) {
    try {
      return new Promise((resolve, reject) => {
        if (response) {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            if (response.status === 403) {
              reject(ERROR_SESSION_EXPIRED);
            }
            reject(response || ERROR_SOMETHING_WENT_WRONG);
          }
        } else {
          reject(response || ERROR_SOMETHING_WENT_WRONG);
        }
      });
    } catch (err) {
      console.log({ EEEEEE: err });
      return err;
    }
  }
}

export default new ApiSauce();
