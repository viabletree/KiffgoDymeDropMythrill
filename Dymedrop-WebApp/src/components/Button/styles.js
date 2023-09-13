// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    /* display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    margin: "auto" */
  },
  buttonStyle: {
    backgroundColor: Colors.bgGreen,
    color: Colors.white,
    fontSize: 16,
    borderRadius: 4,
    border: 0,
    fontWeight: 700,
    ':disabled': {
      backgroundColor: '#cccccc',
      color: '#666666',
      fontWeight: '700'
    },
    position: 'relative'
  },
  title: {
    padding: '12px 29px'
  },
  isLoading: {
    ':disabled': {
      backgroundColor: Colors.bgGreen,
      color: Colors.white
    }
  },
  loadingOverlay: {
    backgroundColor: 'rgba(1, 1, 1, 0.5)',
    // backgroundColor: "red",
    borderRadius: 4,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 23,
    height: '100%',
    '@media (max-width: 600px)': {
      top: 14
    }
  },
  loadingOverlayTwo: {
    backgroundColor: 'rgba(1, 1, 1, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    position: 'absolute',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 0,
    borderRadius: 23,
    height: '100%',
    maxHeight: '45px',
    width: '100%'
  },
  positionRelative: {
    position: 'relative'
  }
});
