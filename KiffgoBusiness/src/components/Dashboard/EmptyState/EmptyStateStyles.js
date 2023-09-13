// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  emptyStateHeight: {
    minHeight: 'calc(100vh - 230px)'
  },
  emptyStateViewHeight: {
    minHeight: '100vh !important'
  },
  dBookingBtn: {
    marginTop: '30px'
  },
  upperCase: {
    textTransform: 'capitalize'
  },
  bgGreen: {
    backgroundColor: Colors.lightGreen
  }
});
