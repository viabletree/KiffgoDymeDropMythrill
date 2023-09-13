// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  wrapper: {
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    backgroundColor: Colors.outerSpace,
    border: 'none'
  },
  contentContainer: {
    display: 'flex',
    flex: 16,
    overflow: 'hidden'
  },
  header: {
    display: 'flex',
    backgroundColor: '#404040',
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: '30px',
    paddingLeft: '30px'
  },
  footer: {
    display: 'flex',
    backgroundColor: '#404040',
    paddingBottom: '10px',
    paddingTop: '10px',
    // flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '30px'
  },
  footerButton: {
    display: 'flex',
    border: 'none',
    padding: '5px 15px',
    borderRadius: '9px',
    height: '38px',
    width: '69px',
    cursor: 'pointer',
    background: Colors.white,
    color: Colors.codGrays,
    alignItems: 'center ',
    fontSize: '15px',
    fontWeight: 'bold'
  },
  footerButtonImport: {
    display: 'flex',
    border: 'none',
    padding: '5px 15px',
    borderRadius: '9px',
    height: '38px',
    width: '113px',
    cursor: 'pointer',
    background: Colors.bgGreen,
    color: Colors.white,
    alignItems: 'center ',
    fontSize: '15px',
    fontWeight: 'bold',
    marginRight: '10px'
  },
  footerButtonCopy: {
    display: 'flex',
    border: 'none',
    padding: '5px 15px',
    borderRadius: '9px',
    height: '38px',
    width: '69px',
    cursor: 'pointer',
    background: '#5c5c5c',
    color: Colors.white,
    alignItems: 'center ',
    fontSize: '15px',
    fontWeight: 'bold',
    marginRight: '10px'
  },
  buttonsParent: {
    display: 'flex'
  },
  successImage: {
    height: '100px',
    width: '100px',
    marginBottom: '18px',
    marginTop: '65px'
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  successText: {
    color: Colors.white,
    fontSize: '16px'
  },
  failContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: '44px',
    paddingTop: '42px'
  },
  failImage: {
    height: '40px',
    width: '40px',
    marginRight: '5px'
  },
  failCounterContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 2
  },
  failText: {
    color: Colors.white,
    fontSize: '16px',
    fontWeight: 'bold'
  },
  loadingWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: '18px',
    color: Colors.white
  },
  errorParent: {
    marginTop: '20px',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    flex: 14
  },
  errorText: {
    color: Colors.white,
    fontSize: '12px',
    marginTop: '5px'
  },
  copyTextParent: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    marginTop: '10px',
    marginBottom: '10px',
    alignItems: 'flex-end',
    marginRight: '10px'
  },
  copyText: { color: Colors.white, fontSize: '13px' },
  logo: {
    width: '78px',
    height: '98px',
    marginBottom: '10px'
  },
  checkIcon: {
    color: 'white'
  }
});
