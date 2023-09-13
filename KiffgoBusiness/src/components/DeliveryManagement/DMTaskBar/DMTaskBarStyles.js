// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_HEADER_HEIGHT, DM_TASK_BAR_WIDTH } from '../../../constants';

export default StyleSheet.create({
  DMTaskBar: {
    height: 'calc(100vh - 78px)',
    padding: '0 0 10px 0',
    width: `${DM_TASK_BAR_WIDTH}px`,
    backgroundColor: Colors.outerSpace,
    overflowY: 'hidden',
    overflowX: 'hidden',
    position: 'fixed',
    top: `${DM_HEADER_HEIGHT}px`,
    right: 0,
    bottom: 0,
    color: '#fff',
    paddingRight: '20px'
  },
  DMTaskBarWrapper: {
    padding: '10px 0px 10px 10px',
    maxHeight: '100%',
    overflow: 'auto'
  },

  singleTask: {
    cursor: 'pointer',
    padding: '4px 10px 2px 10px',
    borderRadius: 5,
    transition: '.1s linear',
    flex: 1,
    overflow: 'hidden',
    marginBottom: '10px',
    borderBottom: '2px solid transparent',
    ':hover': {
      background: Colors.mineShafta
    }
  },
  activeSingleTask: {
    background: '#fff',
    ':hover': {
      background: '#fff'
    }
  },
  taskIcon: {
    width: '13px',
    height: '13px'
  },
  tasketaIcon: {
    width: '12px',
    height: '12px',
    marginRight: '5px'
  },
  alto2Color: {
    color: Colors.alto2
  },
  blackColor: {
    color: Colors.black
  },
  taskDate: {
    margin: '7px 0 7px 0'
  },
  taskAuthor: {
    fontStyle: 'italic'
  },
  emptyState: {
    color: Colors.white,
    fontSize: '14px',
    textAlign: 'center'
  },
  sectionWrapper: {
    position: 'relative'
  },
  sectionTitleWrapper: {
    flex: 1,
    display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  etaDiv: {
    display: 'flex',
    alignItems: 'center'
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '10px'
  },
  sectionTitleText: {
    fontSize: '14px'
  },
  sectionSubTitleText: {
    fontSize: '12px',
    marginTop: '3px'
  },
  sectionHeaderWrapper: {
    padding: '5px',
    borderRadius: '3px',
    cursor: 'pointer',
    height: '40px',
    ':hover': {
      background: Colors.mineShafta
    }
  },
  sectionHeaderWrapperSelected: {
    borderRadius: '3px',
    backgroundColor: Colors.white,
    ':hover': {
      background: Colors.white
    }
  },
  sectionTitleTextSelected: {
    color: Colors.black
  },
  sectionSubTitleTextSelected: {
    color: Colors.black
  },
  sectionIconSelected: {
    color: Colors.black
  },
  sectionInnerWrapper: {
    border: '2px solid transparent',
    borderRadius: '0 0 3px 3px',
    padding: '10px',
    paddingBottom: '0px'
  },
  sectionInnerWrapperSelected: {
    borderColor: 'white'
  },
  sectionHeaderWrapperExpended: {
    borderRadius: '3px 3px 0 0'
  },
  sectionIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '20px'
  },
  driverHeaderWrapper: {
    backgroundColor: '#242323',
    minHeight: '40px',
    padding: '10px 5px',
    borderRadius: '5px',
    marginBottom: '10px',
    alignItems: 'center',
    position: 'relative'
  },
  driverHeaderStatusIcon: {
    marginRight: '10px',
    width: '13px',
    height: '13px'
  },
  driverSectionWrapper: {
    backgroundColor: '#242323',
    marginBottom: '10px',
    borderRadius: '5px',
    position: 'relative'
  },
  driverTasklistWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  driverTaskItemWrapper: {
    display: 'flex'
  },
  driverTaskSequence: {
    fontSize: '12px',
    marginRight: '10px',
    paddingTop: '20px'
  },
  driverSectionIconWrapper: {
    height: '28px',
    textAlign: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  taskTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    paddingRight: '10px',
    maxWidth: '240px'
  },
  taskTitleActive: {
    color: Colors.mineShaft,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'inline-block'
  },
  taskDetailWrapper: {
    display: 'grid',
    flex: '1',
    marginLeft: '7px'
  },
  sectionLoading: {
    background: Colors.tintedBlack,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overedSingleTask: {
    borderBottom: '2px solid',
    borderColor: Colors.bittersweet
  },

  recipientEtaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  redText: {
    color: 'red'
  },
  someStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  pickUpIcon: {
    marginBottom: '3px',
    width: '13px',
    height: '13px'
  }
});
