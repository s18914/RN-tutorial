import React, { FunctionComponent } from "react";
import { View, Text, Image } from "react-native";
import UserProfileImage from "../userProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBookmark,
  faHeart,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { horizontalScale, scaleFontSize, verticalScale } from "../../scaling";

interface UserPostProps {
  firstName: string;
  lastName: string;
  location?: string;
  image: any;
  profileImage: any;
  likes: number;
  comments: number;
  bookmarks: number;
}

const UserPost: FunctionComponent<UserPostProps> = (props) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={horizontalScale(48)}
          />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}> {props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH as IconProp}
          size={scaleFontSize(24)}
          color={"#79869F"}
        />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{ marginLeft: verticalScale(10), flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesomeIcon icon={faHeart as IconProp} color={"#79869F"} />
          <Text style={{ marginLeft: verticalScale(3), color: "#79869F" }}>
            {props.likes}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: verticalScale(27) }}>
          <FontAwesomeIcon icon={faMessage as IconProp} color={"#79869F"} />
          <Text style={{ marginLeft: verticalScale(3), color: "#79869F" }}>
            {props.comments}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: verticalScale(27) }}>
          <FontAwesomeIcon icon={faBookmark as IconProp} color={"#79869F"} />
          <Text style={{ marginLeft: verticalScale(3), color: "#79869F" }}>
            {props.bookmarks}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
