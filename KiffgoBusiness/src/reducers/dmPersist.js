/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import {
  DM_TABLE_COLUMN_VISIBILITY,
  DM_TABLE_COLUMN_UPDATE,
  DM_SET_PREVIOUS_SOCKET_ID
} from '../actions/ActionTypes';
import { TASK_FIELDS_NAME, TABLE_VIEW_COLUMNS_LIST } from '../constants';

const initialState = Immutable({
  tableSettings: {
    columns: TABLE_VIEW_COLUMNS_LIST
  },
  previousSocketId: ''
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DM_TABLE_COLUMN_VISIBILITY: {
      const finalTableSettings = _.cloneDeep(state.tableSettings);

      finalTableSettings.columns[action.columnName.key].visible =
        action.columnName.visibility;
      return Immutable.merge(state, {
        tableSettings: finalTableSettings
      });
    }
    case DM_TABLE_COLUMN_UPDATE: {
      const finalTableColumns = _.cloneDeep(state.tableSettings.columns);
      const cloneData = _.cloneDeep(TABLE_VIEW_COLUMNS_LIST);

      for (const property in finalTableColumns) {
        if (property in cloneData) {
          console.log('i was here');
          cloneData[property].visible = finalTableColumns[property].visible;
        }
      }
      let newTableSettings = {};
      newTableSettings.columns = cloneData;

      return Immutable.merge(state, {
        tableSettings: newTableSettings
      });
    }
    case DM_SET_PREVIOUS_SOCKET_ID: {
      return Immutable.merge(state, {
        previousSocketId: action.id
      });
    }
    default:
      return state;
  }
};
