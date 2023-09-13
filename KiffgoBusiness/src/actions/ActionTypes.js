// @flow
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const CANCEL = 'CANCEL';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const NETWORK_INFO = 'NETWORK_INFO';
export const USER_UPLOAD_LOGO = createRequestTypes('USER_UPLOAD_LOGO');
export const USER_SIGNIN = createRequestTypes('USER_SIGNIN');
export const GET_VEHICLES = createRequestTypes('GET_VEHICLES');
export const SELECT_BOOKING_VEHICLE = 'SELECT_BOOKING_VEHICLE';
export const CHANGE_BOOKING_TAB = 'CHANGE_BOOKING_TAB';
export const SELECT_BOOKING_SERVICE = 'SELECT_BOOKING_SERVICE';
export const SELECT_ASAP_HOURS_OPTION = 'SELECT_ASAP_HOURS_OPTION';
export const CHANGE_PICKUP_DATE = 'CHANGE_PICKUP_DATE';
export const SET_FOCUSED_LOCATION_INDEX = 'SET_FOCUSED_LOCATION_INDEX';
export const ADDRESS_AUTO_COMPLETE = createRequestTypes(
  'ADDRESS_AUTO_COMPLETE'
);
export const GET_ADDRESS_DETAILS = createRequestTypes('GET_ADDRESS_DETAILS');
export const VALIDATE_POST_CODE = createRequestTypes('VALIDATE_POST_CODE');
export const VALIDATE_ADDRESS = 'VALIDATE_ADDRESS';
export const VALIDATE_MAP_PIN_ADDRESS = 'VALIDATE_MAP_PIN_ADDRESS';
export const UPDATE_BOOKING_LOCATION_DATA = 'UPDATE_BOOKING_LOCATION_DATA';
export const ADD_ADDITIONAL_LOCATION = 'ADD_ADDITIONAL_LOCATION';
export const REMOVE_ADDITIONAL_LOCATION = 'REMOVE_ADDITIONAL_LOCATION';
export const CHECK_FORBIDDEN = createRequestTypes('CHECK_FORBIDDEN');
export const UPDATE_RETURN_DISCOUNT = 'UPDATE_RETURN_DISCOUNT';
export const GET_DISTANCE_DURATION = createRequestTypes(
  'GET_DISTANCE_DURATION'
);
export const GET_SMART_ESTIMATE = createRequestTypes('GET_SMART_ESTIMATE');
export const UPDATE_EXTRA_LOADING_TIME = 'UPDATE_EXTRA_LOADING_TIME';
export const UPDATE_EXTRA_UNLOADING_TIME = 'UPDATE_EXTRA_UNLOADING_TIME';
export const UPDATE_NOTE_TO_DRIVER = 'UPDATE_NOTE_TO_DRIVER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const USER_SIGNUP = createRequestTypes('USER_SIGNUP');
export const USER_FORGOT_PASSWORD = createRequestTypes('USER_FORGOT_PASSWORD');
export const USER_RESET_PASSWORD = createRequestTypes('USER_RESET_PASSWORD');
export const USER_LOGOUT = createRequestTypes('USER_LOGOUT');
export const GET_ADDRESS_FROM_COORDINATES = createRequestTypes(
  'GET_ADDRESS_FROM_COORDINATES'
);
export const GET_IN_TOUCH = createRequestTypes('GET_IN_TOUCH');
export const REQUEST_A_DEMO = createRequestTypes('REQUEST_A_DEMO');
export const FLUSH_CURRENT_BOOKING = 'FLUSH_CURRENT_BOOKING';
export const CONFIRM_CURRENT_BOOKING = 'CONFIRM_CURRENT_BOOKING';
export const SUBMIT_BOOKING = createRequestTypes('SUBMIT_BOOKING');
export const BOOKING_THANK_YOU_VISITED = createRequestTypes(
  'BOOKING_THANK_YOU_VISITED'
);
export const REMOVE_UPDATED_ROUTE_FLAG = 'REMOVE_UPDATED_ROUTE_FLAG';

