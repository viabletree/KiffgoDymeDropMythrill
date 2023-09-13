// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../../theme';

export default StyleSheet.create({
  seamlessHeroSection: {
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '30px',
    paddingBottom: '30px',
    '@media (max-width: 767px)': {
      margin: '20px auto'
    }
  },
  container: {
    maxWidth: 1360,
    margin: '0 auto 0',
    '@media (max-width: 1400px)': {
      maxWidth: 1140,
      margin: '0px auto 40px'
    }
  },
  containerTwo: {
    maxWidth: 1360,
    margin: '0 auto 0',
    '@media (max-width: 1400px)': {
      maxWidth: 1140
    }
  },
  bannerText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: -0.7,
    color: Colors.black,
    '@media (max-width: 767px)': {
      fontSize: 18,
      textAlign: 'center'
    }
  },
  productImg: {
    width: '90%',
    '@media (max-width: 767px)': {
      width: '100%'
    }
  },
  descTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.3,
    letterSpacing: 'normal',
    color: '#0d0d0d',
    '@media (max-width: 767px)': {
      textAlign: 'center'
    }
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.75,
    letterSpacing: 'normal',
    color: Colors.black,
    '@media (max-width: 767px)': {
      textAlign: 'center'
    }
  },
  descriptiontwo: {
    marginTop: 20,
    maxWidth: 550,
    fontSize: 16,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.75,
    letterSpacing: 'normal',
    color: Colors.black,
    '@media (max-width: 767px)': {
      textAlign: 'center'
    }
  }
});
