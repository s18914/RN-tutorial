import React, { FunctionComponent } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import style from "./style";
import { ProfileTabsNavigation } from "../../navigation/MainNavigation";

interface ProfileProp {
  navigation: any;
}

const Profile: FunctionComponent<ProfileProp> = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView contentContainerStyle={globalStyle.flexGrow}>
          <View style={style.profileImageContainer}>
            <View style={style.profileImageContent}>
              <Image
                style={style.profileImage}
                source={require("../../assets/images/default_profile.png")}
              />
            </View>
          </View>
          <Text style={style.userName}>Emmanuel Robertsen</Text>
          <View style={style.statContainer}>
            <View>
              <Text style={style.statAmount}>45</Text>
              <Text style={style.statType}>Following</Text>
            </View>
            <View style={style.statBorder} />
            <View>
              <Text style={style.statAmount}>30M</Text>
              <Text style={style.statType}>Followers</Text>
            </View>
            <View style={style.statBorder} />
            <View>
              <Text style={style.statAmount}>100</Text>
              <Text style={style.statType}>Posts</Text>
            </View>
          </View>
          <View style={globalStyle.flex}>
            <ProfileTabsNavigation />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;
