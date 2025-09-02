import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Routes } from "./Routes";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import { Text, View } from "react-native";
import ProfileTabTitle from "../components/profileTabTitle/ProfileTabTitle";
import ProfileTabContent from "../components/profileTabContent/ProfileTabContent";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}
    >
      <ProfileTabs.Screen
        name={"Tab1"}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={"Photos"} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={"Tab2"}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={"Videos"} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={"Tab3"}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={"Saved"} />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      //initialRouteName={Routes.Home}
    >
      <Stack.Screen name={"Drawer"} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
    //screenOptions={{ header: () => null, headerShown: false }}
    >
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
