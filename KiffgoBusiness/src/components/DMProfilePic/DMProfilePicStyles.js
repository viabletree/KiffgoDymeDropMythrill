// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    display: 'flex',
    height: '111px',
    width: '111px',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: 'auto'
  },
  editParent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '26px',
    width: '26px',
    borderRadius: '13px',
    backgroundColor: Colors.bgGreen,
    position: 'absolute',
    top: '7px',
    right: '0px',
    overflow: 'hidden'
  },
  editIcon: {
    fontSize: '13px',
    color: Colors.white
  },
  picWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: '111px',
    height: '111px',
    borderRadius: '55px',
    overflow: 'hidden'
  },
  profilePic: {
    height: '100%',
    width: 'auto'
  },
  filesInput: {
    position: 'absolute',
    opacity: 0,
    height: '100%',
    width: '100%',
    zIndex: 100,
    cursor: 'pointer'
  },
  profilePicEmpty: {
    maxWidth: '80%',
    maxHeight: '80%',
    width: '100%',
    height: '100%'
  }
});
