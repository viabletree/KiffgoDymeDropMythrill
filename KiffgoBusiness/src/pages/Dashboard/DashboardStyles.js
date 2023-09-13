// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  loginBgColor: {
    backgroundColor: Colors.lightGreen,
    display: "flex",
    height: "calc(100vh - 70px)"
  },
  loginWraper: {
    width: "850px",
    alignItems: "center",
    margin: "auto",
    backgroundColor: Colors.white,
    border: "solid 1px #dfdfdf",
    borderRadius: "6px"
  }
});
