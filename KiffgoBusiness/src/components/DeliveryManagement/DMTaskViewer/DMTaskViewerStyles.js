// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';
import { DM_FILTER_BAR_HEIGHT, DM_SIDE_BAR_WIDTH } from '../../../constants';

export default StyleSheet.create({
  wrapper: {
    color: Colors.white
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginRight: '4px'
  },
  para: {
    lineHeight: '25px',
    fontSize: '13px'
  },
  paraOther: {
    display: 'flex',

    fontSize: '13px',
    alignItems: 'center'
  },
  sideLine: {
    display: 'flex'
  },
  topText: {
    fontWeight: 'bold'
  },
  circleLineParent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '10px'
  },
  circleView: {
    width: '11px',
    height: '11px',
    border: 'solid 1px #5edea8',
    backgroundColor: '#343434',
    borderRadius: '6px'
  },
  lineView: {
    flex: 1,
    width: '0.5px',
    marginBottom: '5px',
    marginTop: '5px',
    backgroundColor: '#5edea8'
  },
  contentView: {
    paddingBottom: '20px',
    marginLeft: '10px'
  },
  lineHide: {
    display: 'none'
  },
  locationIcon: {
    height: '15px',
    width: '15px'
  },
  itemImageParent: {
    display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column'
  },
  ItemImage: {
    maxWidth: '100%',
    maxHeight: '250px'
  },
  signatureParent: {
    backgroundColor: Colors.white,
    textAlign: 'center'
  }
});
