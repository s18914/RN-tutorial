import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Routes } from "./Routes";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
