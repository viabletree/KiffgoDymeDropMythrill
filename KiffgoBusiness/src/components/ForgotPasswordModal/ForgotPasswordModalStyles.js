// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../theme';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: '0px 20px 20px',
    //backgroundImage: `url(${Images.abstract})`,
    backgroundPosition: 'right -2px bottom -54px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40% auto',
    '@media (max-width: 560px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    },
    borderRadius: '50px'
  },
  formWrapper: {
    marginTop: '80px',
    marginBottom: '65px'
  },
  sendLink: {
    color: Colors.white,
    width: 200,
    borderRadius: 23,
    border: 'none',
    padding: '12px 29px',
    fontWeight: 700,
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },
  btnBg: {
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    background: 'linear-gradient(104deg, #5edea8, #77deda 122%)'
  },
  heading: {
    color: Colors.bgGreen,
    fontSize: '27px'
  }
});
