import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },

  selectOptions: {
    background: Colors.mineShaftDark,
    padding: '5px 20px',
    width: '250px',
    minHeight: '300px',
    position: 'absolute',
    zIndex: '9',
    overflowY: 'auto',
    borderRadius: '5px',
    right: '29px',
    marginTop: '10px'
  },
  optionContainer: {
    padding: '10px 0'
  },
  option: {
    padding: '5px 0'
  },
  optionText: {
    paddingLeft: '10px',
    color: Colors.white,
    cursor: 'pointer'
  },
  optionHeading: {
    color: Colors.white
  },
  optionHeadingContainer: {
    padding: '12px 0',
    borderBottom: 'solid 1px #999999',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonIcon: {
    width: '50px',
    height: '28px',
    cursor: 'pointer'
  }
});
