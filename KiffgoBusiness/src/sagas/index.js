import { fork } from 'redux-saga/effects';
import user from './user';
import general from './general';
import booking from './booking';
import PublicTracking from './PublicTracking';
import payment from './payment';
import dmFilter from './dmFilter';
import dmTasks from './dmTasks';
import dmDriver from './dmDriver';
import dmHub from './dmHub';
import apiWebhook from './apiWebhook';
import settings from './settings';
import dmDispatcher from './dmDispatcher';

export default function* root() {
  yield fork(user);
  yield fork(general);
  yield fork(booking);
  yield fork(PublicTracking);
  yield fork(payment);
  yield fork(dmFilter);
  yield fork(dmTasks);
  yield fork(dmDriver);
  yield fork(dmHub);
  yield fork(apiWebhook);
  yield fork(settings);
  yield fork(dmDispatcher);
}
