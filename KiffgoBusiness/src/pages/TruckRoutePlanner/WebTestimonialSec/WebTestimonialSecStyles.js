// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../../theme";

export default StyleSheet.create({
  techSection: {
    backgroundColor: `${Colors.bgGreen}`,
    marginTop: "50px",
    paddingBottom: "180px",
    "@media (max-width: 992px)": {
      marginTop: "30px"
    }
  },
  sliderSection: {
    marginTop: "-120px"
  }
});
