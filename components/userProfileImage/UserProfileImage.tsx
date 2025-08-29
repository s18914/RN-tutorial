import React from "react";
import { Image, View } from "react-native";
import style from "./style";
import { FunctionComponent } from "react";

interface UserProfileImageProps {
  profileImage: any;
  imageDimensions: number;
}

const UserProfileImage: FunctionComponent<UserProfileImageProps> = ({
  profileImage,
  imageDimensions,
}) => {
  return (
    <View style={[style.userImageContainer, { borderRadius: imageDimensions }]}>
      <Image
        source={profileImage}
        style={{ width: imageDimensions, height: imageDimensions }}
      />
    </View>
  );
};

export default UserProfileImage;