export const BOOKING_DETAIL = createRequestTypes('BOOKING_DETAIL');
export const SET_LOGGED_OUT_RECENTLY = 'SET_LOGGED_OUT_RECENTLY';
export const GET_PUBLIC_TRACKING = createRequestTypes('GET_PUBLIC_TRACKING');
export const CLEAR_BOOKING_LIST = 'CLEAR_BOOKING_LIST';
export const REFRESH_TOKEN = createRequestTypes('REFRESH_TOKEN');

export const GET_CARD_INTENT = createRequestTypes('GET_CARD_INTENT');
export const GET_SAVE_CARD_INFO = createRequestTypes('GET_SAVE_CARD_INFO');
export const DELETE_SAVE_CARD_INFO = createRequestTypes(
  'DELETE_SAVE_CARD_INFO'
);

export const UPDATE_TASK_DM_FILTER = 'UPDATE_TASK_DM_FILTER';
export const DM_FILTER_MODAL_VISIBLE = 'DM_FILTER_MODAL_VISIBLE';
export const HIDE_DM_FILTER_MODAL = 'HIDE_DM_FILTER_MODAL';
export const GET_ACTIVE_TAB_SLUG = 'GET_ACTIVE_TAB_SLUG';
export const SET_DELAY_MIN = 'SET_DELAY_MIN';
export const UNSELECTE_ALL_TASK_STATUS = 'UNSELECTE_ALL_TASK_STATUS';
export const SELECTE_ALL_TASK_STATUS = 'SELECTE_ALL_TASK_STATUS';
export const UPDATE_TIME_RANGE_DM_FILTER = 'UPDATE_TIME_RANGE_DM_FILTER';
export const UPDATE_DATE_DM_FILTER = 'UPDATE_DATE_DM_FILTER';
export const GET_DM_FILTER_DATA = createRequestTypes('GET_DM_FILTER_DATA');
export const DM_LOADER = 'DM_LOADER';
export const DM_ON_TASK_SELECT = 'DM_ON_TASK_SELECT';
export const DM_ON_DRIVER_TASK_SELECT = 'DM_ON_DRIVER_TASK_SELECT';
export const DM_ON_DRIVER_SELECT = 'DM_ON_DRIVER_SELECT';
export const DM_UNSELECT_ALL_TASKS = 'DM_UNSELECT_ALL_TASKS';
export const GET_DRIVERS_LIST = createRequestTypes('GET_DRIVERS_LIST');
export const GET_DRIVERS_DETAILS = createRequestTypes('GET_DRIVERS_DETAILS');
export const DM_ADD_NEW_TASK = 'DM_ADD_NEW_TASK';
export const DM_UPDATE_TASK_DELAY = 'DM_UPDATE_TASK_DELAY';
export const DM_ON_TASK_DELETED = 'DM_ON_TASK_DELETED';
export const DM_ON_MIGRATION_START = createRequestTypes(
  'DM_ON_MIGRATION_START'
);
export const DM_ON_TASK_INPUT_UPDATE = 'DM_ON_TASK_INPUT_UPDATE';
export const DM_TASK_RECENT_RECORD = createRequestTypes(
  'DM_TASK_RECENT_RECORD'
);
export const DM_TASK_CREATE = createRequestTypes('DM_TASK_CREATE');
export const DM_TASK_DELETE = createRequestTypes('DM_TASK_DELETE');
export const DM_CLEAR_TASK_INPUT = 'DM_CLEAR_TASK_INPUT';
export const DM_ON_DRIVER_INPUT_UPDATE = 'DM_ON_DRIVER_INPUT_UPDATE';
export const DM_DRIVER_OFF_DUTY = createRequestTypes('DM_DRIVER_OFF_DUTY');
export const DM_DRIVER_CREATE = createRequestTypes('DM_DRIVER_CREATE');
export const DM_DRIVER_EDIT = createRequestTypes('DM_DRIVER_EDIT');
export const DM_DRIVER_DELETE = createRequestTypes('DM_DRIVER_DELETE');
export const DM_DRIVER_SCHEDULE = createRequestTypes('DM_DRIVER_SCHEDULE');
export const DM_CLEAR_DRIVER_INPUT = 'DM_CLEAR_DRIVER_INPUT';
export const DM_GET_ALL_DRIVERS = createRequestTypes('DM_GET_ALL_DRIVERS');
export const DM_VIEW_DRIVER = 'DM_VIEW_DRIVER';
export const DM_SCHEDULE_DRIVER = 'DM_SCHEDULE_DRIVER';

