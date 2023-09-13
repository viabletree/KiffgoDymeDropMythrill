// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../theme';

export default StyleSheet.create({
  headWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  calendarBtn: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    width: '33px',
    height: '29px',
    color: Colors.kgGreen,
    fontSize: '19px'
  },
  dtText: {
    fontSize: '11px',
    fontWeight: 'bold',
    marginTop: '7px'
  }
});
