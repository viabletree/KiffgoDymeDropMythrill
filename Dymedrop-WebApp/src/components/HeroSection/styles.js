// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 20px",
    // width: 300,
    width: "100%",
    margin: "auto",

    "@media (max-width: 330px)": {
      width: "auto",
    },
  },

  img: {
    margin: "10px 8px",
    width: 96,
    height: 96,
    borderRadius: 100,
    objectFit: "cover",
  },

  heading: {
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 1.1,
    color: Colors.white,
    textAlign: "center",
    width: "100%",
    overflowY: "hidden",
    overflowX: "auto",
    padding: "0 15px",

    "::-webkit-scrollbar": {
      display: "none",
    },
  },

  description: {
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 1.29,
    color: Colors.white,
    textAlign: "center",
    width: "100%",
    overflowY: "hidden",
    overflowX: "auto",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
});
