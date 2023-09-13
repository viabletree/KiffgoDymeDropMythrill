// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../../theme';

export default StyleSheet.create({
  counterContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    '@media (max-width: 768px)': {
      paddingLeft: '0px',
      paddingRight: '0px'
    },
    '@media (max-width: 520px)': {
      flexDirection: 'column'
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
  firstImage: {
    height: '50px',
    // margin: '0 45px'
    '@media (max-width: 768px)': {
      maxWidth: '150px',
      height: '60px',
      marginTop: 20
    }
  },
  counterColor: {
    color: `${Colors.text.driverApp}`,
    fontSize: '40px',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      marginTop: '30px',
      fontSize: '25px'
    }
  },
  lowerText: {
    color: `${Colors.text.quaternary}`,
    fontSize: '14px',
    marginTop: '5px',
    fontWeight: 'normal',
    '@media (max-width: 768px)': {
      fontSize: '10px'
    }
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
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
    paddingBottom: '20px',

    // padding-left: 150px;
    // padding-right: 150px;
    // padding-top: 20px;
    // padding-bottom: 20px;

    '@media (max-width: 992px)': {},
    '@media (max-width: 767px)': {}
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
    lineHeight: '1.1 !important',
    width: '100%',
    maxWidth: '390px'
  },
  madeLondonContainer: {
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    marginBottom: '25px'
  },
  madeLondonText: {
    fontSize: '1em',
    color: `${Colors.text.titleColorTwo}`
  },
  rocketIcon: {
    marginLeft: '5px'
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
  sendBtn: {
    border: '1px solid transparent',
    marginTop: '10px',
    borderRadius: 23,
    height: 40,
    width: 214,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    color: Colors.white,
    fontWeight: 'bold',
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
  imageWrapper: {
    marginRight: '45px',
    marginLeft: '45px',
    alignItems: 'center',
    '@media (max-width: 980px)': {
      marginRight: '0',
      marginLeft: '0'
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'unset'
    }
  },
  partners: {
    fontSize: '20px',
    color: `${Colors.text.quaternary}`,
    marginRight: '10px',
    '@media (max-width: 768px)': {
      alignSelf: 'center'
    }
  },
  extra: {
    backgroundColor: 'white',
    '@media (max-width: 768px)': {}
  },
  extraAgain: {
    backgroundColor: 'white'
  }
});
