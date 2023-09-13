// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_SIDE_BAR_WIDTH, DM_HEADER_HEIGHT } from '../../../constants';

export default StyleSheet.create({
  DMSideBar: {
    // height: `calc(100vh - ${DM_HEADER_HEIGHT})`,
    padding: '30px 0 40px 0',
    width: `${DM_SIDE_BAR_WIDTH}px`,
    backgroundColor: Colors.outerSpace,
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'fixed',
    top: `${DM_HEADER_HEIGHT}px`,
    left: 0,
    bottom: 0
  },
  DMSideBarInner: {},
  sideBarOption: {
    width: '46px',
    height: '46px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '50%',
    transition: '.1s linear',
    ':hover': {
      opacity: 0.6
    }
  },
  optionImg: {
    width: '20px',
    height: '20px',
    fontWeight: 800
  },
  chatCounter: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: 'red',
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    top: '2px',
    right: '5px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
