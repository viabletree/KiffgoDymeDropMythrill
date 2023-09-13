// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  wrapper: {
    color: Colors.white
  },
  parentDiv: {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  parentDivSecond: {
    height: '240px',
    display: 'flex'
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  subHeading: {
    fontSize: '12px',
    opacity: '0.6',
    marginTop: '5px',
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
  },

  text: {
    fontSize: '14px',
    color: Colors.white,
    textAlign: 'left'
  },
  bold: {
    fontWeight: 'bold'
  },
  success: {
    color: Colors.bgGreen,
    fontSize: '14px',
    textAlign: 'justify',
    paddingTop: '30px',
    paddingLeft: '10px'
  },
  failed: {
    color: Colors.errorRed,
    marginTop: '5px',
    fontSize: '13px',
    lineHeight: '16px'
  },
  innerWrapper: {
    padding: '10px',
    textAlign: 'left'
  },
  toggleBtnText: {
    fontSize: '17px',
    fontWeight: 'bold',
    color: Colors.errorRed
  },
  removeImage: {
    color: Colors.errorRed,
    fontSize: '15px'
  }
});
