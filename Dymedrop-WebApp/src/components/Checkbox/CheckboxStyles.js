// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  uncheckedBox: {
    width: 20,
    height: 20,
    border: `1px solid ${Colors.offWhite5}`,
    borderRadius: '2px',
    display: 'block',
    marginRight: 8,
    marginBottom: 1
  },

  checkedBox: {
    backgroundColor: Colors.kgGreen,
    position: 'relative',

    ':after': {
      content: '""',
      border: '2px solid white',
      width: 18,
      height: 18,
      position: 'absolute',
      borderRadius: '2px'
    }
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    color: Colors.greyish,
    fontSize: '13px',
    alignItems: 'center',
    userSelect: 'none',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start'
  },

  theme2TitleStyles: {
    color: Colors.white
  },

  theme2UnchecboxStyles: {
    width: 12,
    height: 12,
    fontSize: '13px'
  },
  theme2ChecboxStyles: {
    backgroundColor: Colors.kgGreen,
    position: 'relative',
    ':after': {
      content: '""',
      border: '1px solid white',
      width: 11,
      height: 11,
      position: 'absolute',
      borderRadius: '2px'
    }
  },
  theme3ChecboxStyles: {
    backgroundColor: Colors.kgGreen,
    position: 'relative',
    border: 'none',
    ':after': {
      content: '""',
      border: '1px solid white',
      width: 14,
      height: 14,
      position: 'absolute',
      borderRadius: '7px'
    }
  },
  theme3UnchecboxStyles: {
    width: 14,
    height: 14,
    fontSize: '13px',
    borderRadius: '7px'
  },
  theme3TitleStyles: {
    color: Colors.white
  },
  theme4TitleStyles: {
    color: Colors.bgGreen
  },
  disabled: {
    cursor: 'not-allowed'
  }
});
