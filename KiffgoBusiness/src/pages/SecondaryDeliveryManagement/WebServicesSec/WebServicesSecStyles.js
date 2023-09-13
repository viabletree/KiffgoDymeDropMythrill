// @flow
import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  vehicleSection: {
    position: "relative",
    overflow: "hidden",
    margin: "100px 0 100px 0"
  },
  vehiclesCol: {
    position: "static",
    "@media (max-width: 992px)": {
      padding: "0"
    }
  },
  vehiclesImg: {
    position: "absolute",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
    width: "52%",
    "@media (max-width: 992px)": {
      width: "100%",
      position: "static",
      marginTop: "20px"
    }
  },
  serviceCol: {
    padding: "60px 30px 60px 15px",
    backgroundColor: "#77f1bd",
    position: "relative",
    ":before": {
      content: "''",
      display: "block",
      position: "absolute",
      top: "0",
      right: " 100%",
      height: "100%",
      width: "50vw",
      background: "rgb(71,200,145)",
      background:
        "linear-gradient(90deg, rgba(71,200,145,1) 73%, rgba(119,241,189,1) 90%)"
    },
    "@media (max-width: 992px)": {
      padding: "30px 15px"
    }
  },
  marginBottoms: {
    marginBottom: "100px",
    "@media (max-width: 992px)": {
      marginBottom: "0"
    }
  }
});
