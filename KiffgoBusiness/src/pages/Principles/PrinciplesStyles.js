// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: 1360,
    margin: '20px auto',
    '@media (max-width: 1400px)': {
      maxWidth: 1140,
      margin: '0px auto 40px'
    }
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 50,
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  },
  teamWorkTitleWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 50,
    '@media (max-width: 600px)': {
      marginTop: 20
    }
  },
  title: {
    fontSize: 45,
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.29,
    textAlign: 'left',
    color: `${Colors.text.principleTitle}`,
    '@media (max-width:767px)': {
      fontSize: 30
    },
    '@media (max-width: 600px)': {
      textAlign: 'center',
      marginBottom: 10,
      fontSize: 25,
      alignSelf: 'center'
    }
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: 3.87,
    textAlign: 'left',
    color: `${Colors.text.principleTitle}`,
    '@media (max-width: 600px)': {
      alignSelf: 'flex-end'
    }
  },
  principleBoxWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 220,
    borderRadius: 31,
    boxShadow: '0 18px 20px 0 rgb(0 0 0 / 6%)',
    backgroundColor: `${Colors.white}`,
    overflowX: 'hidden',
    margin: '20px 0',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      height: 340,
      flexWrap: 'nowrap',
      padding: 15
    }
  },
  principleNumberWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  principleNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal'
  },
  principleContent: {
    flex: '0 0 72%',
    '@media (max-width: 767px)': {
      flex: 0,
      textAlign: 'center'
    }
  },
  principleInnerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: `${Colors.text.principleTitle}`,
    marginBottom: '.5rem'
  },
  principleDesc: {
    fontSize: 13,
    lineHeight: '1.75em',
    letterSpacing: '0.64px'
  },
  teamWorkContentWrapper: {
    display: 'flex',
    justifyContent: 'stretch',
    '@media (max-width: 992px)': {
      flexDirection: 'column'
    }
  },
  teamWorkImgWrapper: {
    marginTop: 40,
    width: '100%',
    '@media (max-width: 992px)': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  teamWorkImg: {
    width: 525,
    '@media (max-width: 992px)': {
      width: '100%'
    }
  },
  teamWorkParaWrapper: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 90,
    marginLeft: 30,
    '@media (max-width: 992px)': {
      marginLeft: 0,
      marginTop: 40
    },
    '@media (max-width: 767px)': {
      alignItems: 'center'
    }
  },
  teamWorkPara: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: '0.38px',
    color: `${Colors.text.titleColorTwo}`,
    '@media (max-width: 767px)': {
      fontSize: 14,
      textAlign: 'center'
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  buttonOne: {
    padding: 25,
    width: '100%',
    maxWidth: 230,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Colors.bgGreen}`,
    color: `${Colors.white}`,
    borderRadius: '23px',
    fontWeight: '700',
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    border: '1px solid transparent',
    '@media (max-width: 992px)': {
      fontWeight: '600'
    }
  },
  teamImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamImage: {
    width: '100%',
    maxWidth: 160
  },
  teamInfoCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 350,
    borderRadius: 31,
    boxShadow: '0 18px 20px 0 rgb(0 0 0 / 6%)',
    backgroundColor: `${Colors.white}`,
    padding: 23,
    marginTop: '-53px'
  },
  teamMemberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: `${Colors.text.principleTitle}`,
    lineHeight: '1.33em',
    marginBottom: 10
  },
  teamMemberTitle: {
    fontSize: 15,
    fontWeight: 500,
    textTransform: 'uppercase',
    color: `${Colors.text.principleTitle}`,
    lineHeight: '1.67em',
    marginBottom: 10
  },
  teamMemberDesc: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
    color: `${Colors.text.principleTitle}`,
    lineHeight: '1.75em'
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