export const DM_HIDE_DRIVER_SCHEDULER = 'DM_HIDE_DRIVER_SCHEDULER';

export const DM_HIDE_DRIVER_VIEWER = 'DM_HIDE_DRIVER_VIEWER';
export const DM_DRIVER_DETAIL_UPDATE = 'DM_DRIVER_DETAIL_UPDATE';
export const DM_DRIVER_UPDATE_TRACKING = 'DM_DRIVER_UPDATE_TRACKING';
export const DM_GET_SINGLE_TASK_DETAILS = createRequestTypes(
  'DM_GET_SINGLE_TASK_DETAILS'
);
export const DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN = createRequestTypes(
  'DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN'
);
export const DM_ASSIGN_TASK = createRequestTypes('DM_ASSIGN_TASK');
export const DM_UNASSIGN_TASK = createRequestTypes('DM_UNASSIGN_TASK');
export const DM_VERIFY_BULK_TASK_POSTCODE = createRequestTypes(
  'DM_VERIFY_BULK_TASK_POSTCODE'
);
export const DM_UPLOAD_BULK_TASKS = createRequestTypes('DM_UPLOAD_BULK_TASKS');
export const DM_CHANGE_TAB_SELECTION = 'DM_CHANGE_TAB_SELECTION';
export const UPDATE_DRIVER_DM_FILTER = 'UPDATE_DRIVER_DM_FILTER';
export const UNSELECTE_ALL_DRIVER_STATUS = 'UNSELECTE_ALL_DRIVER_STATUS';
export const SELECTE_ALL_DRIVER_STATUS = 'SELECTE_ALL_DRIVER_STATUS';
export const DM_UPDATE_TASK_BAR_EXPENDED_SECTIONS =
  'DM_UPDATE_TASK_BAR_EXPENDED_SECTIONS';

export const DM_SELECT_BULK_TASKS = 'DM_SELECT_BULK_TASKS';
export const DM_UPDATE_TASK_ETA = 'DM_UPDATE_TASK_ETA';
export const DM_UPDATE_TASK_SEQUENCE = createRequestTypes(
  'DM_UPDATE_TASK_SEQUENCE'
);

export const DM_TASK_SEQUENCE_CHANGED = 'DM_TASK_SEQUENCE_CHANGED';
export const DM_DRIVER_OFF_DUTY_AUTOMATICALLY =
  'DM_DRIVER_OFF_DUTY_AUTOMATICALLY';
export const DM_TASK_OPTIMIZE = 'DM_TASK_OPTIMIZE';
export const DM_GET_HUB_LIST = createRequestTypes('DM_GET_HUB_LIST');
export const DM_CREATE_HUB = createRequestTypes('DM_CREATE_HUB');
export const DM_DELETE_HUB = createRequestTypes('DM_DELETE_HUB');
export const DM_UPDATE_HUB = createRequestTypes('DM_UPDATE_HUB');
export const DM_ON_HUB_INPUT_UPDATE = 'DM_ON_HUB_INPUT_UPDATE';
export const DM_ON_HUB_INPUT_CLEAR = 'DM_ON_HUB_INPUT_CLEAR';
export const DM_UPDATE_ORGANIZATION = createRequestTypes(
  'DM_UPDATE_ORGANIZATION'
);
export const DM_SHOW_OPTIMIZE_TASK_MODAL = 'DM_SHOW_OPTIMIZE_TASK_MODAL';
export const DM_SHOW_COMMUNICATION_MODAL = 'DM_SHOW_COMMUNICATION_MODAL';
export const DM_ROUTE_OPTIMIZATION_VALIDATE = createRequestTypes(
  'DM_ROUTE_OPTIMIZATION_VALIDATE'
);
export const DM_ROUTE_OPTIMIZATION_SUBMIT = createRequestTypes(
  'DM_ROUTE_OPTIMIZATION_SUBMIT'
);
export const DM_SUBMIT_TRACKING_RATING = createRequestTypes(
  'DM_SUBMIT_TRACKING_RATING'
);
export const DM_UPDATE_BULK_TIME_WINDOW = createRequestTypes(
  'DM_UPDATE_BULK_TIME_WINDOW'
);
export const GET_API_KEYS = createRequestTypes('GET_API_KEYS');
export const CREATE_API_KEY = createRequestTypes('CREATE_API_KEY');
export const DELETE_API_KEY = createRequestTypes('DELETE_API_KEY');
export const EDIT_API_KEY = createRequestTypes('EDIT_API_KEY');

