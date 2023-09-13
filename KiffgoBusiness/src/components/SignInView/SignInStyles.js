// @flow
import { StyleSheet } from 'aphrodite';
import { Images, Colors } from '../../theme';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingTop: '65px',
    paddingBottom: '65px',
    paddingLeft: '50px',
    paddingRight: '50px',
    backgroundImage: `url(${Images.abstract})`,
    backgroundPosition: 'right -2px bottom -54px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40% auto',
    '@media (max-width: 560px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  },
  formWrapper: {
    marginTop: '80px',
    marginBottom: '65px'
  },
  loginBgColor: {
    display: 'flex',
    borderRadius: 74,
    backgroundImage:
      'linear-gradient(61deg, #5edea8 15%, #6de0bd 53%, #77deda 99%)',
    height: '100%',
    '@media (max-width: 767px)': {
      height: '100%'
    },
    '@media (max-width: 600px)': {
      borderRadius: '0px',
      padding: '0 11px'
    }
  },
  loginWraper: {
    width: '900px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    height: 512,
    margin: '70px auto',
    backgroundColor: Colors.white,
    border: 'solid 1px #fff',
    borderRadius: '20px',
    boxShadow: '0 8px 20px 0 rgba(255, 255, 255, 0.45)',
    '@media (max-width: 767px)': {
      height: '771px'
    },
    '@media (max-width: 600px)': {
      padding: '0 12px'
    }
  },
  loginHeadContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingLeft: 45,
    '@media (max-width: 767px)': {
      padding: '45px 0 0 10px'
    }
  },
  loginHead: {
    color: Colors.kgGreen,
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: 10
  },
  loginSubHead: {
    color: `${Colors.text.titleColorTwo}`,
    fontWeight: 'bold',
    fontSize: 30
  },
  fomrContainer: {
    padding: '0 45px',
    '@media (max-width: 600px)': {
      padding: '0 10px'
    }
  },
  labelForm: {
    color: `${Colors.text.titleColorTwo}`,
    fontWeight: 600
  },
  passwordLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  forgotPswd: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  inputControl: {
    padding: '1.3em 1em',
    borderRadius: '10px',
    border: 'solid 1px #989898',
    '::placeholder': {
      color: '#cdcdcd'
    }
  },
  loginBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  },
  loginText: {
    textDecoration: 'underline',
    color: Colors.bgGreen,
    fontWeight: 'bold'
  },
  loginBtn: {
    color: Colors.white,
    width: 200,
    borderRadius: 23,
    border: 'none',
    padding: '12px 29px',
    fontWeight: 700,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    background: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  }
});
