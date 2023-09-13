// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: 1360,
    margin: '0 auto 0',
    '@media (max-width: 1400px)': {
      maxWidth: 1140,
      margin: '0px auto 40px'
    }
  },
  serviceText: {
    padding: '0 50px 0 30px',
    maxWidth: 624,
    '@media (max-width: 768px)': {
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '20px'
    },
    '@media (max-width: 600px)': {
      padding: '0 20px',
      marginBottom: '20px'
    }
  },
  productImgOnWeb: {
    width: '100%',
    '@media (max-width: 600px)': {
      display: 'none'
    }
  },
  productImgOnMobile: {
    width: '100%',
    '@media (min-width: 601px)': {
      display: 'none'
    }
  },
  productImg: {
    width: '100%'
  },
  productSecContainer: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 100,
    '@media (max-width: 767px)': {
      paddingBottom: 20
    }
  },
  productSecHead: {
    fontWeight: 600,
    fontSize: 30,
    paddingBottom: 20
  },
  productSecPara: {
    width: '100%',
    maxWidth: 550,
    margin: '0 auto',
    lineHeight: '1.39em'
  },
  featureHead: {
    color: Colors.kgGreen,
    fontSize: 16,
    fontWeight: 700,
    textTransform: 'uppercase',
    paddingBottom: 20
  },
  productPara: {
    lineHeight: '1.39em',
    '@media (max-width: 767px)': {
      display: 'none'
    }
  },
  webProductContainer: {
    marginTop: 70,
    '@media (max-width: 767px)': {
      marginTop: 30
    }
  }
});
