// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  footerButton: {
    border: 'none',
    color: Colors.white,
    padding: '0px 15px',
    borderRadius: '5px',
    height: '30px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    fontSize: '15px',
    ':disabled': {
      outline: 'none',
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  },
  greyButton: {
    background: Colors.grey4,
    color: Colors.white
  },
  closeIcon: {
    marginRight: '10px'
  },
  childViewWithFooter: {
    maxHeight: 'calc(100vh - 146px)'
  },
  contentContainer: {
    maxHeight: 'calc(100vh - 90px)',
    // overflow: 'scroll',
    paddingRight: '20px',
    paddingLeft: '20px',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  contentContainerOverRideOverFlow: {
    maxHeight: 'calc(100vh - 90px)',
    // overflow: 'scroll',
    paddingRight: '20px',
    paddingLeft: '20px',
    overflow: 'initial'
  },
  footeWrapper: {
    paddingTop: '15px',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#404040'
  },
  footeWrapperOverRideOverFlow: {
    paddingTop: '15px',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingBottom: '15px',
    display: 'flex',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    justifyContent: 'space-between',
    backgroundColor: '#404040'
  },
  whiteButton: {
    background: Colors.white,
    color: Colors.codGrays
  },
  loaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0000008c'
  },
  parentWrapper: {
    position: 'relative'
  },
  footerGapping: {
    width: '100%',
    marginBottom: '20px'
  }
});
