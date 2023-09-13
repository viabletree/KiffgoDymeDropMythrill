// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  profileBox: {
    position: "relative"
  },
  profielAvatar: {
    width: "45px",
    height: " 45px",
    borderRadius: "50%",
    backgroundColor: `${Colors.kgDarkGreen} `,
    fontWeight: "600",
    color: `${Colors.white} `,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    float: "right",
    position: "relative",
    marginRight: "40px",
    cursor: "pointer",
    zIndex: "1",
    ":before": {
      content: "''",
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: `8px solid ${Colors.white}`,
      position: "absolute",
      right: "-25px"
    }
  },

  dropDrownWrap: {
    backgroundColor: `${Colors.white} `,
    position: "absolute",
    width: "100%",
    left: "0",
    right: "0",
    top: "58px",
    border: `1px solid  ${Colors.mercury}`,
    zIndex: "99"
  },
  dropDrownItem: {
    padding: "15px 15px",
    borderBottom: `1px solid ${Colors.alto}`,
    cursor: "pointer",
    ":last-child": {
      borderBottom: "none"
    },
    ":hover": {
      backgroundColor: `${Colors.offWhite3} `
    }
  },
  profileWrap: {
    display: "flex",
    alignItems: "center",
    "@media (min-width: 992px)": {
      marginLeft: '40%',
    }
  },
  userName: {
    color: `${Colors.white}`,
    fontWeight: "600",
    marginRight: "20px"
  },
  darkTheme: {
    color: `${Colors.darkBrown}`,
    ":before": {
      borderTop: `8px solid ${Colors.darkBrown} !important`
    }
  },
  greenColor: {
    backgroundColor: `${Colors.bgGreen}`
  },
  userFullName: {
    "@media (max-width: 992px)": {
      display: "none"
    }
  }
});
