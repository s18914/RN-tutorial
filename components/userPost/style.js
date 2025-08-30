import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
  userContainer: { flexDirection: "row" },
  userTextContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    color: "#000",
    fontFamily: getFontFamily("600"), //this font weight should have been a string
    fontSize: 16,
  },
  location: {
    color: "#79869F",
    marginLeft: -4, //This is not really needed I just missed a space on location text right before the location prop, that is why we needed marginLeft
    fontFamily: getFontFamily("400"), //this font weight should have been a string
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: "center",
    marginVertical: 20,
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EFF2F6",
  },
});

export default style;
