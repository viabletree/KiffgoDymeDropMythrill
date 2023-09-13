import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {
  USER_LOGOUT,
  USER_SIGNIN,
  UPDATE_COMMUNICATION_SETTINGS
} from '../actions/ActionTypes';

const initialState = Immutable({
  communicationSetting: {},
  communicationKeywords: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN.SUCCESS: {
      const { communication_keywords, communication_setting } = action.data;

      return Immutable.merge(state, {
        communicationSetting: communication_setting[0],
        communicationKeywords: communication_keywords
      });
    }
    case UPDATE_COMMUNICATION_SETTINGS.SUCCESS: {
      return Immutable.merge(state, {
        communicationSetting: action.data
      });
    }
    // case GET_API_KEYS.SUCCESS: {
    //   return Immutable.merge(state, {
    //     apiKeys: action.data
    //   });
    // }
    // case CREATE_API_KEY.SUCCESS: {
    //   const apiKeys = _.cloneDeep(state.apiKeys);
    //   apiKeys.push(action.data);
    //   return Immutable.merge(state, {
    //     apiKeys
    //   });
    // }
    // case DELETE_API_KEY.SUCCESS: {
    //   const tempApiKeys = _.cloneDeep(state.apiKeys);
    //   const apiKeys = tempApiKeys.filter(function(obj) {
    //     return obj.id !== action.id;
    //   });
    //   return Immutable.merge(state, {
    //     apiKeys
    //   });
    // }
    // case EDIT_API_KEY.SUCCESS: {
    //   const tempApiKeys = _.cloneDeep(state.apiKeys);
    //   const updatedIndex = _.findIndex(tempApiKeys, item => {
    //     return item.id === action.data.id;
    //   });
    //   if (updatedIndex !== -1) {
    //     tempApiKeys[updatedIndex] = action.data;
    //   }
    //   return Immutable.merge(state, {
    //     apiKeys: tempApiKeys
    //   });
    // }
    // case GET_WEB_HOOKS.SUCCESS: {
    //   const groupData = _.chain(action.data)
    //     .groupBy(item => item.trigger.event_slug)
    //     .value();
    //   return Immutable.merge(state, {
    //     webHooks: groupData
    //   });
    // }
    // case CREATE_WEB_HOOK.SUCCESS: {
    //   const tempWebhooks = _.cloneDeep(state.webHooks);
    //   if (action.data.trigger.event_slug in tempWebhooks) {
    //     tempWebhooks[action.data.trigger.event_slug].push(action.data);
    //   } else {
    //     tempWebhooks[action.data.trigger.event_slug] = [action.data];
    //   }
    //   return Immutable.merge(state, {
    //     webHooks: tempWebhooks
    //   });
    // }
    // case EDIT_WEB_HOOK.SUCCESS: {
    //   const tempWebhooks = _.cloneDeep(state.webHooks);
    //   let allTasks = [];
    //   Object.keys(tempWebhooks).map(item => {
    //     allTasks = allTasks.concat(tempWebhooks[item]);
    //     return true;
    //   });

    //   const updatedIndex = _.findIndex(
    //     allTasks,
    //     item => item.id === action.data.id
    //   );
    //   if (updatedIndex !== -1) {
    //     allTasks[updatedIndex] = action.data;
    //   }
    //   const groupData = _.chain(allTasks)
    //     .groupBy(item => item.trigger.event_slug)
    //     .value();
    //   return Immutable.merge(state, {
    //     webHooks: groupData
    //   });
    // }
    // case DELETE_WEB_HOOK.SUCCESS: {
    //   const tempWebhooks = _.cloneDeep(state.webHooks);

    //   const deletedIndex = _.findIndex(
    //     tempWebhooks[action.data.event_slug],
    //     item => item.id === action.data.webhookId
    //   );

    //   if (deletedIndex !== -1) {
    //     tempWebhooks[action.data.event_slug].splice(deletedIndex, 1);
    //     if (tempWebhooks[action.data.event_slug].length === 0) {
    //       delete tempWebhooks[action.data.event_slug];
    //     }
    //   }
    //   return Immutable.merge(state, {
    //     webHooks: tempWebhooks
    //   });
    // }

    // case DM_GET_THIRDPARTY_API.SUCCESS: {
    //   const lstkeys = action.data;
    //   return Immutable.merge(state, {
    //     thirpartyapikey: lstkeys
    //   });
    // }

    // case DM_CHANGE_THIRDPARTY_API_KEY: {
    //   const oldata = _.cloneDeep(state.thirpartyapikey);
    //   oldata.thirdpartyapi_key = action.data;
    //   return Immutable.merge(state, {
    //     thirpartyapikey: oldata
    //   });
    // }

    // case DM_CHANGE_THIRDPARTY_API_ID: {
    //   const oldata = _.cloneDeep(state.thirpartyapikey);
    //   oldata.thirdpartyapi_id = action.data;
    //   return Immutable.merge(state, {
    //     thirpartyapikey: oldata
    //   });
    // }

    // case DM_POST_THIRDPARTY_API.SUCCESS: {
    //   const oldata = _.cloneDeep(state.thirpartyapikey);
    //   return Immutable.merge(state, {
    //     thirpartyapikey: oldata
    //   });
    // }

    case USER_LOGOUT.SUCCESS: {
      return Immutable.merge(state, initialState);
    }

    default:
      return state;
  }
};
