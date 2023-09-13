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
  containerTwo: {
    maxWidth: 1360,
    margin: '0 auto 0',
    '@media (max-width: 1400px)': {
      maxWidth: 1140
    }
  },
  heroSection: {
    background: 'linear-gradient(-267deg, #8f77de 7%, #b35fe0 82%);',
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '30px',
    paddingBottom: '30px'
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
    paddingBottom: 50,
    '@media (max-width: 767px)': {
      paddingBottom: 20
    }
  },
  productSecHead: {
    fontWeight: 600,
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20,
    color: Colors.text.titleColorTwo,
    textAlign: 'left',
    '@media (max-width: 767px)': {
      fontSize: 22
    }
  },
  productSecPara: {
    width: '100%',
    maxWidth: 830,
    margin: '0 auto',
    lineHeight: '1.39em',
    color: Colors.text.quaternary
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
    marginTop: 100,
    '@media (max-width: 767px)': {
      marginTop: 30
    }
  },
  bannerHead: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: -0.7,
    color: Colors.white,
    textAlign: 'center',
    '@media (max-width: 767px)': {
      fontSize: 22,
      textAlign: 'center'
    }
  },
  bannerText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: -0.7,
    color: Colors.white,
    '@media (max-width: 767px)': {
      fontSize: 18,
      textAlign: 'center'
    }
  },
  featureBoxWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 220,
    borderRadius: 31,
    boxShadow: '0 18px 20px 0 rgb(0 0 0 / 6%)',
    backgroundColor: `${Colors.white}`,
    overflowX: 'hidden',
    margin: '20px 0',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      height: 340,
      flexWrap: 'nowrap',
      padding: 15
    }
  },
  featureNumberWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  featureNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal'
  },
  featureContent: {
    flex: '0 0 72%',
    '@media (max-width: 767px)': {
      flex: 0,
      textAlign: 'center'
    }
  },
  featureInnerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: `${Colors.text.featureTitle}`,
    marginBottom: '.5rem'
  },
  featureDesc: {
    fontSize: 13,
    lineHeight: '1.75em',
    letterSpacing: '0.64px'
  }
});
