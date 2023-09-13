// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../constants';

export default StyleSheet.create({
  wrapper: {
    color: Colors.white,
    width: '400px'
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  para: {
    lineHeight: '25px',
    fontSize: '15px'
  },
  imgDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  visibleTaskIcon: { width: '12px', height: '12px' },
  tasksHeading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  optionStyles: {
    color: Colors.vikings,
    fontWeight: '300',
    fontSize: '13px',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  singleTask: {
    cursor: 'pointer',
    padding: '6px 10px 4px 10px',
    borderRadius: 5,
    transition: '.1s linear',
    flex: 1,
    overflow: 'hidden',
    marginBottom: '10px',
    borderBottom: '2px solid transparent',
    backgroundColor: '#403f3f'
  },
  activeSingleTask: {
    background: '#fff',
    ':hover': {
      background: '#fff'
    }
  },
  someStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  taskIcon: {
    width: '13px',
    height: '13px'
  },
  taskDetailWrapper: {
    display: 'grid',
    flex: '1',
    marginLeft: '7px'
  },
  taskTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    paddingRight: '10px',
    maxWidth: '260px'
  },
  taskDate: {
    margin: '7px 0px'
  },
  alto2Color: {
    color: Colors.alto2
  },
  blackColor: {
    color: Colors.black
  },
  recipientEtaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskAuthor: {
    fontStyle: 'italic'
  },
  tempStyles: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
    fontSize: '12px'
  },
  overedSingleTask: {
    borderBottom: '2px solid',
    borderColor: Colors.bittersweet
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
  taskListWrapper: {
    position: 'relative'
  },
  checkbox: {
    cursor: 'pointer'
  },
  tasketaIcon: {
    width: '12px',
    height: '12px',
    marginRight: '5px'
  },
  noItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
  },
  driverTaskItemWrapper: {
    display: 'flex'
  },
  driverTaskSequence: {
    fontSize: '12px',
    marginRight: '10px',
    paddingTop: '20px'
  },
  pickUpIcon: {
    marginBottom: '3px',
    width: '13px',
    height: '13px'
  },
  etaDiv: {
    display: 'flex',
    alignItems: 'center'
  }
});
