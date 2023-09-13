import { take, put, call, fork, takeLatest } from 'redux-saga/effects';
import {
  DM_ON_MIGRATION_START,
  DM_TASK_RECENT_RECORD,
  DM_TASK_CREATE,
  DM_TASK_DELETE,
  DM_GET_SINGLE_TASK_DETAILS,
  DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN,
  DM_ASSIGN_TASK,
  DM_UNASSIGN_TASK,
  DM_VERIFY_BULK_TASK_POSTCODE,
  DM_UPLOAD_BULK_TASKS,
  DM_UPDATE_TASK_SEQUENCE,
  DM_ROUTE_OPTIMIZATION_VALIDATE,
  DM_ROUTE_OPTIMIZATION_SUBMIT,
  DM_SUBMIT_TRACKING_RATING,
  DM_UPDATE_BULK_TIME_WINDOW,
  DM_NOTIFY,
  DM_TASK_SEARCH,
  DM_CHANGE_PRIORITY
} from '../actions/ActionTypes';
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from '../constants';
import {
  DM_ON_MIGRATION_START as DM_ON_MIGRATION_START_URL,
  DM_TASK_RECENT_RECORD as DM_TASK_RECENT_RECORD_URL,
  DM_TASK_CREATE as DM_TASK_CREATE_URL,
  DM_TASK_DELETE as DM_TASK_DELETE_URL,
  DM_GET_SINGLE_TASK_DETAILS as DM_GET_SINGLE_TASK_DETAILS_URL,
  DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN as DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN_URL,
  DM_ASSIGN_TASK as DM_ASSIGN_TASK_URL,
  DM_UNASSIGN_TASK as DM_UNASSIGN_TASK_URL,
  DM_VERIFY_BULK_TASK_POSTCODE as DM_VERIFY_BULK_TASK_POSTCODE_URL,
  DM_UPLOAD_BULK_TASKS as DM_UPLOAD_BULK_TASKS_URL,
  DM_UPDATE_TASK_SEQUENCE as DM_UPDATE_TASK_SEQUENCE_URL,
  DM_ROUTE_OPTIMIZATION_VALIDATE as DM_ROUTE_OPTIMIZATION_VALIDATE_URL,
  DM_ROUTE_OPTIMIZATION_SUBMIT as DM_ROUTE_OPTIMIZATION_SUBMIT_URL,
  DM_SUBMIT_TRACKING_RATING as DM_SUBMIT_TRACKING_RATING_URL,
  DM_UPDATE_BULK_TIME_WINDOW as DM_UPDATE_BULK_TIME_WINDOW_URL,
  DM_NOTIFY as DM_NOTIFY_URL,
  DM_TASK_SEARCH as DM_TASK_SEARCH_URL,
  DM_CHANGE_PRIORITY as DM_CHANGE_PRIORITY_URL,
  callRequest
} from '../config/WebService';
import {
  dmGetSingleTaskDetailsSuccess,
  dmGetSingleTaskDetailsNoTokenSuccess,
  dmTaskEtaChanged,
  dmTaskSearchSuccess
} from '../actions/DMTasksActions';
import ApiSauce from '../services/ApiSauce';
import Util from '../services/Util';
import { getManipulatedTaskList } from '../helpers/dmHelper';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* dmRouteOptimizationValidate() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_ROUTE_OPTIMIZATION_VALIDATE.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_ROUTE_OPTIMIZATION_VALIDATE_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (Util.checkDev()) console.log('CATCH');
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* dmRouteOptimizationSubmit() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_ROUTE_OPTIMIZATION_SUBMIT.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_ROUTE_OPTIMIZATION_SUBMIT_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (Util.checkDev()) console.log('CATCH');
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* dmTaskRecentRecords() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_TASK_RECENT_RECORD.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_TASK_RECENT_RECORD_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* dmTaskMigration() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_ON_MIGRATION_START.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_ON_MIGRATION_START_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(response, 'err');

        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(err, true);
      alert(err.message);
    }
  }
}
function* dmTaskCreate() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_TASK_CREATE.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_TASK_CREATE_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(response, 'err');

        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(err, true);
      alert(err.message);
    }
  }
}

function* dmTaskDelete() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_TASK_DELETE.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_TASK_DELETE_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        /* yield put(
          getDmFilterDataSuccess({
            tasksList: getManipulatedTaskList(response.data)
          })
        ); */
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* dmGetSingleTaskDetails() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_GET_SINGLE_TASK_DETAILS.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_GET_SINGLE_TASK_DETAILS_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        yield put(
          dmGetSingleTaskDetailsSuccess(
            getManipulatedTaskList([response.data.task])
          )
        );
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* dmGetSingleTaskDetailsNoToken() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_GET_SINGLE_TASK_DETAILS_NO_TOKEN_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback)
          responseCallback(response.status, response.data.task);
      } else {
        if (responseCallback) responseCallback(false, response.message);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback)
        responseCallback(false, err.message || SOMETHING_WRONG);
      alert(err.message);
    }
  }
}

