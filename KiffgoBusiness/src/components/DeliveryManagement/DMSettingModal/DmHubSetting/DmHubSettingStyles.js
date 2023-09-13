import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../../constants';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    width: '370px',
    border: 'solid 1px #7b7b7b',
    borderRadius: '8px'
  },

  body: {
    /* display: 'flex', flex: 8, */

    height: 'calc(100% - 30px)',
    padding: '15px'
  },
  footer: {
    /*  display: 'flex',
    flex: 0.5, */
    borderTop: 'solid 1px #7b7b7b'
  },
  footerLeft: {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    fontSize: '15px',
    color: Colors.white,
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  footerCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 6,
    paddingLeft: '12px',
    paddingRight: '12px',
    borderRight: 'solid 1px #7b7b7b',
    fontSize: '15px',
    color: Colors.white,
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  footerRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.2
  },
  plusIcon: {
    color: Colors.white,
    height: '16px',
    width: '16px',
    marginRight: '2px',
    cursor: 'pointer'
  },
  editIcon: {
    color: Colors.white,
    height: '12px',
    width: '12px',
    marginRight: '5px'
  },
  downIcon: {
    color: Colors.white,
    height: '13px',
    width: '13px',
    marginRight: '5px'
  },

  //old
  contentContainer: {
    display: 'flex',
    height: 'calc(100% - 62px)'
  },
  tabsContainer: {
    borderRight: 'solid 3px #404040'
  },
  tabUl: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 10,
    paddingBottom: 10
  },
  tab: {
    fontSize: '14px',
    marginTop: 10,
    color: '#aaaaaa',
    textAlign: 'left'
  },
  tabSelected: {
    backgroundColor: '#404040',
    borderRadius: '13px',
    color: '#ffffff',
    fontWeight: 'bold',
    position: 'relative',
    ':after': {
      content: "''",
      position: 'absolute',
      right: '10px',
      left: '10px',
      bottom: '-1px',
      display: 'block',
      backgroundColor: Colors.bgGreen,
      height: '2px',
      fontSize: '4px',
      borderRadius: '2px'
    }
  },
  greenLine: {
    backgroundColor: Colors.bgGreen,
    height: '2px',
    width: '100%'
  },

  footerButton: {
    display: 'flex',
    border: 'none',
    padding: '0px 15px',
    borderRadius: '9px',
    height: '38px',
    width: '90px',
    cursor: 'pointer',
    background: Colors.white,
    color: Colors.codGrays,
    alignItems: 'center ',
    fontSize: '15px',
    fontWeight: 'bold'
  },
  liNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    color: '#ffffff',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
    fontWeight: 'bold'
  },
  liNavSelected: {
    color: '#aaaaaa'
  },
  disabledContainer: {
    pointerEvents: 'none',
    opacity: 0.5,
    cursor: 'not-allowed'
  }
});
