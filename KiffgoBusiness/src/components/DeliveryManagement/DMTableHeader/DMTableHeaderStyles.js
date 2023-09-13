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
  btnTitle: {
    color: Colors.bgGreen,
    fontSize: '13px',
    textDecoration: 'underline'
  },
  btnWrapper: {
    paddingRight: '10px',
    paddingLeft: '10px',
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex'
  },
  btnIcon: {
    height: '12px',
    marginRight: '3px'
  },
  searchIcon: {
    color: Colors.borderGrey
  },
  searchWrapper: {
    position: 'relative',
    width: '280px',
    paddingRight: '20px',
    display: 'flex'
  },
  actionsWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  tableColumn: {
    marginTop: '10px',
    marginLeft: '10px'
  },
  tableColumnExport: {
    height: '28px',
    width: '55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    marginLeft: '10px',
    // color: '#878686',
    color: 'white',
    backgroundColor: Colors.mineShafta,
    cursor: 'pointer',
    borderRadius: '8px'
  },
  topIcon: {
    fontSize: '16px'
  },
  icon: {
    position: 'absolute',
    right: '90px',
    bottom: '9px',
    fontSize: '14px',
    color: 'white'
  }
});
