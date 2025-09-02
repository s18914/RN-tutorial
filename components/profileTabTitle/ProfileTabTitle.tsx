import { Text } from "react-native";
import style from "./style";
import { FunctionComponent } from "react";

interface ProfileTabTitleProps {
  title: string;
  isFocused: boolean;
}

const ProfileTabTitle: FunctionComponent<ProfileTabTitleProps> = ({
  title,
  isFocused,
}) => {
  return (
    <Text style={[style.title, !isFocused && style.titleNotFocused]}>
      {title}
    </Text>
  );
};

export default ProfileTabTitle;
