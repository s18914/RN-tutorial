import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../scaling";

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    fontFamily: getFontFamily("500"),
    fontSize: scaleFontSize(14),
    color: "#022150",
    marginTop: verticalScale(8),
    textAlign: "center",
  },
});

export default style;
