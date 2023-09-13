// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../theme";

export default StyleSheet.create({
  container: {
    paddingTop: 100,

    "@media (max-width: 767px)": {
      paddingTop: 60,
    },
  },
  backgroundImageBlur: {
    "::before": {
      content: '""',
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      zIndex: -1,
      background: "rgba(0, 0, 0, 0.28)",
      backdropFilter: "blur(100px)",
    },
  },

  backgroundImage: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -2,
    height: "100%",
    width: "100%",
  },

  linkCardView: {
    width: 356,
    margin: "auto",
    padding: "10px 0",

    "@media (max-width: 380px)": {
      width: "90%",
    },
  },

  logoView: {
    textAlign: "center",
    marginTop: 48,
    marginBottom: 140,

    "@media (max-width: 767px)": {
      marginTop: 40,
    },
  },

  activatePassContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 385,
    margin: "auto",
    background: "#156bf9",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: "34px",
    borderRadius: "16px",
    padding: "12px 20px",

    "@media (max-width: 390px)": {
      width: "95%",
    },
  },

  activatePassContainer1: {
    display: "flex",
    alignItems: "center",
  },

  activatePassHeading: {
    color: Colors.white,
    fontSize: 16,
    margin: 0,

    "@media (max-width: 380px)": {
      fontSize: 14,
    },
  },

  activatePassPara: {
    color: Colors.white,
    fontSize: 14,
    margin: 0,

    "@media (max-width: 380px)": {
      fontSize: 12,
    },
  },

  activatePassImg1: {
    width: 48,

    "@media (max-width: 380px)": {
      width: 40,
    },
  },

  activatePassImg2: {
    marginLeft: 10,
    width: "7px",
    height: "12px",
  },

  activatePassImg3: {
    marginLeft: 10,
    width: "20px",
    height: "20px",
  },
});