function* dmAssignTask() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_ASSIGN_TASK.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_ASSIGN_TASK_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* dmUnassignTask() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_UNASSIGN_TASK.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_UNASSIGN_TASK_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response.status, null);
      } else {
        if (responseCallback) responseCallback(null, 'err');
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
function* verifyBulkTaskPostcode() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_VERIFY_BULK_TASK_POSTCODE.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_VERIFY_BULK_TASK_POSTCODE_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(true, response);
      } else {
        if (responseCallback) responseCallback(null, 'No location found');
      }
    } catch (err) {
      if (responseCallback) responseCallback(false, err.message);
    }
  }
}

function* uploadBulkTaskRequest() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_UPLOAD_BULK_TASKS.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_UPLOAD_BULK_TASKS_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback)
          responseCallback(response.status, response.data[0]);
      } else {
        if (responseCallback) responseCallback(false, response.data[0]);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false, err);
      alert(err.message);
    }
  }
}

function* updateTaskSequence() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_UPDATE_TASK_SEQUENCE.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_UPDATE_TASK_SEQUENCE_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response.status);
      } else {
        yield put(dmTaskEtaChanged([], true));
        if (responseCallback) responseCallback(false);
        yield put(dmTaskEtaChanged([], true));
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      yield put(dmTaskEtaChanged([], true));
      if (responseCallback) responseCallback(false, err);
      alert(err.message);
    }
  }
}
function* submitTrackingRating() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_SUBMIT_TRACKING_RATING.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_SUBMIT_TRACKING_RATING_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(false);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false, err);
      alert(err.message);
    }
  }
}
function* bulkUpdateTimeWindow() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_UPDATE_BULK_TIME_WINDOW.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_UPDATE_BULK_TIME_WINDOW_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(false);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false, err);
      alert(err.message);
    }
  }
}
function* notifyRequest() {
  while (true) {
    const { responseCallback, payload } = yield take(DM_NOTIFY.REQUEST);
    try {
      const response = yield call(
        callRequest,
        DM_NOTIFY_URL,
        payload,
        '',
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response.status, response.data);
      } else {
        if (responseCallback) responseCallback(false);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false, err);
      alert(err.message);
    }
  }
}
function* taskSearch(action) {
  const { responseCallback, payload } = action;
  try {
    const response = yield call(
      callRequest,
      DM_TASK_SEARCH_URL,
      payload,
      '',
      {},
      ApiSauce
    );

    if (response.status) {
      yield put(dmTaskSearchSuccess(getManipulatedTaskList(response.data)));
      if (responseCallback) responseCallback(response.status, response.data);
    } else {
      if (responseCallback) responseCallback(false);
      alert(response.message || SOMETHING_WRONG);
    }
  } catch (err) {
    if (responseCallback) responseCallback(false, err);
    alert(err.message);
  }
}
function* updateTaskPriority() {
  while (true) {
    const { responseCallback, payload } = yield take(
      DM_CHANGE_PRIORITY.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DM_CHANGE_PRIORITY_URL,
        payload,
        '',
        {},
        ApiSauce
      );
      if (response.status) {
        if (responseCallback) responseCallback(response.status);
      } else {
        if (responseCallback) responseCallback(false);
        alert(response.message || SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false, err);
      alert(err.message);
    }
  }
}

export default function* root() {
  yield fork(dmTaskRecentRecords);
  yield fork(dmTaskCreate);
  yield fork(dmTaskDelete);
  yield fork(dmGetSingleTaskDetails);
  yield fork(dmAssignTask);
  yield fork(dmUnassignTask);
  yield fork(verifyBulkTaskPostcode);
  yield fork(uploadBulkTaskRequest);
  yield fork(updateTaskSequence);
  yield fork(dmRouteOptimizationValidate);
  yield fork(dmGetSingleTaskDetailsNoToken);
  yield fork(dmRouteOptimizationSubmit);
  yield fork(submitTrackingRating);
  yield fork(dmTaskMigration);
  yield fork(bulkUpdateTimeWindow);
  yield fork(notifyRequest);
  yield fork(updateTaskPriority);
  yield takeLatest(DM_TASK_SEARCH.REQUEST, taskSearch);
}
