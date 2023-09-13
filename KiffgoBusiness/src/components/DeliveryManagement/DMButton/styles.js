// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  container: {
    /* display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    margin: "auto" */
  },
  buttonStyle: {
    border: 'none',
    color: Colors.white,
    padding: '0px 15px',
    borderRadius: '9px',
    height: '36px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    ':disabled': {
      backgroundColor: '#cccccc',
      color: '#666666',
      fontWeight: '700'
    },
    position: 'relative'
  },

  /* isLoading: {
    ':disabled': {
      backgroundColor: Colors.bgGreen,
      color: Colors.white
    }
  }, */

  loaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0000008c'
  },
  whiteButton: {
    background: Colors.white,
    color: Colors.codGrays
  },
  greyButton: {
    background: Colors.grey4,
    color: Colors.white
  }
});
