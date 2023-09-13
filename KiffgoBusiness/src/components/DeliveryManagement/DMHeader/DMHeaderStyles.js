// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_HEADER_HEIGHT } from '../../../constants';

export default StyleSheet.create({
  logoStyle: {
    width: '80px',
    height: '20px',
    marginTop: 10,
    marginLeft: 10
  },
  DMHeader: {
    background: Colors.outerSpace,
    color: Colors.white,
    padding: '15px 50px 15px 10px',
    height: `${DM_HEADER_HEIGHT}px`,
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0
  },
  linkTag: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: Colors.white,
    borderTop: '2px solid transparent',
    padding: '3px 20px',
    marginRight: '15px',
    transition: '.2s linear',
    position: 'relative'
  },
  tools: {
    position: 'relative'
  },
  toolsInner: {},
  toolWrapper: {
    borderRadius: '50%',
    // backgroundImage: 'linear-gradient(to bottom, #5edea8, #44a079)',
    width: '30px',
    height: '30px',
    margin: '0 8px',
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.1s linear',
    color: Colors.white,
    opacity: 0.7,
    ':hover': {
      opacity: 1
    }
  },
  toolImg: {
    width: '21px',
    height: '21px'
  },
  addTaskIcon: {
    width: '18px',
    height: '18px'
  },
  activeTabStyle: {
    position: 'relative',
    color: Colors.bgGreen,
    fontWeight: 'bold',
    ':before': {
      content: "' '",
      position: 'absolute',
      top: '-9px',
      left: 0,
      right: 0,
      width: '100%',
      height: '3px',
      color: Colors.bgGreen,
      borderTop: `3px solid ${Colors.bgGreen}`,
      borderRadius: '3px'
    }
  },
  profileName: {
    fontSize: '14px',
    fontWeight: 800
  }
});
