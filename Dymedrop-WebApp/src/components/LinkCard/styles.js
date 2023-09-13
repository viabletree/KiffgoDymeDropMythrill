// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  rightLeftCardContainer: {
    background: Colors.white,
    width: "100%",
    padding: "16px 16px 20px 16px",
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },

  rightLeftCardView1: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
  },

  image: {
    width: 64,
    borderRadius: 8,
    height: 64,
    objectFit: "cover",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 1.17,
    wordBreak: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },

  description: {
    fontSize: 14,
    lineHeight: 1.29,
    marginBottom: 0,
    wordBreak: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },

  buttonMainView: {
    display: "flex",
    alignItems: "center",
    marginTop: 15,
    paddingTop: 22,
    borderTop: "1px solid #3332401a",
    justifyContent: "space-between",
  },

  buttonView: {
    marginLeft: 10,
  },

  button: {
    borderRadius: 8,
    fontSize: 13,
    textAlign: "center",
    color: "#156bf9",
    background: "#f0f3f5",
    lineHeight: 1.14,
    padding: "8px 10px",
    textDecoration: "none",
    fontWeight: "600",
  },

  topCardContainer: {
    width: "100%",
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  topCardBackground: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  topCardView1: {
    background:
      "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.3), rgba(0,0,0,0))",
    padding: "16px",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
  },

  bottomCardContainer: {
    width: "100%",
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  topCardButtonMainView: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    background: Colors.white,
    height: 80,
    padding: "5px 16px",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "space-between",
  },

  bottomCardView1: {
    background: Colors.white,
    height: 96,
    padding: "10px 16px",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    display: "flex",
    alignItems: "center",
  },

  bottomCardBackground: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flex: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  BottomCardButtonMainView: {
    background:
      "linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,.3) , rgba(0,0,0,.7))",
    padding: "16px 16px 20px 16px",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    display: "flex",
    alignItems: "flex-end",
    height: "100%",
    justifyContent: "space-between",
  },

  bottomCardDescription: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 1.29,
    marginBottom: -7,
  },
});
