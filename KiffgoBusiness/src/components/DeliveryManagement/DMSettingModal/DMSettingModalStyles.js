import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../constants';

export default StyleSheet.create({
  wrapper: {
    height: '100%'
  },
  contentContainer: {
    display: 'flex',
    height: 'calc(100% - 62px)',
    overflow: 'hidden'
  },
  tabsContainer: {
    borderRight: 'solid 3px #404040',
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '260px'
  },
  tabBody: {
    display: 'flex',
    width: '100%',
    padding: '20px 0',
    justifyContent: 'center',
    flex: 1,
    overflow: 'auto'
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
  footer: {
    display: 'flex',
    backgroundColor: '#404040',
    height: '62px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '30px'
  },
  footerButton: {
    display: 'flex',
    border: 'none',
    padding: '5px 15px',
    borderRadius: '9px',
    height: '38px',
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
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: 'bold',
    outline: 'none'
  },
  liNavSelected: {
    color: '#aaaaaa'
  }
});
