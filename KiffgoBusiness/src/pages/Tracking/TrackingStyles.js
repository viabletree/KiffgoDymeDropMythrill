// @flow
import { StyleSheet } from 'aphrodite';
import { Media } from 'react-bootstrap';
import { Colors, Images } from '../../theme';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.outerSpace
  },
  doneContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.mineShaft
  },
  ratingParent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70px'
  },
  ratingHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '22px',
    '@media (max-width: 600px)': {
      marginLeft: '20px',
      marginRight: '20px',
      textAlign: 'center'
    }
  },
  ratingContent: {
    fontSize: '13px',
    color: 'white',
    lineHeight: '32px',
    '@media (max-width: 600px)': {
      marginLeft: '20px',
      marginRight: '20px',
      textAlign: 'center'
    }
  },
  ratingComponentParent: {
    marginTop: '10px'
  },
  footerButton: {
    order: 'none',
    padding: '0px 15px',
    borderRadius: '12px',
    height: '38px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    fontSize: '15px'
  },
  whiteButton: {
    background: Colors.white,
    backgroundColor: '#ffffff',
    color: Colors.codGrays,
    marginLeft: '120px',
    border: 'solid 1px #ffffff',
    fontWeight: 'bold'
  },
  disabledButton: {
    background: Colors.white,
    backgroundColor: '#808080',
    color: Colors.codGrays,
    marginLeft: '120px',
    border: 'solid 1px #808080',
    fontWeight: 'bold'
  },
  greyButton: {
    color: Colors.white,
    border: 'solid 1px #ffffff',
    background: '00000000',
    fontWeight: 'bold'
  },
  buttonsParent: {
    display: 'flex',
    marginTop: '40px'
  },
  mapCalculation: {
    height: `calc(100vh - ${60 + 120}px)`,
    '@media (max-width: 600px)': {
      height: `calc(100vh - ${60 + 300}px)`
    },
    width: `calc(100vw)`
  },
  headerParent: {
    height: '60px',
    width: '100%',
    backgroundColor: Colors.outerSpace,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '50px',
    paddingRight: '50px',
    '@media (max-width: 600px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  },
  headerLeftParent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  picWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: '45px',
    height: '45px',
    borderRadius: '55px',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      width: '38px',
      height: '38px'
    }
  },
  profilePicEmpty: {
    maxWidth: '50%',
    maxHeight: '50%',
    width: '100%',
    height: '100%'
  },
  profilePic: {
    height: 'auto',
    width: '100%'
  },
  dispatcherName: {
    color: Colors.white,
    marginLeft: '10px',
    fontWeight: 'bold',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      fontSize: '14px'
    }
  },
  headerRightParent: {
    display: 'flex',
    flexDirection: 'column'
  },
  poweredBy: {
    color: Colors.white,
    fontSize: '10px',
    textAlign: 'center',
    marginBottom: '5px',
    '@media (max-width: 600px)': {
      fontSize: '8px'
    }
  },
  dmLogo: {
    height: '25px',
    width: '100px',
    '@media (max-width: 600px)': {
      width: '70px',
      height: '20px'
    }
  },
  footerParent: {
    height: '120px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '50px',
    paddingRight: '50px',
    backgroundColor: Colors.outerSpace,
    '@media (max-width: 1150px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      height: '300px',
      minHeight: '300px',
      paddingLeft: '20px',
      paddingRight: '20px',
      alignItems: 'flex-start',
      overflow: 'scroll'
    }
  },
  footerLeftParent: {
    flex: 1,
    alignItems: 'center',
    paddingRight: '20px',
    '@media (max-width: 900px)': {
      paddingRight: '10px'
    },
    '@media (max-width: 600px)': {
      marginBottom: '10px',
      marginTop: '10px',
      paddingRight: '0px',
      width: '100%'
    }
  },
  etaParent: {
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: '1000px',
    padding: '10px',
    border: `2px solid ${Colors.bgGreen}`,
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px'
    }
  },
  etaText: {
    color: 'white',
    fontSize: '10px',
    '@media (max-width: 600px)': {
      fontSize: '8px'
    }
  },
  minText: {
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '8px'
    }
  },
  addressText: {
    color: 'white',
    maxWidth: '260px',
    fontSize: '15px',
    '@media (max-width: 600px)': {
      fontSize: '13px',
      // marginLeft: '20px',
      maxWidth: '200px'
    }
  },
  footerCenterParent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      marginBottom: '0px',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    '@media (max-width: 450px)': {
      alignSelf: 'center',
      marginTop: '10px'
    }
  },
  vehicleLogo: {
    height: '60px',
    width: '60px',
    '@media (max-width: 600px)': {
      height: '40px',
      width: '40px'
    }
  },
  vehicleInfoParent: {
    display: 'flex',
    flexDirection: 'column'
  },
  vehicleText: {
    color: 'white',
    marginTop: '5px',
    fontSize: '14px',
    lineHeight: '16px',
    '@media (max-width: 600px)': {
      lineHeight: '20px',
      fontSize: '13px',
      maxWidth: '200px'
    }
  },
  vehicleTextLite: {
    color: 'white',
    fontSize: '12px',
    maxWidth: '140px',
    lineHeight: '16px',
    '@media (max-width: 600px)': {
      fontSize: '10px',
      maxWidth: '200px'
    }
  },
  footerRightParent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      // marginBottom: '10px'
    }
  },
  picWrapperLarge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: '70px',
    height: '70px',
    maxWidth: '70px',
    maxHeight: '70px',
    minWidth: '70px',
    minHeight: '70px',
    borderRadius: '55px',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      width: '70px',
      height: '70px',
      maxWidth: '70px',
      maxHeight: '70px',

      borderRadius: '55px'
    }
  },
  userNmeParent: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '10px',
    '@media (max-width: 600px)': {
      maxWidth: '200px',
      marginLeft: '20px'
    }
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    display: 'block',
    '@media (max-width: 600px)': {
      fontSize: '13px'
    }
  },
  dispatcherText: {
    color: 'white',
    display: 'block',
    '@media (max-width: 600px)': {
      fontSize: '13px'
    }
  },
  communicateParent: {
    display: 'flex',
    marginLeft: '50px',
    '@media (max-width: 900px)': {
      marginLeft: '10px'
    },
    '@media (max-width: 600px)': {
      display: 'none'
    }
  },
  callTextParent: {
    cursor: 'pointer',
    color: Colors.white,
    width: '130px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '34px',

    background: 'linear-gradient(to bottom, #5edea8, #44a079)',
    '@media (max-width: 900px)': {
      width: '35px',
      height: '35px'
    },
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
      width: '100%'
    }
  },
  callTextLogo: {
    width: '23px'
  },
  mobileViewCommunicationButtonParent: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginTop: '20px',
    marginBottom: '20px',
    display: 'none',
    '@media (max-width: 600px)': {
      fontSize: '13px',
      display: 'flex'
    }
  },
  failReason: {
    fontSize: '16px',
    color: 'white',
    lineHeight: '32px',
    '@media (max-width: 600px)': {
      fontSize: '13px',
      marginLeft: '20px',
      marginRight: '20px',
      textAlign: 'center'
    }
  },
  etaBox: {
    background: 'linear-gradient(to bottom, #262626, #000000)',
    borderRadius: '32px',
    color: Colors.white,
    width: '140px',
    height: '47px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '@media (max-width: 900px)': {
      width: '100px'
    },
    '@media (max-width: 600px)': {
      width: '50%'
    }
  },
  etaBoxTitle: {
    fontSize: '12px',
    marginBottom: '3px'
  },
  etaBoxSbtxt: {
    fontSize: '11px',
    marginLeft: '2px'
  },
  etaBoxValue: {
    fontWeight: 'bold',
    fontSize: '18px'
  },
  etaBoxBlueBg: {},
  footerLeftBtnParent: {
    display: 'flex',
    marginBottom: '10px',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  footerCenterItemParent: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      marginRight: '10px'
    },
    '@media (max-width: 600px)': {
      marginRight: '0',
      marginBottom: '5px'
    },
    '@media (max-width: 450px)': {
      alignSelf: 'center'
    }
  },
  callTextParentWrapper: {
    '@media (max-width: 600px)': {
      display: 'block',
      width: '47%'
    }
  },
  driverTooltipWrapper: {
    minWidth: '90px',
    padding: '3px',
    backgroundColor: Colors.white,
    borderRadius: '5px',
    textAlign: 'center'
  },
  driverTooltipName: {
    fontWeight: 'bold',
    fontSize: '12px'
  }
});
