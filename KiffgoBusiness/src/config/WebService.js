import _ from "lodash";
import Util from "../services/Util";
import { DEV_ENV } from "../constants";

// export const BASE_URL = `${process.env.REACT_APP_API_URL}`;
export const TRACKING_BASE_URL = `${process.env.REACT_APP_TRACKING_URL}`;

// export const BASE_URL = 'https://kiffgo-staging.herokuapp.com/';

// export const BASE_URL = "https://api.kiffgo.com/";

export const BASE_URL = "http://localhost:1337/";
// export const BASE_URL = "http://192.168.0.133:1337/"; // tasneem machine
// export const BASE_URL = "http://192.168.0.102:1337/"; // Zain machine
// export const BASE_URL = 'https://7711-110-39-172-42.ngrok.io/'; // anas machine
// const MAP_KEY = "";

export const G_API_URL = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}&&v=3.exp&libraries=geometry,drawing,places`;
export const API_TIMEOUT = 30000;
export const ABORT_REQUEST_MESSAGE = "Network failed. Aborted request.";

// API USER ROUTES
export const API_LOG = process.env.REACT_APP_ENV === DEV_ENV;

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
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
};

// API USER ROUTES

export const USER_UPLOAD_LOGO = {
  route: "b/user/logo-upload",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const USER_SIGNIN = {
  route: "b/login-website",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const GET_VEHICLES = {
  route: "b/get-vehicles",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const ADDRESS_AUTO_COMPLETE = {
  auth: true,
  route: "w/google/v1/address-autocomplete",
  type: REQUEST_TYPE.POST,
};

export const GET_ADDRESS_DETAILS = {
  route: "w/google/v1/address-details",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const GET_MAP_PIN_ADDRESS_DETAILS = {
  route: "w/address-details",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const VALIDATE_POST_CODE = {
  route: "b/postcode/validate",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const CHECK_FORBIDDEN = {
  route: "token-test",
  type: REQUEST_TYPE.POST,
};

export const GET_DISTANCE_DURATION = {
  route: "w/pricing/distance-duration",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const GET_SMART_ESTIMATE = {
  route: "b/smart-estimate",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const USER_SIGNUP = {
  route: "b/signup-website",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const USER_FORGOT_PASSWORD = {
  route: "b/reset-password-website",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const USER_RESET_PASSWORD = {
  route: "b/reset-confirm-website",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const USER_LOGOUT = {
  route: "b/logout",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const GET_ADDRESS_FROM_COORDINATES = {
  route: "b/address-from-coordinates",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const GET_IN_TOUCH = {
  route: "b/submit/get-in-touch",
  auth: false,
  type: REQUEST_TYPE.POST,
};
export const REQUEST_A_DEMO = {
  route: "b/submit/landing-page-form",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const SUBMIT_BOOKING = {
  route: "b/booking/trusted-book-website",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const GET_PUBLIC_TRACKING_STOP = {
  route: "b/stop/tracking",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const GET_PUBLIC_TRACKING_JOB = {
  route: "b/job/tracking",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const DRIVER_VERIFY = {
  route: "p/list/driver/accept",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const DELETE_SAVE_CARD_INFO = {
  route: "b/delete-card-details",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const GET_SAVE_CARD_INFO = {
  route: "b/get-card-details",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const GET_CARD_INTENT = {
  route: "b/get-sca-details",
  type: REQUEST_TYPE.POST,
};
export const GET_DRIVERS_LIST = {
  route: "b/get-drivers",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const GET_DRIVERS_DETAILS = {
  route: "b/get-driver-details",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const GET_DM_FILTER_DATA = {
  route: "b/filter",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const DM_ON_MIGRATION_START = {
  route: "b/task/migrate",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const DM_ROUTE_OPTIMIZATION_VALIDATE = {
  route: "b/task/validate-route",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_ROUTE_OPTIMIZATION_SUBMIT = {
  route: "b/task/optimize-route",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_TASK_RECENT_RECORD = {
  route: "b/task/recent-record",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_TASK_CREATE = {
  route: "b/task/add",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_TASK_DELETE = {
  route: "b/task/delete",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_DRIVER_OFF_DUTY = {
  route: "b/driver/off-duty",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_DRIVER_CREATE = {
  route: "driver/create",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_DRIVER_EDIT = {
  route: "driver/edit",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_DRIVER_DELETE = {
  route: "driver/delete",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_DRIVER_SCHEDULE = {
  route: "driver/schedule",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const DM_GET_ALL_DRIVERS = {
  route: "driver/drivers-list",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const DM_GET_SINGLE_TASK_DETAILS = {
  route: "b/task/detail",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN = {
  route: "b/task/detail-no-token",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const DM_ASSIGN_TASK = {
  route: "b/task/assign",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const DM_UNASSIGN_TASK = {
  route: "b/task/unassign",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_VERIFY_BULK_TASK_POSTCODE = {
  route: "b/verify-address",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_UPLOAD_BULK_TASKS = {
  route: "b/task/bulk",
  auth: true,
  type: REQUEST_TYPE.POST,
};

export const DM_UPDATE_TASK_SEQUENCE = {
  route: "b/task-sequence",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_GET_HUB_LIST = {
  route: "b/hub/list",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_CREATE_HUB = {
  route: "b/hub/add",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_DELETE_HUB = {
  route: "b/hub/delete",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_UPDATE_HUB = {
  route: "b/hub/update",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_SUBMIT_TRACKING_RATING = {
  route: "b/task/rating",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const DM_UPDATE_ORGANIZATION = {
  route: "b/update-organization-details",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const GET_API_KEYS = {
  route: "b/key/get",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const CREATE_API_KEY = {
  route: "b/key/generate",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DELETE_API_KEY = {
  route: "b/key/remove",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const EDIT_API_KEY = {
  route: "b/key/edit",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const GET_WEB_HOOKS = {
  route: "b/webhook/list",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const GET_WEB_HOOKS_EVENTS = {
  route: "b/event/list",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const CREATE_WEB_HOOK = {
  route: "b/webhook/add",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const EDIT_WEB_HOOK = {
  route: "b/webhook/edit",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DELETE_WEB_HOOK = {
  route: "b/webhook/delete",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_UPDATE_BULK_TIME_WINDOW = {
  route: "b/task/time-window",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_CHANGE_MAP_SERVICE_PROVIDER = {
  route: "b/user/preference/service",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_CALCULATE_ETA = {
  route: "b/eta/calculate",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_TASK_SEARCH = {
  route: "b/search",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_CHANGE_OFFLINE_MODE = {
  route: "b/offline-mode",
  auth: true,
  type: REQUEST_TYPE.POST,
};

//Third party api keys
export const DM_GET_THIRDPARTY_API = {
  route: "b/thirdpartyapi/getthirdpartyapi",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_POST_THIRDPARTY_API = {
  route: "b/thirdpartyapi/updatethirdpartyapi",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const UPDATE_COMMUNICATION_SETTINGS = {
  route: "b/communcation-setting",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_NOTIFY = {
  route: "b/schedule-communication",
  auth: true,
  type: REQUEST_TYPE.POST,
};

//Multi Dispatcher
export const DM_GET_DISPATCHER = {
  route: "b/dispatcher/getdispatchers",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_DISPATCHER_CREATE = {
  route: "b/dispatcher/createdispatcher",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_DISPATCHER_DELETE = {
  route: "b/dispatcher/deletedispatcher",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_GET_DRIVER_TASKS = {
  route: "b/driver/tasks",
  auth: true,
  type: REQUEST_TYPE.POST,
};
export const DM_CHANGE_PRIORITY = {
  route: "b/task/priority",
  auth: true,
  type: REQUEST_TYPE.POST,
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

  if (url.auth) {
    header.Authorization = `Bearer ${Util.getCurrentAccessToken()}`;
  }
  if (url.type === REQUEST_TYPE.POST) {
    //data._csrf = Util.getCurrentCsrfToken();
    return ApiSauce.post(_url, data, header, baseUrl);
  } else if (url.type === REQUEST_TYPE.GET) {
    return ApiSauce.get(_url, data, header, baseUrl);
  } else if (url.type === REQUEST_TYPE.PUT) {
    // data._csrf = Util.getCurrentCsrfToken();
    return ApiSauce.put(_url, data, header, baseUrl);
  } else if (url.type === REQUEST_TYPE.DELETE) {
    return ApiSauce.delete(_url, data, header, baseUrl);
  }
  // return ApiSauce.post(url.route, data, _header);
};
