// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../theme';

export default StyleSheet.create({
  heroSection: {
    position: 'relative',
    height: '100%',
    paddingTop: '30px',
    // padding: "200px 0 330px 0",
    '@media (max-width: 992px)': {
      height: 'auto'
    },
    '@media (max-width: 767px)': {
      paddingBottom: '20px',
      paddingTop: '0'
    }
  },

  currencyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  currencyWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: 81
  },

  currencyWrapperStartBorder: {
    borderRadius: '20px 0 0 20px'
  },

  currencyWrapperEndBorder: {
    borderRadius: '0 20px 20px 0'
  },

  switcherBtn: {
    backgroundColor: Colors.white,
    width: 97,
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '8px',
    border: '1px solid #f0f2f6',
    color: '#bfbfbf',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out'
  },

  selectedCurencyColor: {
    backgroundColor: Colors.bgGreen,
    width: 97,
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '8px',
    border: 'transparent',
    color: Colors.white,
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out'
  },

  container: {
    maxWidth: '1360px',
    margin: '40px auto'
  },

  pricingContainer: {
    borderRadius: 19,
    boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.09)',
    backgroundColor: Colors.white,
    margin: '20px 0',
    paddingBottom: 30
  },

  pricingTitleWrapper: {
    padding: '8px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '19px 19px 0 0',
    boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.09)'
  },

  pricingTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: Colors.white
  },

  pricingImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    minHeight: 220
  },

  pricingImg: {
    width: 210
  },

  pricingAmountWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 96,
    padding: '0 48px',
    '@media (max-width: 1200px)': {
      padding: '0 24px'
    }
  },

  pricingAmount: {
    fontSize: 40,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letteSpacing: 'normal',
    textAlign: 'center',
    color: Colors.black
  },

  perMonthText: {
    fontSize: 20,
    marginTop: '-5px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letteSpacing: 'normal',
    textAlign: 'center',
    color: Colors.black,
    opacity: '0.41',
    display: 'block'
  },

  pricingDescWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    padding: '0 48px',
    marginTop: 20,
    height: 125,
    '@media (max-width: 1200px)': {
      padding: '24px'
    }
  },

  pricingTasksWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    padding: '0 48px',
    margin: '20px 0',
    '@media (max-width: 1200px)': {
      padding: '24px'
    }
  },

  grrenArrow: {
    marginRight: 5
  },

  pricingTasks: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: Colors.black
  },

  pricingDesc: {
    fontSize: 17,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: Colors.black,
    marginBottom: 20,
    '@media (max-width: 1200px)': {
      textAlign: 'center',
      fontSize: 16
    },
    '@media (max-width: 767px)': {
      height: 'auto'
    }
  },

  mostPopBtnWrapper: {
    padding: '12px 0',
    height: 35,
    '@media (max-width: 767px)': {
      height: 'auto'
    }
  },

  buttonMostPop: {
    width: '100%',
    padding: '4px 0',
    background: '#ff2f9f',
    color: Colors.white,
    letterSpacing: '-0.6px',
    fontWeight: 'bold',
    fontSize: 16,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    border: 'solid 3px #ff2f9f',
    cursor: 'auto',
    margin: 'auto',
    '@media (max-width: 1200px)': {
      fontSize: 17,
      padding: 5
    }
  },

  heartIcon: {
    width: 14,
    marginRight: 9
  },

  pricingSection: {
    position: 'relative',
    paddingTop: '0',
    paddingBottom: '90px',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 767px)': {
      paddingBottom: '50px'
    }
  },
  lineHeight12: {
    textAlign: 'center'
  },
  PricingContainerFull: {
    minHeight: '810px',
    background: Colors.white,
    borderRadius: 19,
    boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.09)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '54px 0 40px 40px',
    marginTop: 90,
    Height: 735,
    '@media (max-width: 992px)': {
      padding: '54px 0 74px',
      alignItems: 'center'
    }
  },
  PricingContainer: {
    minHeight: '810px',
    background: Colors.white,
    borderRadius: 19,
    boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.09)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '54px 10px 40px 40px',
    marginTop: 90,
    '@media (max-width: 992px)': {
      padding: '54px 0 74px',
      alignItems: 'center'
    },
    '@media (max-width: 767px)': {
      marginTop: 50
    }
  },
  PriceingHead: {
    color: Colors.black,
    fontSize: 26,
    fontWeight: 700,
    marginTop: 10
  },
  PriceingPara: {
    color: Colors.black,
    fontWeight: 'normal',
    paddingTop: 30
  },
  strikeLine: {
    textDecoration: 'line-through red'
  },
  PriceingMonth: {
    fontWeight: 100,
    fontSize: 16,
    textDecoration: 'none',
    marginLeft: 5
  },
  MonthlyContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10
  },
  nowText: {
    color: '#f55858',
    paddingBottom: 13
  },
  extraContent: {
    color: '#f55858',
    paddingTop: 0,
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  redPrice: {
    fontWeight: 'bold',
    fontSize: 30
  },
  buttonOne: {
    height: '45px',
    width: '90%',
    padding: '0 20px',
    borderRadius: '23px',
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    background: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    border: 'none',
    cursor: 'pointer',
    margin: '40px auto 0',
    '@media (max-width: 1200px)': {
      marginTop: '40px !important'
    }
    // '@media (max-width: 767px)': {
    //   width: 240,
    //   fontSize: 13
    // }
  },

  buttonOneTable: {
    height: '45px',
    width: '100%',
    padding: '0 20px',
    borderRadius: '23px',
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    background: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    border: 'none',
    cursor: 'pointer',
    margin: '40px auto 0',
    '@media (max-width: 1200px)': {
      marginTop: '40px !important'
    },
    '@media (max-width: 1200px)': {
      width: '30%',
      fontSize: 13,
      display: 'inline-block'
    },
    '@media (max-width: 600px)': {
      width: '50%'
    },
    '@media (max-width: 400px)': {
      width: '70%',
      marginTop: 50,
      display: 'flex'
    }
  },
  giftIcon: {
    marginRight: 9,
    width: 13,
    height: 17
  },
  listingPricingContainer: {
    flex: 1,
    marginTop: 30,
    '@media (max-width: 767px)': {
      maxWidth: '230px'
    }
  },
  listingPricing: {
    display: 'flex',
    lineHeight: '1.33em',
    marginBottom: 20,
    '@media (max-width: 992px)': {
      fontSize: 14
    }
  },
  checkIcon: {
    marginRight: 20,
    color: Colors.bgGreen
  },
  priceTag: {
    background: '#f55858',
    position: 'absolute',
    color: Colors.white,
    transform: 'rotate(35deg)',
    padding: '11px 6px',
    right: '-13px',
    top: 100,
    fontWeight: 'bolder'
  },

  PricingMonthlyContainer: {
    minHeight: '810px'
  },
  PricingYearlyContainer: {
    minHeight: '810px'
  },
  pricingPageToggleOuterWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '20px auto 0',
    justifyContent: 'center'
  },
  pricingPageToggleText: {
    color: 'rgba(0, 0, 0, 0.47)',
    marginBottom: '0.7em',
    fontSize: 17,
    textAlign: 'center',
    '@media (max-width: 359px)': {
      fontSize: 13
    }
  },
  pricingPageToggleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pricingWrapperStartBorder: {
    borderRadius: '20px 0 0 20px'
  },
  pricingWrapperEndBorder: {
    borderRadius: '0 20px 20px 0'
  },
  selectedPricingColor: {
    backgroundColor: Colors.bgGreen,
    width: 183,
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '8px',
    border: 'transparent',
    color: Colors.white,
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
    '@media (max-width: 420px)': {
      width: '140px',
      fontSize: 13,
      textAlign: 'center'
    }
  },
  pricingSwitcherBtn: {
    backgroundColor: Colors.white,
    width: 183,
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '8px',
    border: '1px solid #f0f2f6',
    color: '#bfbfbf',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
    '@media (max-width: 420px)': {
      width: '140px',
      fontSize: 13,
      textAlign: 'center'
    }
  },
  toggleContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '20px auto 0',
    justifyContent: 'center'
  },
  billingText: {
    color: `${Colors.text.titleColorTwo}`,
    margin: '0 14px',
    fontWeight: 'bold',
    fontSize: 17,
    '@media (max-width: 359px)': {
      fontSize: 13
    }
  },
  headerWrapper: {
    minHeight: '82px',
    '@media (max-width: 767px)': {
      minHeight: '0px'
    }
  },
  listingPricingCustom: {
    display: 'flex',
    lineHeight: '1.33em',
    marginBottom: 20,
    '@media (max-width: 992px)': {
      fontSize: 14
    }
  },
  terms: {
    fontSize: '10px',
    marginTop: '15px',
    marginLeft: '10px'
  },
  buttonOneParent: {
    fontSize: '10px'
  },
  tableWrapper: {
    width: '100%'
  },
  tableData: {
    color: '#4a4747'
  }
});
