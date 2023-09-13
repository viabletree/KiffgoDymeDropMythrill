// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';
import { DM_SIDE_BAR_WIDTH, DM_HEADER_HEIGHT } from '../../constants';

export default StyleSheet.create({
  adjuctSpace: {
    marginTop: `${DM_HEADER_HEIGHT}px`,
    marginLeft: `${DM_SIDE_BAR_WIDTH}px`,
    height: `calc(100vh - ${DM_HEADER_HEIGHT}px)`,
    background: Colors.outerSpace
  },
  fullscreenButton: {
    position: 'absolute',
    background: Colors.outerSpace,
    width: '55px',
    height: '37px',
    zIndex: '9',
    right: '0',
    top: '0',
    border: 'none',
    opacity: 0.7,
    ':hover': {
      opacity: 1
    }
  },
  fullscreenIcon: {
    color: Colors.white,
    fontSize: '20px'
  }
});
