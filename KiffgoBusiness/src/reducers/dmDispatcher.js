import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {
  DM_GET_DISPATCHER,
  DM_DISPATCHER_CREATE,
  DM_DISPATCHER_DELETE
} from '../actions/ActionTypes';

const initialState = Immutable({
  dispatcherlst: [],
  dispatcher: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DM_GET_DISPATCHER.SUCCESS: {
      const lst = action.data;
      return Immutable.merge(state, {
        dispatcherlst: lst,
      });
    }

    case DM_DISPATCHER_CREATE.SUCCESS: {
      const lst = action.data;
      return Immutable.merge(state, {
        dispatcherlst: lst
      });
    }

    case DM_DISPATCHER_DELETE.SUCCESS: {
      const item = action.data;
      return Immutable.merge(state, {
        dispatcher: item
      });
    }

    default:
      return state;
  }
};
