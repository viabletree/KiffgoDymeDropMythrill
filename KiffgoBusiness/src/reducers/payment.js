// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import {
  GET_CARD_INTENT, 
  GET_SAVE_CARD_INFO,
  DELETE_SAVE_CARD_INFO
} from '../actions/ActionTypes';

const initialState = Immutable({
  cardIntent: {},
  cardSaveInfo:{}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD_INTENT.SUCCESS: {
      
      return Immutable.merge(state, {
        cardIntent: action.data
      });
    }
    case GET_SAVE_CARD_INFO.SUCCESS: {
      return Immutable.merge(state, {
        cardSaveInfo: action.data
      });
    }
    case DELETE_SAVE_CARD_INFO.SUCCESS: {
      return Immutable.merge(state, initialState);
      
    }
   

    default:
      return state;
  }
};
