// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: 1360,
    margin: '0 auto'
  },
  buttonOne: {
    height: '42px',
    padding: '0 20px',
    borderRadius: '23px',
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    background: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    color: Colors.white,
    fontWeight: '600',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    border: 'none',
    cursor: 'pointer'
  },
  giftIcon: {
    marginRight: 9,
    width: 13,
    height: 17
  },
  buttonTwo: {
    height: '42px',
    padding: '14px 40px',
    borderRadius: '23px',
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.14)',
    background: Colors.white,
    color: Colors.bgGreen,
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    position: 'relative',
    border: 'none',
    cursor: 'pointer'
  },
  desription: {
    lineHeight: '1.9em',
    fontSize: '15px',
    '@media (max-width: 992px)': {
      maxWidth: 600
    }
  },
  headerGraphics: {
    width: '100%',
    // zIndex: '-999',
    // position: 'absolute',
    bottom: 0,
    right: 0,
    top: 10,

    '@media (max-width: 992px) and (min-width: 981px)': {
      top: 80,
      width: '70%'
    },
    '@media (max-width: 980px)': {
      position: 'static',
      width: '70%',
      top: 70
    },
    '@media (max-width: 600px)': {
      position: 'static',
      width: '100%',
      top: 70
    }
  },
  heroSection: {
    position: 'relative',
    height: 'auto',

    paddingBottom: 0,

    '@media (max-width: 992px)': {
      height: 'auto',
      // paddingBottom: 850,
      paddingTop: '60px'
    },

    '@media (max-width: 767px)': {
      // paddingBottom: 400,
      paddingTop: '0'
    }
  },
  HeightVhs: {
    '@media (max-width: 992px)': {
      height: 'auto !important'
    }
    /* height: '85vh' */
  },
  btnDesign: {
    fontWeight: '700',
    position: 'relative'
  },
  lineHeight12: {
    lineHeight: '1.2em !important',
    width: '100%',
    maxWidth: '390px'
  },
  madeLondonContainer: {
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    marginBottom: '25px'
  },
  rocketIcon: {
    marginLeft: '5px'
  },
  heroBtnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '15px',
    '@media (max-width: 767px)': {
      justifyContent: 'center',
      marginBottom: 50
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
    marginTop: 70
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
