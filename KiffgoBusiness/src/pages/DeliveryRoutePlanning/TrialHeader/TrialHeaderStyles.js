// @flow

import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../../theme';
// import { colors } from 'react-select/src/theme';

export default StyleSheet.create({
  container: {
    maxWidth: 1360,
    margin: '0 auto 0',
    '@media (max-width: 1400px)': {
      maxWidth: 1140,
      margin: '0px auto 40px'
    }
  },
  buttonOne: {
    padding: '14px 30px',
    backgroundColor: `${Colors.bgGreen}`,
    color: `${Colors.white}`,
    borderRadius: '8px',
    fontWeight: '700',
    '@media (max-width: 992px)': {
      backgroundColor: 'transparent',
      color: `${Colors.greyish}`,
      marginRight: '0 !important',
      padding: '12px 0',
      fontWeight: '600',
      fontSize: '26px'
    },
    '@media (max-width: 767px)': {
      fontSize: '22px'
    }
  },
  siteHeader: {
    position: 'relative',
    zIndex: '999'
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '50px 0 0px 0',
    '@media (max-width: 992px)': {
      padding: '10px 15px'
    }
  },
  collabeMenu: {
    width: '100%',
    '@media (max-width: 992px)': {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      left: '-700px',
      top: '0',
      bottom: '0',
      backgroundColor: `${Colors.white}`,
      width: '300px',
      padding: '0  30px 15px',
      boxShadow: '10px 0px 16px 0 #00000014',
      transition: '.3s linear all'
    }
  },
  showMenu: {
    left: '0',
    zIndex: '999999',
    overflowY: 'scroll'
  },
  collabeMenuWrap: {
    position: 'fixed',
    zIndex: '1000',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
    opacity: '1',
    transition: 'all .4s ease-in ',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0'
  },

  navBar: {
    position: 'static ',
    width: '80%',
    '@media (max-width: 992px)': {
      position: 'absolute',
      width: '96%',
      height: '40px',
      padding: '0',
      top: '27px',
      justifyContent: 'flex-end'
    }
  },
  hamburgerMenu: {
    display: 'none',
    '@media (max-width: 992px)': {
      position: 'absolute',
      left: '20px',
      display: 'block',
      cursor: 'pointer'
    }
  },
  hamburgerIcon: {
    height: '2px',
    backgroundColor: `${Colors.kgGreen}`,
    display: 'block',
    marginBottom: '5px',
    ':nth-child(1) ': {
      width: '24px'
    },
    ':nth-child(2) ': {
      width: '20px'
    },
    ':nth-child(3) ': {
      width: '16px'
    }
  },
  closeMenu: {
    display: 'none',
    '@media (max-width: 992px)': {
      display: 'block',
      position: 'absolute',
      right: '15px',
      top: '15px',
      cursor: 'pointer'
    }
  },
  NavbarUl: {
    '@media (min-width: 992px)': {
      alignItems: 'center'
    },
    '@media (max-width: 992px)': {
      width: '100%',
      marginTop: '18px',
      lineHeight: '25px'
    }
  },

  siteLogoImg: {
    maxWidth: '150px',
    '@media (max-width: 992px)': {
      maxWidth: '150ppx'
    },
    '@media (max-width: 767px)': {
      maxWidth: '170px'
    },
    '@media (max-width: 400px)': {
      maxWidth: '140px'
    }
  },
  siteLogoWrap: {
    flex: '0 0 20%',
    marginLeft: 15
  },
  navLink: {
    color: `${Colors.greyish}`,
    cursor: 'pointer',
    fontWeight: '600',
    '@media (max-width: 992px)': {
      padding: '14px 0',
      fontSize: '26px',
      fontWeight: '600'
    },
    '@media (max-width: 767px)': {
      fontSize: '22px'
    }
  },
  borderBottom: {
    '@media (max-width: 991px)': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.13)'
    }
  },
  NavItem: {
    marginRight: 34,
    '@media (max-width: 991px)': {
      padding: '15px 0',
      marginRight: 0
    }
  },
  navAnchorTag: {
    color: `${Colors.text.titleColorTwo}`,
    ':hover': {
      textDecoration: 'none',
      textShadow: '0 0 1px black'
    }
  },
  navDropDownAnchorTag: {
    color: `${Colors.text.titleColorTwo}`,
    display: 'block',
    paddingLeft: 20,
    ':hover': {
      textDecoration: 'none',
      textShadow: '0 0 1px black'
    }
  },
  ResSiteLogoImg: {
    display: 'none',
    width: '100px',
    marginTop: 20,
    '@media (max-width:992px)': { display: 'block' },
    '@media (max-width:767px)': { maxWidth: '150px' }
  },
  CloseBtn: {
    width: '20px',
    cursor: 'pointer',
    marginTop: '13px',
    marginRight: '10px'
  },

  // /* intro section  child pages*/
  introSec: {
    position: 'relative',
    padding: '140px 70px 45px',
    borderRadius: '6px',
    backgroundImage: `url(${Images.childBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: '60px',
    ':before': {
      content: "' '",
      backgroundColor: '#36e79db8',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'block',
      borderRadius: '6px'
    }
  },
  titleHeading: {
    position: 'relative',
    zIndex: '999'
  },

  // driver landing page

  driverSiteLogoWrap: {
    '@media (max-width: 992px)': {
      marginLeft: 0
    }
  },
  dropdownMenu: {
    background: Colors.bgGreen
  },
  buttonBecame: {
    padding: '13px 30px',
    border: `2px solid ${Colors.curiousBlue}`,
    borderRadius: '8px',
    fontWeight: '700',
    color: Colors.greyish,
    '@media (max-width: 992px)': {
      backgroundColor: 'transparent',
      color: `${Colors.greyish}`,
      marginRight: '0 !important',
      padding: '12px 0',
      fontWeight: '600',
      fontSize: '26px',
      border: 'none'
    },
    '@media (max-width: 767px)': {
      fontSize: '22px'
    }
  },
  loginBtnContainer: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 991px)': {
      flexDirection: 'column-reverse',
      justifyContent: 'stretch',
      margin: 0,
      flexWrap: 'wrap-reverse',
      marginTop: 0
    }
  },
  loginBtn: {
    background: 'transparent',
    border: 0,
    color: Colors.kgGreen,
    fontWeight: 'bold',
    '@media (max-width: 991px)': {
      borderRadius: 18,
      boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.14)',
      backgroundColor: Colors.white,
      padding: '0px 25px',
      height: 35,
      width: 130
    }
  },
  loginBtnMobile: {
    '@media (max-width: 991px)': {
      marginLeft: 0
    }
  },
  signupBtn: {
    border: 'transparent',
    color: Colors.white,
    fontWeight: 'bold',
    borderRadius: 23,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    background: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 160,
    ':hover': {
      textDecoration: 'none'
    },
    '@media (max-width: 991px)': {
      marginBottom: 24,
      height: 35,
      width: 130
    }
  },
  dropdownSelect: {
    color: '#1c1b1',
    ':hover': {
      textDecoration: 'none'
    }
  },
  dashboardBtn: {
    border: 'transparent',
    color: Colors.white,
    fontWeight: 'bold',
    borderRadius: 23,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    background: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 200,
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'none'
    },
    '@media (max-width: 600px)': {
      display: 'none'
    }
    // '@media (max-width: 991px)': {
    //   marginBottom: 24,
    //   height: 35,
    //   width: 130
    // }
  },
  profileBox: {
    position: 'relative',
    '@media (min-width: 601px)': {
      display: 'none'
    }
  },
  profielAvatar: {
    width: '35px',
    height: ' 35px',
    borderRadius: '50%',
    background: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    fontWeight: '600',
    color: `${Colors.white} `,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    float: 'right',
    position: 'relative',

    cursor: 'pointer',
    zIndex: '1'
  },
  dashboardIcon: {
    color: Colors.white,
    fontSize: 18
  }
});
