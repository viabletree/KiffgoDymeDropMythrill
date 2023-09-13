// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../constants';

export default StyleSheet.create({
  wrapper: {
    color: Colors.white
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  para: {
    lineHeight: '25px',
    fontSize: '15px'
  },
  scheduleWrapper: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    backgroundColor: '#403f3f',
    borderRadius: '8px',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '5px'
  },
  timeWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  },
  imgDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timeField: {
    width: '90px'
  },
  titleWrapper: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginLeft: '16px'
  },
  smallFont: {
    fontSize: '13px'
  },
  mTopMinusTen: {
    marginTop: '-8px',
    marginBottom: '5px'
  },
  textField: {
    padding: '0px'
  },
  visibleTaskIcon: { width: '12px', height: '12px' },
  topHeading: {
    fontWeight: 'bold'
  },
  contentText: {
    fontSize: '12px',
    fontStyle: 'italic'
  }
});
