// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: 1360,
    margin: '0 auto 0',
    '@media (max-width: 1400px)': {
      maxWidth: 1140,
      margin: '0px auto 40px'
    }
  },
  submitBtn: {
    backgroundColor: `${Colors.bgGreen}`,
    borderRadius: '5px',
    position: 'relative',
    border: 'none',
    width: '39px',
    height: '40px',
    marginTop: '1px',
    cursor: 'pointer',
    ':before': {
      content: "''",
      position: 'absolute',
      backgroundImage: `url(${Images.send})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      width: '25px',
      height: '25px',
      left: '0',
      right: '0',
      margin: 'auto',
      top: '0',
      bottom: '0'
    },
    '@media (max-width: 767px)': {
      width: '45px',
      height: '45px',
      float: 'right',
      borderRadius: '12px'
    }
  },
  inputControl: {
    padding: '1.3em 1em',
    borderRadius: '10px',
    border: 'solid 1px #989898',
    height: 41,
    '::placeholder': {
      color: '#cdcdcd'
    }
  },
  textArea: {
    padding: '1.3em 1em',
    borderRadius: '10px',
    border: 'solid 1px #989898',
    height: 150,
    '::placeholder': {
      color: '#cdcdcd'
    }
  },
  contactImg: {
    marginTop: '0px',
    maxWidth: '90%',
    width: '100%',
    '@media (max-width: 1280px)': {
      maxWidth: '90%'
    },
    '@media (max-width: 992px)': {
      display: 'none'
    }
  },
  selectControl: {
    padding: '8px 10px',
    height: 41,
    borderRadius: '10px',
    border: 'solid 1px #989898',
    color: Colors.black,
    opacity: 0.8,
    ':after': {
      borderColor: '#fff transparent'
    }
  },
  contactSec: {
    marginTop: 100,
    '@media (max-width: 767px)': {
      marginTop: 50
    }
  },
  sendBtn: {
    border: '1px solid transparent',
    borderRadius: 23,
    height: 45,
    width: 200,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    color: Colors.white,
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },
  formSubmitBtnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
