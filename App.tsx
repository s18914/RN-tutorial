import { FunctionComponent, useEffect, useState } from "react";
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
import userStories, { userPosts, UserStoryType } from "./data";
import UserStory from "./components/userStory/UserStory";
import UserPost from "./components/userPost/UserPost";

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
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStoryType[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  //posts
  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (
    database: UserStoryType[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [] as UserStoryType[];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <FlatList
            ListHeaderComponent={
              <>
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
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                      if (isLoadingUserStories) {
                        return;
                      }
                      setIsLoadingUserStories(true);
                      const contentToAppend = pagination(
                        userStories,
                        userStoriesCurrentPage + 1,
                        userStoriesPageSize,
                      );
                      if (contentToAppend.length > 0) {
                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                        setUserStoriesRenderedData((prev) => [
                          ...prev,
                          ...contentToAppend,
                        ]);
                      }
                      setIsLoadingUserStories(false);
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={userStoriesRenderedData}
                    renderItem={({ item }) => (
                      <UserStory
                        key={"userStory" + item.id}
                        firstName={item.firstName}
                        profileImage={item.profileImage}
                      />
                    )}
                  />
                </View>
              </>
            }
            data={userPosts}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={globalStyle.userPostContainer}>
                <UserPost
                  firstName={item.firstName}
                  lastName={item.lastName}
                  image={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bookmarks={item.bookmarks}
                  profileImage={item.profileImage}
                  location={item.location}
                />
              </View>
            )}
          />
        </View>
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
