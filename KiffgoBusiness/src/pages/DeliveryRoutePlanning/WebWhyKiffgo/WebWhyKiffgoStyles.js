// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: 1360,
    margin: '0 auto 0',
    display: 'flex',
    '@media (max-width: 767px)': {
      flexDirection: 'column'
    },
    '@media (max-width: 1400px)': {
      maxWidth: 1140,
      margin: '0px auto 40px'
    }
  },
  WhyKiffgoSec: {
    marginTop: '100px',
    paddingTop: '70px',
    backgroundImage: 'linear-gradient(260deg, #73ddd4 6%, #64deb5 82%)',
    '@media (max-width: 767px)': {
      marginTop: '50px'
    }
  },
  WhyKiffgoRow: {
    paddingTop: '0',
    marginTop: '70px',
    '@media (max-width: 560px)': {
      marginTop: '0px'
    }
  },
  ctaBannerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      justifyContent: 'center'
    }
  },
  ctaBannerText: {
    fontSize: '1.375em',
    '@media (max-width: 767px)': {
      textAlign: 'center',
      lineHeight: 'normal',
      fontSize: 19
    }
  },
  ctaBannerTextSpan: {
    display: 'block'
  },
  sendBtn: {
    border: '1px solid transparent',
    borderRadius: 23,
    height: 40,
    width: 249,
    backgroundColor: 'white',
    color: Colors.bgGreen,
    fontWeight: 'bold',
    marginRight: '1rem',
    '@media (max-width: 1190px)': {
      marginRight: 0,
      marginBottom: 15
    },
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },
  sendBtnTwo: {
    border: '1px solid transparent',
    borderRadius: 23,
    height: 40,
    width: 249,
    backgroundColor: 'white',
    color: Colors.bgGreen,
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },
  meetingButtonContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    '@media (max-width: 1190px)': {
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    '@media (max-width: 767px)': {
      alignItems: 'center'
    }
  }
});