export const GET_WEB_HOOKS = createRequestTypes('GET_WEB_HOOKS');
export const GET_WEB_HOOKS_EVENTS = createRequestTypes('GET_WEB_HOOKS_EVENTS');
export const CREATE_WEB_HOOK = createRequestTypes('CREATE_WEB_HOOK');
export const EDIT_WEB_HOOK = createRequestTypes('EDIT_WEB_HOOK');
export const DELETE_WEB_HOOK = createRequestTypes('DELETE_WEB_HOOK');

export const DM_TABLE_COLUMN_VISIBILITY = 'DM_TABLE_COLUMN_VISIBILITY';
export const DM_TABLE_COLUMN_UPDATE = 'DM_TABLE_COLUMN_UPDATE';
export const DM_CHANGE_MAP_SERVICE_PROVIDER = createRequestTypes(
  'DM_CHANGE_MAP_SERVICE_PROVIDER'
);
export const DM_CALCULATE_ETA = createRequestTypes('DM_CALCULATE_ETA');

export const DM_GET_THIRDPARTY_API = createRequestTypes(
  'DM_GET_THIRDPARTY_API'
);
export const DM_POST_THIRDPARTY_API = createRequestTypes(
  'DM_POST_THIRDPARTY_API'
);
export const DM_CHANGE_THIRDPARTY_API_ID = 'DM_CHANGE_THIRDPARTY_API_ID';
export const DM_CHANGE_THIRDPARTY_API_KEY = 'DM_CHANGE_THIRDPARTY_API_KEY';
export const DM_UPDATE_FILTER_NOTIFICATION_TYPE =
  'DM_UPDATE_FILTER_NOTIFICATION_TYPE';
export const UPDATE_COMMUNICATION_SETTINGS = createRequestTypes(
  'UPDATE_COMMUNICATION_SETTINGS'
);
export const DM_NOTIFY = createRequestTypes('DM_NOTIFY');
export const DM_TASK_SEARCH = createRequestTypes('DM_TASK_SEARCH');

export const DM_GET_DISPATCHER = createRequestTypes('DM_GET_DISPATCHER');
export const DM_DISPATCHER_CREATE = createRequestTypes('DM_DISPATCHER_CREATE');
export const DM_DISPATCHER_DELETE = createRequestTypes('DM_DISPATCHER_DELETE');
export const DM_GET_DRIVER_TASKS = createRequestTypes('DM_GET_DRIVER_TASKS');
export const DM_CHANGE_PRIORITY = createRequestTypes('DM_CHANGE_PRIORITY');
export const DM_CHANGE_OFFLINE_MODE = createRequestTypes(
  'DM_CHANGE_OFFLINE_MODE'
);
export const DM_SET_PREVIOUS_SOCKET_ID = 'DM_SET_PREVIOUS_SOCKET_ID';
export const DM_SELECT_BULK_DRIVER_TASKS = 'DM_SELECT_BULK_DRIVER_TASKS';
export const DM_UNSELECT_ALL_DRIVER_TASKS = 'DM_UNSELECT_ALL_DRIVER_TASKS';
export const DM_CLEAR_TASK_LIST = 'DM_CLEAR_TASK_LIST';
