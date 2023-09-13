// @flow
import _ from "lodash";
import Immutable from "seamless-immutable";
import { GET_PAGE_DETAILS } from "../actions/ActionTypes";

const initialState = Immutable({
  pageDetails: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGE_DETAILS.SUCCESS: {
      return Immutable.merge(state, {
        pageDetails: action.data,
      });
    }

    default:
      return state;
  }
};
