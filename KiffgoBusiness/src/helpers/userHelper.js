import _ from 'lodash';
import moment from 'moment-timezone';
import DataHandler from '../services/DataHandler';
import { userLogoutRequest, setLoggedOutRecently } from '../actions/UserAction';
import { TRACKING_TYPE_JOB, TRACKING_TYPE_STOP } from '../constants';

const isLoggedIn = data => {
  let bol = !_.isEmpty(
    DataHandler.getStore().getState().user.data.access_token
  );
  let ddd = DataHandler.getStore().getState().user.data;

  return bol;
};

const getUserFullName = () => {
  if (isLoggedIn()) {
    const userData = DataHandler.getStore().getState().user.data;
    return `${userData.firstName} ${userData.lastName}`;
  }
  return '';
};
const getUserFirstLetter = () => {
  if (isLoggedIn()) {
    const userData = DataHandler.getStore().getState().user.data;

    return `${userData.firstName
      .charAt(0)
      .toUpperCase()}${userData.lastName.charAt(0).toUpperCase()}`;
  }

  return '';
};
const getUserWebhookSecret = () => {
  if (isLoggedIn()) {
    return DataHandler.getStore().getState().user.data.business.webhook_key;
  }

  return '';
};

const isKiffgoAdmin = () => {
  if (isLoggedIn) {
    return DataHandler.getStore().getState().user.data.admin;
  }
  return false;
};

const userLogout = () => {
  DataHandler.getStore().dispatch(setLoggedOutRecently(true));
  DataHandler.getStore().dispatch(userLogoutRequest());
};

const setUserLoggedOutRecently = param => {
  DataHandler.getStore().dispatch(setLoggedOutRecently(param));
};

// check tracking type is job
const ifIsTrackingTypeJob = trackingType => trackingType === TRACKING_TYPE_JOB;

// check tracking type is stop
const ifIsTrackingTypeStop = trackingType =>
  trackingType === TRACKING_TYPE_STOP;

const userCurrentTimeZone = moment.tz.guess();

export {
  isLoggedIn,
  getUserFullName,
  getUserFirstLetter,
  isKiffgoAdmin,
  userLogout,
  getUserWebhookSecret,
  setUserLoggedOutRecently,
  ifIsTrackingTypeJob,
  ifIsTrackingTypeStop,
  userCurrentTimeZone
};
