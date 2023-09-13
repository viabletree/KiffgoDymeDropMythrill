// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: '1360px !important',
    margin: '0 auto'
  },
  footerLogoImg: {
    maxWidth: '110px'
  },
  footerBottom: {
    backgroundColor: `${Colors.bgGreen}`
  },
  footerBottomPurple: {
    backgroundColor: `${Colors.text.driverApp}`
  },
  siteFooter: {
    background: `${Colors.text.titleColorTwo}`,
    marginTop: '50px',
    '@media (max-width: 767px)': {
      paddingTop: 0
    }
  },
  bold: {
    fontWeight: '800',
    color: Colors.white
  },
  footerWrap: {
    padding: '40px'
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  footerItem: {
    '@media (max-width: 992px)': {
      marginTop: '40px'
    },
    '@media (max-width: 767px)': {
      flex: '0 0 50%'
    },
    '@media (max-width: 600px)': {
      flex: '0 0 100%'
    }
  },
  dNone: {
    '@media (max-width: 767px)': {
      display: 'none'
    }
  },
  socialWrap: {
    marginTop: '50px',
    display: 'none',
    '@media (max-width: 767px)': {
      display: 'flex'
    }
  },
  emailhide: {
    display: 'none',
    '@media (max-width: 767px)': {
      display: 'block'
    }
  },
  mTop0: {
    marginTop: 0
  },
  rocketIcon: {
    marginRight: '14px',
    height: '34px',
    width: '47px'
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoCaption: {
    color: Colors.bgGreen,
    lineHeight: '1.56rem',
    fontSize: '16px'
  },
  logoCaptionPurple: {
    color: Colors.text.driverApp,
    lineHeight: '1.56rem',
    fontSize: '16px'
  }
});
