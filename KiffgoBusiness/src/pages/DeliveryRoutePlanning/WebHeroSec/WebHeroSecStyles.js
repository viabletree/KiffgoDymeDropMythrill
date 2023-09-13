// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: 1360,
    margin: '0 auto',
    '@media (max-width: 1400px)': {
      maxWidth: 1140,
      margin: '0px auto 40px'
    }
  },
  buttonOne: {
    width: '100%',
    maxWidth: 300,
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
    cursor: 'pointer',
    '@media (max-width: 767px)': {
      marginTop: 34
    }
  },
  desription: {
    lineHeight: '1.39em',
    '@media (max-width: 991px)': {
      paddingRight: 0
    }
  },
  headerGraphics: {
    width: '60%',
    // zIndex: '-999',
    position: 'absolute',
    bottom: 0,
    right: 0,
    '@media (max-width: 1280px)': {
      width: '57%'
    },
    '@media (max-width: 1024px)': {
      width: '55%'
    },
    '@media (max-width: 980px)': {
      position: 'static',
      width: '100%',
      top: 70
    }
  },
  heroSection: {
    position: 'relative',
    height: 'calc(100vh - 160px)',
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
    width: '100%',
    fontSize: '35px',
    fontWeight: 600,
    lineHeight: '42px'
  },
  madeLondonContainer: {
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    marginBottom: '25px'
  },
  madeLondonText: {
    fontSize: '1.2em',
    color: `${Colors.text.titleColorTwo}`
  },
  rocketIcon: {
    marginRight: '14px',
    height: '34px',
    width: '47px'
  },
  heroBtnContainer: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '15px',
    '@media (max-width: 767px)': {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    '@media (max-width: 600px)': {
      fontSize: 15
    }
  },
  mt5: {
    marginTop: '30px',
    '@media (max-width: 767px)': {
      marginTop: '0px'
    }
  },
  inputControl: {
    padding: '1.3em 1em',
    border: ' 2px solid #6DDEC6',
    borderRadius: '10px',
    height: 41,
    '::placeholder': {
      color: '#cdcdcd'
    }
  },
  selectorPadding: {
    padding: ' 8px 10px '
  },
  sendBtn: {
    border: '1px solid transparent',
    marginTop: '10px',
    borderRadius: 23,
    height: 45,
    width: 210,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    color: Colors.white,
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },

  requestDemoBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid transparent',
    marginTop: '10px',
    borderRadius: 23,
    height: 45,
    width: 210,
    color: Colors.white,
    fontWeight: 'bold',
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    backgroundImage: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },

  marginRight: {
    marginRight: '20px',
    '@media (max-width: 767px)': {
      marginRight: '0px'
    }
  },
  marginRightMessage: {
    marginRight: '200px',
    '@media (max-width: 767px)': {
      marginRight: '0px'
    }
  },
  formWrapper: {
    '@media (max-width: 1400px)': {
      width: 660
    },
    '@media (max-width: 980px)': {
      width: '100%'
    }
  },
  marginRightMaxWidth: {
    marginRight: 20,
    '@media (max-width: 1400px)': {
      marginRight: 35
    },
    '@media (max-width: 474px)': {
      marginRight: 0
    }
  },
  actionBtnWrapper: {
    '@media (max-width: 767px)': {
      justifyContent: 'center'
    },
    '@media (max-width: 474px)': {
      flexDirection: 'column'
    }
  }
});
