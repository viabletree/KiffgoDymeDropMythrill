import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../../constants';

export default StyleSheet.create({
  apiWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: '20px'
  },
  innerWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '450px',
    border: 'solid 1px #7b7b7b',
    borderRadius: '8px',
    marginTop: '10px'
  },
  innerSecretBox: {
    padding: '20px',
    overflowWrap: 'anywhere'
  },
  clipboard: {
    cursor: 'pointer',
    top: '6px',
    position: 'absolute',
    right: '10px',
    color: 'white'
  },
  smallButton: {
    height: '26px'
  },

  body: {
    /* display: 'flex', flex: 8, */
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '192px',
    padding: '10px 0px 10px 5px'
  },
  heading: {
    color: Colors.borderGrey
  },
  loader: {
    display: 'flex',
    justifyContent: 'center'
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
  },
  headingAddWebhook: {
    color: 'white',
    fontSize: '15px'
  },
  lowerTextAddWebhook: {
    color: Colors.borderGrey,
    fontSize: '13px'
  },
  selectOptions: {
    padding: '5px',
    fontSize: '14px',
    backgroundColor: Colors.mineShafta,
    color: Colors.white,
    borderRadius: '5px',
    outline: 'none',
    width: '100%',
    border: 'solid 1px #7b7b7b'
  },
  thirdpartyapiactionText: {
    textDecoration: 'underline',
    color: Colors.bgGreen,
    fontWeight: 'bold',
    fontSize: '13px',
    '@media (max-width: 767px)': {
      margin: '20px auto'
    }
  }
});
