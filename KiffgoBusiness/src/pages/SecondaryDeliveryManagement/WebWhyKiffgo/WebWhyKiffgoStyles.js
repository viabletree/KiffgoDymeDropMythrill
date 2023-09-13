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
    background:
      'linear-gradient(-260deg, rgba(143,119,222,1) 6%, rgba(179,95,224,1) 82%)',
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
    color: Colors.text.driverApp,
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
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }
});
