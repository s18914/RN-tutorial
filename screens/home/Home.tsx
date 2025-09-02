import { FunctionComponent, useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import userStories, {
  userPosts,
  UserPostType,
  UserStoryType,
} from "../../data";
import UserStory from "../../components/userStory/UserStory";
import UserPost from "../../components/userPost/UserPost";
import { scaleFontSize } from "../../scaling";
import { NavigationContainer } from "@react-navigation/native";

function Home() {
  const [screenData, setScreenData] = useState(Dimensions.get("screen"));
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStoryType[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  //posts
  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<
    UserPostType[]
  >([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (
    database: UserPostType[] | UserStoryType[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialPostData = pagination(userPosts, 1, userPostsPageSize);
    //@ts-ignore
    setUserPostsRenderedData(getInitialPostData);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={style.header}>
                  <Title title={"Let’s Explore"} />
                  <TouchableOpacity style={style.messageIcon}>
                    <FontAwesomeIcon
                      icon={faEnvelope as IconProp}
                      size={scaleFontSize(20)}
                      color={"#898DAE"}
                    />
                    <View style={style.messageNumberContainer}>
                      <Text style={style.messageNumber}>2</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={style.userStoryContainer}>
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
            data={userPostsRenderedData}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingUserPosts) {
                return;
              }
              setIsLoadingUserPosts(true);
              const contentToAppend = pagination(
                userPosts,
                userPostsCurrentPage + 1,
                userPostsPageSize,
              );
              if (contentToAppend.length > 0) {
                setUserPostsCurrentPage(userPostsCurrentPage + 1);
                //@ts-ignore
                setUserPostsRenderedData((prev) => [
                  ...prev,
                  ...contentToAppend,
                ]);
              }
              setIsLoadingUserPosts(false);
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={style.userPostContainer}>
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

export default Home;
