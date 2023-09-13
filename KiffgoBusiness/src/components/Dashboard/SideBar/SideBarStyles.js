// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  sideBarSec: {
    position: 'relative',
    marginBottom: '20px'
  },
  sideBar: {
    height: '100vh',
    boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.11)',
    backgroundColor: Colors.codGrays,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column'
  },
  sideBarColumn: {
    height: '80px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '25px 0',
    color: '#fff',
    transition: 'all .1s linear',
    ':hover': {
      color: Colors.emerald
    }
  },
  sideBarWrap: {
    width: '85px',
    position: 'fixed',
    top: 0,
    bottom: 0,
    height: '100%',
    zIndex: '99'
  },
  imgWrap: {
    background: '#282828',
    width: ' 100%',
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    width: ' 69px',
    height: '30px'
  },
  linkImage: {
    width: ' 40px',
    height: '20px'
  },
  userProfile: {
    alignSelf: 'flex-end',
    marginBottom: '40px',
    width: '100%',
    textAlign: 'center',
    position: 'relative'
  },
  coloumnWrap: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: ' 100%',
    overflow: 'hidden'
  },
  profileAvatar: {
    width: ' 45px',
    height: '45px',
    borderRadius: ' 50%',
    background: Colors.kgGreen,
    margin: 'auto',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  profileArea: {
    position: 'absolute',
    top: 0,
    left: '95px',
    boxShadow: ' rgba(0, 0, 0, 0.12) 0px 1px 12px !important',
    width: '220px'
  },
  profileItem: {
    padding: '15px 25px',
    textAlign: 'left',
    cursor: 'pointer',
    backgroundColor: Colors.white
  },
  navText: {
    fontSize: '10px',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    fontWeight: 700,
    marginTop: '8px'
  },
  decorationNone: {
    textDecoration: 'none'
  }
});
