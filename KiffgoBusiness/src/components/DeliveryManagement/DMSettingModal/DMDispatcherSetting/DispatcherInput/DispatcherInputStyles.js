// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../../theme';

export default StyleSheet.create({
  wrapper: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    marginTop: '2px',
    borderRadius: '2px',

    ':hover': {
      backgroundColor: Colors.mineShaft
    }
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 5px',
    marginTop: '10px',
    cursor: 'pointer'
  },
  selected: {
    background: 'white',
    ':hover': {
      backgroundColor: 'white'
    }
  },
  title: {
    fontSize: '13px',
    fontWeight: '600',
    color: Colors.white,
    display: 'flex',
    flexGrow: '2',
  },
  titleSelected: {
    color: 'black'
  },
  key: {
    marginTop: '5px',
    color: '#7b7b7b',
    fontSize: '13px'
  },
  selectedItem: {
    backgroundColor: Colors.kgDarkGreen
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 5px',
    marginTop: '10px',
    cursor: 'pointer'
  },
  para1: {
    fontSize: '14px',
    userSelect: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    khtmlUserSelect: 'none',
    msUserSelect: 'none'
  },
  rightItem: {

    justifyContent: 'flex-end',
    flexGrow: 2,
    display: 'flex'
  }
});
