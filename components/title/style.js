import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { scaleFontSize } from "../../scaling";

const style = StyleSheet.create({
  title: {
    color: "#022150",
    fontFamily: getFontFamily("600"),
    fontSize: scaleFontSize(24),
  },
});

export default style;
