// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  selecteText: {
    color: Colors.white
  },
  wrapper: {
    padding: '10px'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'white'
  },
  description: {
    marginTop: '20px',
    fontSize: '14px',
    color: 'white'
  },
  taskCount: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'white',
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center'
  },
  outerCheck: {
    border: '1px solid white',
    height: '15px',
    width: '15px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  innerCheck: {
    backgroundColor: Colors.bgGreen,
    borderRadius: '10px',
    position: 'absolute',
    top: 1,
    bottom: 1,
    left: 1,
    right: 1
  },
  actionItem: {
    display: 'flex',
    color: 'white',
    fontSize: '13px',
    alignItems: 'center',
    marginTop: '10px'
  }
});
