// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import {
  SHOW_MODAL,
  HIDE_MODAL,
  USER_LOGOUT,
  REFRESH_TOKEN,
  USER_SIGNIN,
  GET_VEHICLES,
  DM_UPDATE_TASK_SEQUENCE,
  DM_UPDATE_TASK_ETA
} from '../actions/ActionTypes';
import { MODAL_TYPES, TASK_FIELDS_NAME } from '../constants';

const defaultModalsState = {
  showSignupModal: false,
  showSigninModal: false,
  forgotPasswordModal: false,
  resetPasswordModal: false
};

const initialState = Immutable({
  accessToken: '',
  refreshToken: '',
  selectedIndex: 0,
  vehicleTypes: [],
  showEta: true,

  modals: {
    showSignupModal: false,
    showSigninModal: false,
    forgotPasswordModal: false,
    resetPasswordModal: false
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      const modalValues = _.cloneDeep(defaultModalsState);

      if (action.modalType === MODAL_TYPES.SIGNIN_MODAL) {
        modalValues.showSigninModal = true;
      } else if (action.modalType === MODAL_TYPES.SIGNUP_MODAL) {
        modalValues.showSignupModal = true;
      } else if (action.modalType === MODAL_TYPES.FORGOT_PASSWORD) {
        modalValues.forgotPasswordModal = true;
      } else if (action.modalType === MODAL_TYPES.RESET_PASSWORD) {
        modalValues.resetPasswordModal = true;
      }

      return Immutable.merge(state, {
        modals: modalValues
      });
    }

    case HIDE_MODAL: {
      const modalValues = _.cloneDeep(defaultModalsState);

      return Immutable.merge(state, {
        modals: modalValues
      });
    }
    // when user logout then empty data
    case USER_LOGOUT.SUCCESS: {
      return Immutable.merge(state, initialState);
    }
    case GET_VEHICLES.SUCCESS: {
      return Immutable.merge(state, {
        vehicleTypes: action.data
      });
    }
    case DM_UPDATE_TASK_SEQUENCE.REQUEST: {
      return Immutable.merge(state, {
        showEta: false
      });
    }
    case DM_UPDATE_TASK_ETA: {
      return Immutable.merge(state, {
        showEta: action.changeShowEta
      });
    }

    default:
      return state;
  }
};
