import { FunctionComponent } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getFontFamily } from "./assets/fonts/helper";
import Title from "./components/title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "./assets/styles/globalStyle";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import userStories from "./data";
import UserStory from "./components/userStory/UserStory";

const style = StyleSheet.create({
  text: {
    fontFamily: getFontFamily("300"),
    fontSize: 50,
  },
  text2: {
    fontFamily: getFontFamily("700"),
    fontSize: 50,
  },
});

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={globalStyle.header}>
          <Title title={"Let’s Explore"} />
          <TouchableOpacity style={globalStyle.messageIcon}>
            <FontAwesomeIcon
              icon={faEnvelope as IconProp}
              size={20}
              color={"#898DAE"}
            />
            <View style={globalStyle.messageNumberContainer}>
              <Text style={globalStyle.messageNumber}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.userStoryContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={userStories}
            renderItem={({ item }) => (
              <UserStory
                firstName={item.firstName}
                profileImage={item.profileImage}
              />
            )}
          />
        </View>
        {/* <View>
          <Title title={"Let’s Explore"} />
          <MyText name="Mila" />
          <Image
            source={require("./cake.png")}
            style={{ width: 100, height: 100 }}
          />

          <Text style={style.text}>Hello World!</Text>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
            }}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

interface MyTextProps {
  name: string;
}

const MyText: FunctionComponent<MyTextProps> = ({ name }) => {
  const onPressEventHandler = () => {
    console.log("You just pressed the text component");
  };
  return (
    <View>
      <Text onPress={onPressEventHandler} style={style.text2}>
        Hello {name}
      </Text>
    </View>
  );
};

export default App;
