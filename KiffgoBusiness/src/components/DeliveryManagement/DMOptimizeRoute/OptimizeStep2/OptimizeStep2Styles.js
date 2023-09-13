// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../theme';

export default StyleSheet.create({
  wrapper: {
    color: Colors.white
  },
  subHeading: {
    fontSize: '12px',
    opacity: '0.6',
    marginTop: '10px',
    marginBottom: '30px'
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  innerWrapper: {
    border: '1px solid',
    padding: '10px',
    borderRadius: '7px'
  },
  fixBtn: {
    border: 'none',
    background: 'none',
    color: Colors.kgGreen,
    textDecoration: 'underline',
    fontSize: '15px'
  },
  toggleBtnText: {
    fontSize: '17px'
  },
  errorHeading: {
    color: Colors.red,
    fontWeight: 'bold'
  },
  warningsHeading: {
    color: Colors.brightYellow,
    fontWeight: 'bold'
  }
});
