// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import { USER_LOGOUT, DRIVER_VERIFY } from '../actions/ActionTypes';

const initialState = Immutable({
  data: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    /* case DRIVER_VERIFY.SUCCESS: {
      const tempUnverifiedData = _.cloneDeep(state.data);

      const findVerfiedDriverIndex = _.findIndex(tempUnverifiedData, {
        id: action.data
      });
      tempUnverifiedData.splice(findVerfiedDriverIndex, 1);
      return Immutable.merge(state, {
        data: tempUnverifiedData
      });
    } */

    // when user logout then empty data
    case USER_LOGOUT.SUCCESS: {
      return Immutable.merge(state, initialState);
    }

    default:
      return state;
  }
};
