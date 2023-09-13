// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  container: {},
  labelStyle: {
    fontSize: '14px',
    color: Colors.blackish,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: '600'
  },
  inputStyle: {
    borderRadius: '4px',
    border: 'solid 1px #e7e7e7',
    backgroundColor: '#ffffff',
    display: 'block',
    minHeight: 43,
    // marginTop: 6,
    width: '100%',
    outline: 'none',
    padding: '10px',
    fontSize: '14px'
  },
  textAreaStyle: {
    minHeight: 83
  },
  withIcon: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    left: '10px',
    maxWidth: '15px',
    maxHeight: '15px',
    top: 0,
    bottom: 0,
    margin: 'auto'
  },
  inputWithIcon: {
    paddingLeft: '35px'
  }
});
