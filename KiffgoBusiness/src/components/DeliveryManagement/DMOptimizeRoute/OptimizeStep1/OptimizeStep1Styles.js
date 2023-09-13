// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../theme';

export default StyleSheet.create({
  wrapper: {
    color: Colors.white
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  subHeading: {
    fontSize: '12px',
    opacity: '0.6',
    marginTop: '10px',
    marginBottom: '30px'
  },
  heading: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  deleteButton: {
    width: '300px',
    fontSize: '14px',
    height: '30px'
  },
  driverListingWrapper: {
    border: 'solid 1px #7b7b7b',
    padding: '10px',
    borderRadius: '10px',
    paddingTop: '15px'
  },
  selectOptions: {
    border: 'none',
    padding: '5px',
    fontSize: '12px',
    background: Colors.doveGray,
    color: Colors.white,
    borderRadius: '5px',
    flex: 5,
    outline: 'none'
  },
  hubSelectionLeft: {
    flex: 2,
    display: 'flex',
    alignItems: 'center'
  },
  dateWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  calendarBtn: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    width: '43px',
    height: '49px',
    color: Colors.kgGreen,
    fontSize: '26px',
    marginRight: '0px',
    paddingRight: '0px'
  }
});
