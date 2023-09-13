// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: '1360px',
    margin: '20px auto'
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 60,
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: '-1.4px',
    textAlign: 'center',
    color: `${Colors.text.titleColorTwo}`,
    '@media (max-width:767px)': {
      fontSize: 40,
      lineHeight: 1.3
    }
  },
  description: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: '-0.6px',
    textAlign: 'center',
    lineHeight: 1.5,
    color: '#5daeff',
    '@media (max-width:767px)': {
      fontSize: 18
    }
  },
  listingWrapper: {
    '@media (min-width:768px)': {
      paddingLeft: 90
    },
    '@media (max-width:767px)': {
      marginTop: 20
    }
  },
  listingItem: {
    position: 'relative',
    fontSize: 18,
    lineHeight: '1.7em',
    ':before': {
      content: "'-'",
      position: 'absolute',
      marginLeft: '-15px'
    }
  },
  detailTextWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px auto',
    maxWidth: 1240,
    '@media (max-width:767px)': {
      margin: '20px 0'
    }
  },
  detailText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#4a4747',
    '@media (max-width:767px)': {
      fontSize: 18,
      textAlign: 'center'
    }
  },

  additionalParaWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px auto',
    maxWidth: 1240,
    '@media (max-width:767px)': {
      margin: '20px 0'
    }
  },
  additionalPara: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#4a4747',
    '@media (max-width:767px)': {
      fontSize: 18,
      textAlign: 'center'
    }
  },
  comparisonTableWrapper: {
    width: '100%'
  },
  tableMainHeading: {
    color: '#585858',
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'left',
    padding: 0,
    verticalAlign: 'bottom'
  },
  kiffgoTwoImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 148,
    height: 48,
    margin: 'auto',
    borderRadius: 7,
    backgroundColor: 'transparent'
  },
  kiffgoImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 148,
    height: 48,
    margin: 'auto',
    borderRadius: 7,
    backgroundColor: Colors.black
  },
  kiffgoImg: {
    width: 120
  },
  responsiveHeading: {
    display: 'none',
    '@media (max-width:1200px)': {
      color: '#585858',
      fontSize: 25,
      marginBottom: 12,
      textAlign: 'center',
      display: 'block'
    }
  },
  kiffgoLink: {
    color: `${Colors.text.titleColor}`,
    fontWeight: 700,
    textDecoration: 'underline',
    textDecorationColor: 'unset',
    ':hover': {
      color: `${Colors.bgGreen}`
    }
  }
});
