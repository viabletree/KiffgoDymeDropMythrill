// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import {
  DM_GET_HUB_LIST,
  DM_ON_HUB_INPUT_UPDATE,
  USER_LOGOUT,
  DM_ON_HUB_INPUT_CLEAR,
  DM_CREATE_HUB,
  DM_DELETE_HUB,
  DM_UPDATE_HUB
} from '../actions/ActionTypes';
import { HUB_FIELDS_NAME } from '../constants';

const initialHubInput = {
  [HUB_FIELDS_NAME.LOCATION]: {},
  [HUB_FIELDS_NAME.ADDRESS]: '',
  [HUB_FIELDS_NAME.BUILDING]: '',
  [HUB_FIELDS_NAME.NAME]: '',
  [HUB_FIELDS_NAME.POST_CODE]: '',
  [HUB_FIELDS_NAME.STREET_NUMBER]: '',
  [HUB_FIELDS_NAME.STREET_NAME]: '',
  [HUB_FIELDS_NAME.COUNTRY]: '',
  [HUB_FIELDS_NAME.CITY_TOWN]: '',
  [HUB_FIELDS_NAME.SERVICE_TIME]: 0
};

const initialState = Immutable({
  hubInput: _.cloneDeep(initialHubInput),
  allHubs: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DM_GET_HUB_LIST.SUCCESS: {
      return Immutable.merge(state, {
        allHubs: action.data
      });
    }

    case DM_ON_HUB_INPUT_UPDATE: {
      const hubCurrentState = _.cloneDeep(state.hubInput);
      const hubNewState = { ...hubCurrentState, ...action.data };

      return Immutable.merge(state, {
        hubInput: hubNewState
      });
    }
    case DM_ON_HUB_INPUT_CLEAR: {
      return Immutable.merge(state, {
        hubInput: initialHubInput
      });
    }
    case DM_CREATE_HUB.SUCCESS: {
      return Immutable.merge(state, {
        allHubs: _.uniqBy([...state.allHubs, ...action.data], 'id')
      });
    }
    case DM_DELETE_HUB.SUCCESS: {
      const { hubId } = action.data;

      // Deleting Hub from all Hub
      const allHubsClone = _.cloneDeep(state.allHubs);

      if (allHubsClone.length) {
        const indexOfExistingHub = _.findIndex(allHubsClone, {
          id: hubId
        });

        if (indexOfExistingHub >= 0) {
          // Hub already exists in all list
          allHubsClone.splice(indexOfExistingHub, 1);
        }
      }

      return Immutable.merge(state, {
        allHubs: _.uniqBy(allHubsClone, 'id')
      });
    }
    case DM_UPDATE_HUB: {
      const data = action.data[0];
      const allHubsClone = _.cloneDeep(state.allHubs);
      if (allHubsClone.length) {
        const indexOfExistingHub = _.findIndex(allHubsClone, {
          id: data.id
        });
        if (indexOfExistingHub >= 0) {
          // hub already exists in list
          allHubsClone[indexOfExistingHub] = data;
        }
      }

      return Immutable.merge(state, {
        allHubs: _.uniqBy(allHubsClone, 'id')
      });
    }
    // when user logout then empty data
    case USER_LOGOUT.SUCCESS: {
      return Immutable.merge(state, initialState);
    }
    default:
      return state;
  }
};
