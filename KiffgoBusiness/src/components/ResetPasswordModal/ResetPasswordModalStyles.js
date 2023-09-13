// @flow
import { StyleSheet } from 'aphrodite';
import { Images } from '../../theme';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingTop: '65px',
    paddingBottom: '65px',
    paddingLeft: '50px',
    paddingRight: '50px',
    //backgroundImage: `url(${Images.abstract})`,
    backgroundPosition: 'right -2px bottom -54px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40% auto',
    '@media (max-width: 560px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  },
  formWrapper: {
    marginTop: '80px',
    marginBottom: '65px'
  }
});
