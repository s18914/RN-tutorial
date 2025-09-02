import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize } from "../../scaling";

const style = StyleSheet.create({
  title: {
    color: "#022150",
    fontFamily: getFontFamily("500"),
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: "#79869F",
    fontFamily: getFontFamily("400"),
  },
});

export default style;
