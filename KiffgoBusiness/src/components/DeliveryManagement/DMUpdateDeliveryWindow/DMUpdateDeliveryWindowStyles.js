// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  selecteText: {
    color: Colors.white
  },
  wrapper: {
    padding: '10px'
  },
  unassignBtn: {
    width: '100%'
  },
  driverListingWrapper: {
    border: 'solid 1px #7b7b7b',
    padding: '10px',
    borderRadius: '10px',
    paddingTop: '15px'
  },
  heading: {
    color: 'white',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  infoText: {
    color: 'white',
    fontSize: '16px',
    marginTop: '15px'
  },
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
    marginTop: '7px',
    color: 'white'
  }
});
