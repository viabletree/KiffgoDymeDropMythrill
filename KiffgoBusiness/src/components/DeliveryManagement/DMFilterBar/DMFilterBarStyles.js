// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../constants';

export default StyleSheet.create({
  filterWrapper: {
    backgroundColor: Colors.outerSpace,
    height: `${DM_FILTER_BAR_HEIGHT}px`,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: `${DM_SIDE_BAR_WIDTH + 10}px`,
    display: 'flex',
    alignItems: 'center'
  },
  filterBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    cursor: 'pointer'
  },
  filterBoxText: {
    color: Colors.white,
    fontSize: '13px',
    textDecoration: 'underline',
    padding: '14px 30px',
    height: `${DM_FILTER_BAR_HEIGHT}px`,
    display: 'flex',
    alignItems: 'center',
    ':hover': {
      backgroundColor: Colors.mineShaft
    }
  },
  filterModal: {
    position: 'absolute',
    bottom: `${DM_FILTER_BAR_HEIGHT}px`,
    width: 508,
    height: 430,
    backgroundColor: Colors.mineShaft,
    borderRadius: '8px',
    overflow: 'hidden',
    zIndex: 999,
    left: '85px'
  },
  filterModalSmallHeight: {
    height: 340
  },
  leftColumn: {
    width: 218,
    borderRight: '1px solid #666'
  },
  rightColumn: {
    width: 290
  },
  colOption: {
    display: 'flex',
    padding: '23px 0 23px 23px',
    alignItems: 'center',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: Colors.codGrays
    }
  },
  colOptionImg: {
    width: 22,
    height: 22,
    marginRight: '12px'
  },
  taskWrapper: {
    padding: '10px 15px',
    marginTop: 16
  },
  selectionBtn: {
    color: Colors.white,
    fontSize: '13px',
    marginLeft: '8px',
    cursor: 'pointer'
  },
  taskList: {
    padding: '8px 7px',
    cursor: 'pointer',
    color: Colors.white,
    ':hover': {
      backgroundColor: Colors.codGrays
    }
  },
  taskTitle: {
    color: Colors.white,
    fontSize: '13px',
    marginLeft: '10px',
    textTransform: 'uppercase'
  },
  notSelected: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    cursor: 'pointer'
  },
  taskIcon: {
    width: '20px',
    height: '20px'
  },

  delayText: {
    color: Colors.white,
    fontSize: '11px',
    textTransform: 'uppercase'
  },
  delayCheckbox: {
    width: '17px',
    height: '17px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    marginRight: 12
  },
  delayInput: {
    width: '47px',
    height: '24px',
    borderRadius: 0,
    border: 'none',
    fontSize: '12px',
    borderRadius: '3px',
    padding: '0 3px'
  },

  selectedFilterDetail: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    border: `solid 1px #676767`,
    backgroundColor: `#343434`,
    padding: '2px 15px',
    minWidth: '130px',
    marginLeft: '15px',
    cursor: 'pointer',
    position: 'relative'
  },
  dateTimeIcon: {
    width: '20px',
    height: '20px'
  },
  filterDetailBox: {
    color: Colors.white,
    marginLeft: '5px'
  },
  activeFilterModal: {
    backgroundColor: Colors.mineShaft
  },
  activeTab: {
    backgroundColor: Colors.codGrays
  },
  filterModalOverly: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#00000087 ',
    zIndex: 9
  },
  selectedState: {
    backgroundColor: Colors.bgGreen,
    border: `2px solid  ${Colors.white}`
  },
  activeDelayField: {
    backgroundColor: Colors.bgGreen,
    border: `3px solid ${Colors.white}`
  },
  disableBg: {
    backgroundColor: Colors.grey
  },
  paraWidth: {
    whiteSpace: 'nowrap',
    width: '130px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  delayWrapper: {
    padding: '0 13px'
  },
  taskIconSize: {
    width: 26,
    height: 26
  },

  calendarWrap: {
    padding: '0 17px'
  },
  noSelectionIcon: {
    opacity: 0.5
  },
  allDriveStatusIcon: {
    height: '15px'
  }
});
