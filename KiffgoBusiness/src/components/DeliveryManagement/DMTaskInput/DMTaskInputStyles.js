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
  taskDate: {
    fontSize: '12px',
    opacity: '0.6',
    marginTop: '10px',
    marginBottom: '30px'
  },
  editTaskHeading: {
    fontSize: '16px'
  },
  deleteButton: {
    width: '300px',
    fontSize: '14px',
    height: '30px'
  },
  driverListingWrapper: {
    border: 'solid 1px #7b7b7b',
    padding: '10px',
    borderRadius: '10px',
    paddingTop: '15px'
  }
});
