import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { verticalScale, horizontalScale, scaleFontSize } from "../../scaling";

const style = StyleSheet.create({
  userContainer: { flexDirection: "row" },
  userTextContainer: {
    justifyContent: "center",
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    color: "#000",
    fontFamily: getFontFamily("600"), //this font weight should have been a string
    fontSize: scaleFontSize(16),
  },
  location: {
    color: "#79869F",
    marginLeft: -4, //This is not really needed I just missed a space on location text right before the location prop, that is why we needed marginLeft
    fontFamily: getFontFamily("400"), //this font weight should have been a string
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: "center",
    marginVertical: verticalScale(20),
  },
  userPostContainer: {
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: verticalScale(1),
    borderBottomColor: "#EFF2F6",
  },
});

export default style;
