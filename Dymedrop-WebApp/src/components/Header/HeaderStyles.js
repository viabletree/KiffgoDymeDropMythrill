// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  fullContainer: {
    backgroundColor: Colors.bgGreen,
    minHeight: 70,
    padding: "0 20px 0 0",
    boxSizing: "border-box",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  },
  businessText: {
    color: Colors.white,
    fontSize: 28,
    marginLeft: 20
  },
  leftWrapper: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    borderRadius: "0 5px 5px 0px",
    background: "#282828",
    paddingRight: "20px",
    paddingLeft: "20px"
  },
  logoImage: {
    width: "45px",
    marginRight: "16px"
  },
  rightWraper: {},
  logoImageText: {
    width: "104px"
  }
});
