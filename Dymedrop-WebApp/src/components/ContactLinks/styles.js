// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    overflowX: "auto",
    overflowStyle: "none",
    padding: "0 20px",

    "::-webkit-scrollbar": {
      display: "none",
    },
  },

  img: {
    marginTop: 10,
    marginBottom: 10,
    width: 56,
  },
});
