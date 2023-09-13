// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../constants';

export default StyleSheet.create({
  wrapper: {
    color: Colors.white,
    marginBottom: '10px'
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  subHeader: {
    fontSize: '13px',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    lineHeight: '16px',
    marginTop: '7px'
  },
  picWrapper: {
    marginTop: '13px'
  },
  line: {
    width: '100%',
    height: 0,
    border: 'solid 1px #656565',
    marginTop: '40px'
  },
  transportListWrapper: {
    marginTop: '25px'
  },
  transportList: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  transportItemLi: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    borderBottom: `2px solid transparent`,
    height: '45px'
  },
  transportItemLiSelected: {
    borderBottom: `2px solid ${Colors.kgGreen}`
    /* ':after': {
      content: "''",
      position: 'absolute',
      right: '2px',
      left: '2px',
      bottom: '-4px',
      display: 'block',
      backgroundColor: Colors.bgGreen,
      height: '2px',
      fontSize: '4px',
      borderRadius: '2px'
    } */
  },
  iconStyle: {
    height: '85%',
    width: 'auto'
  },
  topIcon: {
    fontSize: 16
  },
  flexHalf: {
    flex: 1.5
  },
  deleteButton: {
    width: '300px',
    fontSize: '14px',
    height: '30px'
  },
  errorIconWrapper: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    marginBottom: '-5px'
  },
  errorIcon: {
    color: Colors.red2,
    fontSize: '14px'
  },
  headerActions: {
    flex: 1,
    color: Colors.bgGreen,
    fontSize: '13px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginRight: 10,
    lineHeight: '15px'
  },
  headWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20
  },
  modalTitle: {
    fontSize: '17px',
    color: Colors.white
  },
  subTitle: {
    color: Colors.text.quaternary,
    fontSize: '14px'
  },
  title: {
    fontSize: '13px',
    fontWeight: '600',
    color: Colors.white
  }
});
