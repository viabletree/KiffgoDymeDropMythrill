// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: '10px'
  },
  labelStyle: {
    fontSize: '13px',
    color: Colors.white,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '600'
  },
  inputStyle: {
    borderRadius: '8px',
    border: 'solid 1px #7b7b7b',
    backgroundColor: 'transparent',
    display: 'block',
    minHeight: 31,
    // marginTop: 6,
    width: '100%',
    outline: 'none',
    padding: '0px 10px ',
    fontSize: '14px',
    color: Colors.white
  },
  textAreaStyle: {
    minHeight: '70px',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  withIcon: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    left: '10px',
    bottom: '9px',
    fontSize: '14px'
  },
  inputWithIcon: {
    paddingLeft: '35px'
  },

  inputWithFlagIcon: {
    paddingLeft: '40px'
  },
  flatIcon: {
    height: '20px'
  },
  flatIconWrapper: {
    position: 'absolute',
    width: '35px',
    height: '31px',
    textAlign: 'center',
    padding: '6px 4px',
    borderRight: 'solid 1px #7b7b7b'
  },
  errorIcon: {
    color: Colors.red2,
    fontSize: '15px'
  },
  errorIconWrapper: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '6px',
    bottom: '4px',
    cursor: 'pointer'
  },
  errorPadding: {
    paddingRight: '30px'
  },
  disabledContainer: {
    opacity: 0.5
  },
  phoneInput: {
    borderRadius: '8px',
    border: 'solid 1px #7b7b7b',
    backgroundColor: 'transparent',
    display: 'block',
    width: '100%',
    outline: 'none',
    fontSize: '14px',
    color: Colors.white
  },
  phoneDropDown: {
    border: 'solid 1px #7b7b7b',
    backgroundColor: Colors.mineShafta,
    display: 'block',

    outline: 'none',
    fontSize: '12px',
    color: Colors.white
  },
  phoneDropDownButton: {
    border: 'solid 1px #7b7b7b',
    borderRight: 'solid 0px #7b7b7b',
    borderRadius: '8px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    backgroundColor: Colors.mineShafta
  }
});
