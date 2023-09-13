import _ from "lodash";
import Util from "../services/Util";
import { DEV_ENV } from "../constants";

//heroku

//export const BASE_URL = 'http://076b-110-39-172-42.ngrok.io/';

export const API_TIMEOUT = 30000;
export const ABORT_REQUEST_MESSAGE = "Network failed. Aborted request.";

// API USER ROUTES
// export const API_LOG = process.env.REACT_APP_ENV === DEV_ENV;
export const API_LOG = true;
export const ERROR_SOMETHING_WENT_WRONG = {
  message: "Something went wrong, Please try again later",
};
export const ERROR_NETWORK_NOT_AVAILABLE = {
  message: "Please connect to working internet",
};

export const ERROR_TIMEOUT = {
  message: "Request timeout, please check you internet!",
};

export const ERROR_SESSION_EXPIRED = {
  message: "Session expired, please refresh",
};

export const REQUEST_TYPE = {
  GET: "GET",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
};

// API USER ROUTES

export const GET_PAGE_DETAILS = {
  route: "api/v1/pages",
  auth: false,
  type: REQUEST_TYPE.GET,
};

export const VIEW_PAGE_COUNT = {
  route: "api/v1/pages/count-view",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const CLICK_PAGE_COUNT = {
  route: "api/v1/pages/links/count-click",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const ADD_PASS_VIEW = {
  route: "api/v1/user/fan/recent-acts",
  access_token_required: false,
  type: REQUEST_TYPE.GET,
};

export const callRequest = function (
  url,
  data,
  parameter,
  header = {},
  ApiSauce,
  baseUrl = BASE_URL
) {
  const _url =
    parameter && !_.isEmpty(parameter)
      ? `${url.route}/${parameter}`
      : url.route;

  let _header = header;

  if (url.type === REQUEST_TYPE.POST) {
    //data._csrf = Util.getCurrentCsrfToken();
    return ApiSauce.post(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.GET) {
    return ApiSauce.get(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.PUT) {
    // data._csrf = Util.getCurrentCsrfToken();
    return ApiSauce.put(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.DELETE) {
    return ApiSauce.delete(_url, data, _header, baseUrl);
  }
  // return ApiSauce.post(url.route, data, _header);
};
