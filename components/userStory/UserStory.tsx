import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import style from "./style";
import UserProfileImage from "../userProfileImage/UserProfileImage";

interface UserStoryProps {
  firstName: string;
  profileImage: Object;
}

const UserStory: FunctionComponent<UserStoryProps> = ({
  firstName,
  profileImage,
}) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
