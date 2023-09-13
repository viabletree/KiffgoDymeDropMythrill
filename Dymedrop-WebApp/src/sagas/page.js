import {take, put, call, fork} from "redux-saga/effects";
import {
  GET_PAGE_DETAILS,
  VIEW_PAGE_COUNT,
  CLICK_PAGE_COUNT,
  ADD_PASS_VIEW,
} from "../actions/ActionTypes";
import {getPageDetailsSuccess} from "../actions/PageActions";
import {
  GET_PAGE_DETAILS as GET_PAGE_DETAILS_URL,
  VIEW_PAGE_COUNT as VIEW_PAGE_COUNT_URL,
  CLICK_PAGE_COUNT as CLICK_PAGE_COUNT_URL,
  ADD_PASS_VIEW as ADD_PASS_VIEW_URL,
  callRequest,
} from "../config/WebService";
import {manipulatePageDetails} from "../manipulators/pageManipulator";
import ApiSauce from "../services/ApiSauce";

function* getPageDetails() {
  while (true) {
    const {payload, responseCallback} = yield take(GET_PAGE_DETAILS.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_PAGE_DETAILS_URL,
        {},
        `${payload.slug}`,
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(getPageDetailsSuccess(manipulatePageDetails(response.data)));
        if (responseCallback) responseCallback(true);
      } else {
        if (responseCallback) responseCallback(false);
      }
    } catch (err) {
      console.log({err});
      if (responseCallback) responseCallback(false);
    }
  }
}

function* viewPageCount() {
  while (true) {
    const {payload, responseCallback} = yield take(VIEW_PAGE_COUNT.REQUEST);
    try {
      const response = yield call(
        callRequest,
        VIEW_PAGE_COUNT_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(true);
      } else {
        if (responseCallback) responseCallback(false);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false);
    }
  }
}

function* clickPageCount() {
  while (true) {
    const {payload, responseCallback} = yield take(CLICK_PAGE_COUNT.REQUEST);
    try {
      const response = yield call(
        callRequest,
        CLICK_PAGE_COUNT_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(true);
      } else {
        if (responseCallback) responseCallback(false);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false);
    }
  }
}

function* addPassView() {
  while (true) {
    const {params, responseCallback} = yield take(ADD_PASS_VIEW);
    try {
      const response = yield call(
        callRequest,
        ADD_PASS_VIEW_URL,
        {},
        `${params}`,
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback)
          responseCallback({status: true, data: response.data});
      } else {
        responseCallback({status: false, message: response.message});
      }
    } catch (err) {
      console.log({err});
      // if (responseCallback) responseCallback(onFailRequestGeneral);
    }
  }
}

export default function* root() {
  yield fork(getPageDetails);
  yield fork(viewPageCount);
  yield fork(clickPageCount);
  yield fork(addPassView);
}
