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
    margin: '50px auto 0',
    maxWidth: 870,
    paddingBottom: 15,
    '@media (max-width:767px)': {
      marginTop: 30
    }
  },
  title: {
    fontSize: 50,
    fontWeight: 800,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    textAlign: 'center',
    color: `${Colors.text.titleColorTwo}`,
    '@media (max-width:767px)': {
      fontSize: 30
    }
  },

  boxingImageWrapper: {
    width: '100%'
  },
  blogBoxingImg: {
    width: '100%'
  },

  additionalParaWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px auto',
    '@media (max-width:767px)': {
      margin: '20px 0'
    }
  },
  additionalPara: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.25em',
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
  },
  blogDetailWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: 700,
    margin: '25px auto'
  },
  blogTitleWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '25px auto 25px 0',
    '@media (max-width:767px)': {
      justifyContent: 'center'
    }
  },
  blogTitle: {
    color: `${Colors.text.titleColor}`,
    fontSize: 32,
    fontWeight: 800,
    lineHeight: 1.5,
    '@media (max-width:767px)': {
      fontSize: 22
    }
  },
  blogImgWrapper: {
    width: '100%',
    margin: '2em 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width:767px)': {
      margin: '1em 0'
    }
  },
  blogImg: {
    width: '100%'
  },
  descLink: {
    color: `${Colors.text.titleColor}`,
    fontWeight: 700,
    textDecoration: 'underline',
    textDecorationColor: 'unset'
  },
  blogDesc: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5em',
    letterSpacing: 'normal',
    '@media (max-width:767px)': {
      fontSize: 17
    }
  },
  blogHQWrapper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 'auto'
  },
  blogHQ: {
    fontSize: 20,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5em',
    '@media (max-width:767px)': {
      fontSize: 17
    }
  },
  additionalParaTwoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px auto',
    maxWidth: 700,
    '@media (max-width:767px)': {
      margin: '20px 0'
    }
  },
  additionalParaTwo: {
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
  }
});
