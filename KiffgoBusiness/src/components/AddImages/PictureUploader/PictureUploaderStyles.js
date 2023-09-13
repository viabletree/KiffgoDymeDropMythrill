// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../../theme";

export default StyleSheet.create({
  imageWrap: {
    width: "90px",
    height: "90px",
    marginRight: "10px",
    position: "relative",
    borderRadius: "3px",
    overflow: "hidden"
  },
  imageWrapImage: {
    width: "100%"
  },
  removeImage: {
    position: "absolute",
    top: 3,
    right: 3,
    color: Colors.offBlack,
    fontSize: "17px",
    textAlign: "center",
    lineHeight: "1.5",
    cursor: "pointer"
  },
  filesInput: {
    transition: "outline-offset .15s ease-in-out, background-color .15s linear",
    padding: "90px 0 0 0",
    textAlign: "center",
    height: "90px",
    margin: 0,
    marginRight: "10px",
    width: "100%",
    borderRadius: "3px",

    ":disabled": {
      outline: `1px dashed ${Colors.darkGrey}`
    },

    ":focus": {
      outline: `1px solid ${Colors.darkGrey}`,
      transition:
        "outline-offset .15s ease-in-out, background-color .15s linear"
    }
  },

  files: {
    position: "relative",

    height: "90px",
    width: "90px",
    ":after": {
      pointerEvents: "none",
      position: "absolute",
      top: "60px",
      left: 0,
      width: "50px",
      right: 0,
      height: "56px",
      content: '""',
      display: "block",
      margin: "0 auto",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat"
    }
  },

  addImage: {
    ":before": {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      width: "35px",
      height: "28px",
      lineHeight: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      content: '" + "',
      fontSize: "50px",
      textAlign: "center",
      pointerEvents: "none"
    }
  },

  color_input: { backgroundColor: "#f1f1f1" },
  imagesWrap: {
    display: "flex"
  },
  inputWrap: {
    marginRight: "10px",
    borderRadius: "3px",
    border: `1px solid ${Colors.grey2}`,
    position: "relative"
  },
  loaderWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  parentWrapper: {
    position: "relative"
  }
});
