// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../theme';

export default StyleSheet.create({
  railStyle: {
    position: 'absolute',
    width: '100%',
    height: 8,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  dayStyle: {
    fontSize: '14px',
    fontStyle: 'italic'
  },
  sliderWrapper: {
    padding: '0 10px',
    marginTop: '-12px'
  },
  sliderDayWrapper: {
    marginTop: '-22px',
    display: 'flex',
    justifyContent: 'center'
  }
});
