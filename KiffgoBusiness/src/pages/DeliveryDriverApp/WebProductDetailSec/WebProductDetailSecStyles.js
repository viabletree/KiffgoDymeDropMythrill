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
    maxWidth: 1092,
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 20,
    lineHeight: 1.5,
    margin: '30px auto 0',
    '@media (max-width: 767px)': {
      fontSize: 20,
      maxWidth: '100%'
    }
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
    lineHeight: '1.39em'
  },
  webProductContainer: {
    marginTop: 70,
    '@media (max-width: 767px)': {
      marginTop: 30
    }
  },
  sendBtn: {
    border: '1px solid transparent',
    marginTop: '10px',
    borderRadius: 23,
    height: 40,
    width: 249,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    color: Colors.white,
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },
  meetingButtonContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '40px',
    '@media (max-width: 1190px)': {
      flexDirection: 'column'
    }
  }
});
