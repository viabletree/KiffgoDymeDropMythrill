// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../../theme';

export default StyleSheet.create({
  searchHeader: {
    padding: '0 ',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
    width: '590px',
    '@media (max-width:980px)': {}
  },
  searchInput: {
    width: 'calc(100% - 115px)',
    height: '40px',
    borderRadius: ' 4px',
    border: `solid 1px ${Colors.mercurySolid}`,
    padding: '10px 4px 13px 40px',
    marginRight: '15px',
    '@media (max-width:1430px)': {
      fontSize: '14px'
    }
  },
  tabsSection: {
    marginTop: '25px '
  },
  searchArea: {
    position: 'relative',
    width: '100%',
    ':before': {
      content: "' '",
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '15px',
      margin: 'auto',
      width: '17px',
      height: '17px',
      backgroundImage: `url(${Images.searchIcon})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
    '@media (max-width:1024px)': {
      width: '330px'
    }
  },
  SearchWrapper: {
    justifyContent: 'flex-end ',
    width: '100%'
  },
  cancelBtn: {
    position: ' absolute',
    right: '120px',
    top: 0,
    bottom: 0,
    margin: 'auto',
    height: '20px',
    width: '32px',
    backgroundColor: 'transparent',
    border: 'none'
  }
});
