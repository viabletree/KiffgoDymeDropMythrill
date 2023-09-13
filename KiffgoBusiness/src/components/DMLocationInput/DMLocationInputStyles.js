// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  title: {
    fontSize: '13px',
    fontWeight: '600',
    color: Colors.white
  },
  suggestionsItem: {
    background: Colors.white,
    color: Colors.black,
    padding: '8px',
    fontSize: '15px',
    borderBottom: `1px solid ${Colors.black}`,
    cursor: 'pointer'
  },
  suggestionsWrapper: {
    position: 'absolute',
    zIndex: 9,
    top: '30px',
    right: 0,
    left: 0
  },
  addressLoaderWrapper: {
    position: 'absolute',
    right: 5,
    top: 7
  },
  modalTitle: {
    fontSize: '17px',
    color: Colors.white
  },
  subTitle: {
    color: Colors.text.quaternary,
    fontSize: '14px'
  },
  headWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  headerActions: {
    flex: 1,
    color: Colors.bgGreen,
    fontSize: '13px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  errorIconWrapper: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    marginBottom: '-5px'
  },
  errorIcon: {
    color: Colors.red2,
    fontSize: '15px'
  },
  flexHalf: {
    flex: 0.5
  }
});
