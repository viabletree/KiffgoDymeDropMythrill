import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../../constants';

export default StyleSheet.create({
  taskTypeParent: {
    color: 'white',
    marginTop: '10px',
    fontSize: '13px',
    maxWidth: '40%'
  },
  topSectionInnerWrapper: {
    display: 'flex',
    marginTop: '10px',
    flex: 1
  },
  textArea: {
    backgroundColor: Colors.mineShafta,
    borderColor: Colors.borderGrey,
    color: 'white',

    lineHeight: '22px'
  },
  etaHeading: {
    color: 'white',
    marginTop: '20px',
    fontSize: '13px'
  },
  etaInput: {
    backgroundColor: Colors.mineShafta,
    borderColor: Colors.borderGrey,
    color: 'white',
    padding: '5px',
    minHeight: '30px'
  },
  saveView: {
    fontSize: '15px',
    color: Colors.vikings,
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  //old
  apiWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: '20px'
  },
  innerWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '450px',
    border: 'solid 1px #7b7b7b',
    borderRadius: '8px',
    marginTop: '10px'
  },
  innerSecretBox: {
    padding: '20px',
    overflowWrap: 'anywhere'
  },
  clipboard: {
    cursor: 'pointer',
    top: '6px',
    position: 'absolute',
    right: '10px',
    color: 'white'
  },
  smallButton: {
    height: '26px'
  },

  body: {
    /* display: 'flex', flex: 8, */
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '192px',
    padding: '10px 0px 10px 5px'
  },
  heading: {
    color: Colors.borderGrey
  },
  loader: {
    display: 'flex',
    justifyContent: 'center'
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
  downIcon: {
    color: Colors.white,
    height: '13px',
    width: '13px',
    marginRight: '5px'
  }
});
