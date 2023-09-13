// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  cardBoxButtonRow: {
    display: 'flex'
  },
  button: {
    position: 'relative',
    background: 'none',
    outline: 'none',
    border: `2px solid ${Colors.offWhite}`,
    borderRadius: '4px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    minHeight: 60,
    '@media (max-width:1100px)': {
      padding: '5px'
    }
  },
  selectedButton: {
    border: `2px solid ${Colors.bgGreen}`,
    boxShadow: '0 2px 6px 0 rgba(94, 222, 168, 0.15)'
  },
  servpara: {
    color: Colors.greyish,
    fontSize: '12px',
    fontWeight: 600
  },
  titleVehicle: {
    textTransform: 'capitalize',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 'normal'
  },
  imgStyle: {
    marginRight: '20px',
    maxWidth: '42px',
    maxHeight: '33px',
    '@media (max-width:1130px)': {
      marginRight: '8px',
      maxWidth: '40px',
      maxHeight: '30px'
    }
  },
  boxSizingStyle: {
    display: 'flex',
    width: '33.33%',
    padding: 5,
    position: 'relative'
  },
  betaWrap: {
    position: 'absolute',
    right: '0',
    top: '0'
  }
});
