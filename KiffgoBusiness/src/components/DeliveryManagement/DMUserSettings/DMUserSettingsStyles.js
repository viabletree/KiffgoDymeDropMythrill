// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_HEADER_HEIGHT } from '../../../constants';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  },
  para1: {
    fontSize: '14px',
    userSelect: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    khtmlUserSelect: 'none',
    msUserSelect: 'none'
  },
  item: {
   flex:1,
   width: '40%'
  },
  listSection: {
    overflow: 'auto',
    maxHeight: 'calc(100% - 25px)',
    padding: '0px 10px'
  },
  selectedItem: {
    backgroundColor: Colors.kgDarkGreen
  },
  invitedItem: {
    opacity: '0.7'
  },
  fixedHeight: {
    maxHeight: '190px',
    marginTop: '10px'
  }
});
