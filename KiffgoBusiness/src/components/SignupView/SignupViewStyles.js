// @flow
import { StyleSheet } from 'aphrodite';
import { Images, Colors } from '../../theme';

export default StyleSheet.create({
  paymentSec: {
    position: ' absolute',
    left: ' 0',
    right: ' 0',
    bottom: ' 0',
    top: ' 0',
    width: '100%',
    height: '100%',
    background: '#42424282',
    display: ' flex',
    justifyContent: ' center',
    alignItems: ' center'
  },
  paymentWrap: {
    maxWidth: '571px',
    minWidth: '571px',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    padding: '50px 50px'
  },
  heading20: {
    fontSize: '20px',
    position: 'relative',
    color: Colors.greyish,
    ':before': {
      content: "''",
      backgroundImage: `url(${Images.cardImg})`,
      width: '20px',
      height: '20px',
      display: 'block',
      backgroundSize: 'cover',
      left: '80px',
      position: 'absolute',
      bottom: '2px'
    }
  },
  para: {
    fontSize: '14px',
    color: Colors.greyish
  },
  para1: {
    fontSize: '10px',
    color: Colors.greyish
  },
  stripeImage: {
    width: '68px',
    height: '28px'
  },
  formWrapper: {
    borderRadius: '4px',
    border: '1px solid rgb(231, 231, 231)',
    backgroundColor: ' rgb(255, 255, 255)',
    display: 'block',
    minHeight: '43px',
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    marginTop: '15px'
  },
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
  signinBgColor: {
    // backgroundColor: Colors.lightGreen,
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
      padding: '29px 11px'
    }
  },
  signinWraper: {
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
      height: '950px'
    },
    '@media (max-width: 600px)': {
      padding: '0 12px',
      justifyContent: 'flex-start'
    }
  },
  signinHeadContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '0 0 0 45px',
    '@media (max-width: 767px)': {
      padding: '0 0 0 10px'
    },
    '@media (max-width: 600px)': {
      margin: '30px auto'
    }
  },
  signinHead: {
    color: Colors.kgGreen,
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: 10
  },
  signinSubHead: {
    color: `${Colors.text.titleColorTwo}`,
    fontWeight: 'bold',
    fontSize: 27
  },
  progressBar: {
    marginTop: 35,
    display: 'flex',
    alignItems: 'stretch',
    listStyle: 'none',
    padding: 0,
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      marginTop: 15
    }
  },
  liSpan: {
    '@media (max-width: 600px)': {
      display: 'none'
    }
  },
  greyDotsOne: {
    '@media (max-width: 600px)': {
      margin: 0,
      display: 'flex',
      // position: 'relative',
      ':before': {
        content: "''",
        width: 14,
        height: 14,
        background: '#cdcdcd',
        position: 'absolute',
        display: 'inline-block',
        borderRadius: 140,
        left: '73%',
        bottom: '-2px'
      }
    }
  },
  greyDotsTwo: {
    '@media (max-width: 600px)': {
      margin: 0,
      display: 'flex',
      // position: 'relative',
      ':before': {
        content: "''",
        width: 14,
        height: 14,
        background: '#cdcdcd',
        position: 'absolute',
        display: 'inline-block',
        borderRadius: 140,
        left: '83%',
        bottom: '-2px'
      }
    }
  },
  greyDotsThree: {
    '@media (max-width: 600px)': {
      marginLeft: 0,
      display: 'flex',
      // position: 'relative',
      ':before': {
        content: "''",
        width: 14,
        height: 14,
        background: '#cdcdcd',
        position: 'absolute',
        display: 'inline-block',
        borderRadius: 140,
        left: '93%',
        bottom: '-2px'
      }
    }
  },
  progressBarList: {
    fontSize: 12,
    color: '#cdcdcd',
    position: 'relative',
    '@media (max-width: 600px)': {
      marginBottom: 35,
      marginLeft: 30
      // ':before': {
      //   content: "''",
      //   width: 14,
      //   height: 14,
      //   background: '#cdcdcd',
      //   position: 'absolute',
      //   left: 0,
      //   display: 'inline-block',
      //   borderRadius: 140,
      //   left: '-19px',
      // },
      // ':after': {
      //   content: "''",
      //   display: 'block',
      //   width: 30,
      //   height: 2,
      //   right: '-40px',
      //   background: '#cdcdcd',
      //   position: 'absolute',
      //   top: '42%',
      //   margin: '0 auto 0 3px',
      // },
    },
    '@media (min-width: 601px)': {
      ':last-child': {
        marginRight: 0
      },
      margin: '0 36px',
      ':before': {
        content: "''",
        width: 14,
        height: 14,
        background: '#cdcdcd',
        position: 'absolute',
        left: 0,
        display: 'inline-block',
        borderRadius: 140,
        left: '-19px'
      },
      ':after': {
        content: "''",
        display: 'block',
        width: 30,
        height: 2,
        right: '-40px',
        background: '#cdcdcd',
        position: 'absolute',
        top: '42%',
        margin: '0 auto 0 3px'
      },
      ':last-child': {
        ':after': {
          display: 'none'
        }
      }
    }
  },
  progressBarListSelected: {
    fontSize: 12,
    color: Colors.bgGreen,
    position: 'relative',
    '@media (max-width: 600px)': {
      marginBottom: 0,
      ':before': {
        content: "''",
        width: 14,
        height: 14,
        background: Colors.bgGreen,
        position: 'absolute',
        display: 'inline-block',
        borderRadius: 140,
        left: '-19px'
      }
    },
    '@media (min-width: 601px)': {
      ':last-child': {
        marginRight: 0
      },
      margin: '0 36px',
      ':before': {
        content: "''",
        width: 14,
        height: 14,
        background: Colors.bgGreen,
        position: 'absolute',
        display: 'inline-block',
        borderRadius: 140,
        left: '-19px'
      },
      ':after': {
        content: "''",
        width: 30,
        height: 2,
        right: '-40px',
        background: Colors.bgGreen,
        position: 'absolute',
        top: '42%',
        margin: '0 auto 0 3px'
      },
      ':last-child': {
        ':after': {
          display: 'none'
        }
      }
    }
  },
  formContainer: {
    padding: '45px 45px 20px',
    '@media (max-width: 600px)': {
      padding: '10px'
    }
  },
  personalInfo: {},
  companyInfo: {},
  verifyCode: {},
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
  signinBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '@media (max-width: 767px)': {
      flexDirection: 'column'
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  },
  signinText: {
    textDecoration: 'underline',
    color: Colors.bgGreen,
    fontWeight: 'bold',
    '@media (max-width: 767px)': {
      margin: '20px auto'
    }
  },
  prevBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  previousBtn: {
    color: Colors.kgGreen,
    background: Colors.white,
    borderRadius: 23,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.14)',
    width: 200,
    border: 'none',
    fontWeight: 700,
    padding: '12px 29px',
    '@media (max-width: 767px)': {
      marginBottom: 20
    },
    '@media (max-width: 600px)': {
      marginBottom: 15
    }
  },
  nextBtn: {
    color: Colors.white,
    background: Colors.kgGreen,
    width: 200,
    borderRadius: 23,
    border: 'none',
    padding: '12px 29px',
    fontWeight: 700,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.14)',
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },
  SelectedlistMarginLeftZero: {
    '@media (max-width: 600px)': {
      marginLeft: 30
    }
  },
  SelectedlistMarginLeftOne: {
    '@media (max-width: 600px)': {
      marginLeft: 50
    }
  },
  SelectedlistMarginLeftTwo: {
    '@media (max-width: 600px)': {
      marginLeft: 70
    }
  },
  SelectedlistMarginLeftThree: {
    '@media (max-width: 600px)': {
      marginLeft: 90
    }
  },
  prevListHide: {
    '@media (max-width: 600px)': {
      display: 'none'
    }
  }
});
