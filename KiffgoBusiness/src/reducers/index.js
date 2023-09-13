import { combineReducers } from 'redux';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import user from './user';
import general from './general';
import booking from './booking';
import publicTracking from './publicTracking';
import payment from './payment';
import dmFilter from './dmFilter';
import dmTasks from './dmTasks';
import dmDriver from './dmDriver';
import dmPersist from './dmPersist';
import dmHub from './dmHub';
import apiWebhook from './apiWebhook';
import settings from './settings';
import dmdispatcher from './dmDispatcher';

export default combineReducers({
  user,
  general,
  Intl,
  booking,
  publicTracking,
  payment,
  dmFilter,
  dmTasks,
  dmDriver,
  dmHub,
  apiWebhook,
  dmPersist,
  settings,
  dmdispatcher
});
