// @flow
import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  vehicleImg: {
    width: "140px",
    height: "130px"
  },
  textCenter: {
    "@media (max-width: 400px)": {
      textAlign: "center"
    }
  },
  vehicleImgWidth: { width: "155px" }
});
