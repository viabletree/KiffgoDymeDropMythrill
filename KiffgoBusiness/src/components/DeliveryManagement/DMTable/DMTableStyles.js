// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, AppStyles } from '../../../theme';

export default StyleSheet.create({
  statusIcon: {
    width: 'auto',
    height: '18px',
    marginRight: '5px'
  },
  wrapper: {
    overflow: 'hidden'
  },
  dashIcon: {
    fontSize: '11px'
  },
  emptyStateWrapper: {
    flex: 1,
    textAlign: 'center'
  },
  emptyStateHeading: {
    fontSize: '23px',
    lineHeight: '40px'
  },
  emptyStateText: {
    fontSize: '15px'
  },
  emptyStateIcon: {
    fontSize: '200px'
  },
  checkbox: {
    cursor: 'pointer'
  },
  checkboxTop: {
    cursor: 'pointer'
  },
  itemHover: {
    padding: '4px 6px',
    borderRadius: '3px',
    cursor: 'pointer',
    ...AppStyles.noSelection,
    ':hover': {
      backgroundColor: Colors.outerSpace
    }
  },
  dashIconPadding: {
    padding: '0px 4px'
  }
});
