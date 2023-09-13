// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../theme";

export default StyleSheet.create({
  body: {
    fontSize: "16px"
  },
  container: {
    maxWidth: "1280px !important"
  },
  headingOne: {
    fontSize: "4em !important",
    fontWeight: "900",
    color: `${Colors.bgGreen}`,
    lineHeight: "1.3em"
  },
  headingTwo: {
    fontSize: "2em",
    lineHeight: "1.3em",
    fontWeight: "700",
    color: `${Colors.greyish}`
  },
  headingThree: {
    fontSize: "1.75em",
    fontWeight: "700",
    color: `${Colors.greyish}`
  },
  headingTour: {
    fontSize: "3.375em",
    color: "#8e9bb0"
  },
  whiteColorperaOne: {
    fontSize: "1.125em",
    lineHeight: "1.5"
  },
  button1: {
    padding: "8px 30px !important",
    backgroundColor: "#5edea8",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "500"
  },
  buttonTwo: {
    padding: "12px 30px !important",
    backgroundColor: "#5edea8",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "500",
    textDecoration: "none",
    display: "inline-block",
    position: "relative",
    zIndex: "999",
    ":after": {
      content: "''",
      width: "42.9px",
      height: "49px",
      transform: "rotate(-11deg)",
      borderRadius: "3px",
      backgroundColor: "#f8bd55",
      position: "absolute",
      right: "0",
      zIndex: "-99"
    }
  },
  bownColor: {
    color: "#3e3e3e"
  },

  siteHeader: {
    padding: "50px 0"
  },
  siteLogoImg: {
    maxWidth: "200px"
  },
  heroSection: {
    position: "relative",
    padding: "200px 20px 200px 0",
    ":before": {
      content: "''",
      position: "absolute",
      backgroundImage: `url(${Images.headerGraphics})`,
      width: "45%",
      display: "block",
      minHeight: "1400px",
      right: "0px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      top: "-309px",
      backgroundSize: "100% 100%"
    },
    ":after": {
      content: "''",
      backgroundImage: `url(${Images.headerGraphics})`,
      height: "30px",
      width: " 40px",
      position: "absolute",
      left: "0",
      bottom: "0",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    }
  },
  serviceImg: {
    width: "80px"
  },
  serviceCol: {
    padding: "120px 100px",
    backgroundColor: `${Colors.bgGreen}`
  },
  whiteColor: {
    color: `${Colors.white}`
  },
  siteFooter: {
    backgroundColor: `${Colors.darkBrown}`
  },
  bold: {
    fontWeight: "800",
    color: "#8e9bb0"
  },
  footerBottom: {
    backgroundColor: `${Colors.brown}`
  },
  techSection: {
    backgroundColor: `${Colors.bgGreen}`,
    marginTop: "50px"
  },
  singleSlider: {
    backgroundColor: `${Colors.white}`
  },
  submitBtn: {
    backgroundColor: `${Colors.bgGreen}`,
    borderRadius: "5px"
  }
});
