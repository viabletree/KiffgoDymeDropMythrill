// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import { GET_PUBLIC_TRACKING } from '../actions/ActionTypes';

const initialState = Immutable({
  data: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLIC_TRACKING.SUCCESS: {
      return Immutable.merge(state, {
        data: action.data
      });
    }

    default:
      return state;
  }
};
