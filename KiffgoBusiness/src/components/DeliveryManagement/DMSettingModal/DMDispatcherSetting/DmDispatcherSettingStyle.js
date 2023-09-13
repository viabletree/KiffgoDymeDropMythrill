import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../../constants';

export default StyleSheet.create({
  apiWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: '20px'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    width: '370px',
    border: 'solid 1px #7b7b7b',
    borderRadius: '8px'
  },

  body: {
    /* display: 'flex', flex: 8, */

    height: 'calc(100% - 30px)',
    padding: '15px'
  },
  footer: {
    /*  display: 'flex',
    flex: 0.5, */
    borderTop: 'solid 1px #7b7b7b'
  },
  footerLeft: {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    fontSize: '15px',
    color: Colors.white,
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  footerCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 6,
    paddingLeft: '12px',
    paddingRight: '12px',
    borderRight: 'solid 1px #7b7b7b',
    fontSize: '15px',
    color: Colors.white,
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  footerRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.2
  },
  plusIcon: {
    color: Colors.white,
    height: '16px',
    width: '16px',
    marginRight: '2px',
    cursor: 'pointer'
  },
  editIcon: {
    color: Colors.white,
    height: '12px',
    width: '12px',
    marginRight: '5px'
  },
  disabledContainer: {
    pointerEvents: 'none',
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  heading: {
    color: '#7b7b7b'
  },
  loader: {
    display: 'flex',
    justifyContent: 'center'
  },

});
