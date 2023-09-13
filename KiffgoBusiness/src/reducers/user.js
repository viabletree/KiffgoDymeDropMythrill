// @flow
import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {
  USER_SIGNIN,
  USER_UPLOAD_LOGO,
  USER_SIGNUP,
  USER_LOGOUT,
  SET_LOGGED_OUT_RECENTLY,
  REFRESH_TOKEN,
  DM_CHANGE_TAB_SELECTION,
  DM_UPDATE_TASK_BAR_EXPENDED_SECTIONS,
  DM_UPDATE_ORGANIZATION,
  DM_CHANGE_MAP_SERVICE_PROVIDER,
  DM_CHANGE_OFFLINE_MODE
} from '../actions/ActionTypes';
import { DM_TASK_BAR_SECTIONS } from '../components/DeliveryManagement/DMTaskBar/DMTaskBarController';
import { MAP_SERVICE_PROVIDERS } from '../constants';

const initialState = Immutable({
  data: {},
  isLoggedOutRecently: false,
  dmDataPersists: {
    selectTabIndex: 0, // this is about table and map tab selection
    taskBarExpendedSections: [DM_TASK_BAR_SECTIONS.UNASSIGNED]
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN.SUCCESS: {
      return Immutable.merge(state, {
        data: action.data
      });
    }
    case REFRESH_TOKEN.SUCCESS: {
      const data = _.cloneDeep(state.data);
      data.refresh_token = action.data.refresh_token;
      data.access_token = action.data.access_token;
      return Immutable.merge(state, {
        data
      });
    }
    case USER_UPLOAD_LOGO.SUCCESS: {
      const data = _.cloneDeep(state.data);
      data.logo = action.payload[0].logo;
      return Immutable.merge(state, {
        data
      });
    }
    case USER_SIGNUP.SUCCESS: {
      return Immutable.merge(state, {
        data: action.data
      });
    }
    case USER_LOGOUT.SUCCESS: {
      return Immutable.merge(state, {
        data: { refresh_token: '', access_token: '' }
      });
    }
    case SET_LOGGED_OUT_RECENTLY: {
      return Immutable.merge(state, {
        isLoggedOutRecently: action.data
      });
    }

    case DM_CHANGE_TAB_SELECTION: {
      const finalDmDataPersists = _.cloneDeep(state.dmDataPersists);
      finalDmDataPersists.selectTabIndex = action.selectedIndex;

      return Immutable.merge(state, {
        dmDataPersists: finalDmDataPersists
      });
    }

    case DM_UPDATE_TASK_BAR_EXPENDED_SECTIONS: {
      const finalDmDataPersists = _.cloneDeep(state.dmDataPersists);
      finalDmDataPersists.taskBarExpendedSections = _.xor(
        finalDmDataPersists.taskBarExpendedSections,
        [action.sectionName]
      );

      return Immutable.merge(state, {
        dmDataPersists: finalDmDataPersists
      });
    }

    case DM_UPDATE_ORGANIZATION.SUCCESS: {
      const data = _.cloneDeep(state.data);
      data.timezone = action.data.timezone;
      return Immutable.merge(state, {
        data
      });
    }

    case DM_CHANGE_MAP_SERVICE_PROVIDER.REQUEST: {
      const newData = _.cloneDeep(state.data);
      newData.service = action.payload.service;
      return Immutable.merge(state, {
        data: newData
      });
    }
    case DM_CHANGE_MAP_SERVICE_PROVIDER.FAILURE: {
      const newData = _.cloneDeep(state.data);
      if (action.service === MAP_SERVICE_PROVIDERS.google) {
        newData.service = MAP_SERVICE_PROVIDERS.mapbox;
      } else {
        newData.service = MAP_SERVICE_PROVIDERS.google;
      }
      return Immutable.merge(state, {
        data: newData
      });
    }
    case DM_CHANGE_OFFLINE_MODE.REQUEST: {
      const newData = _.cloneDeep(state.data);

      newData.business.offline_mode = action.payload.offline_mode;
      return Immutable.merge(state, {
        data: newData
      });
    }
    case DM_CHANGE_OFFLINE_MODE.FAILURE: {
      const newData = _.cloneDeep(state.data);

      newData.business.offline_mode = !action.data.offline_mode;
      return Immutable.merge(state, {
        data: newData
      });
    }
    default:
      return state;
  }
};
