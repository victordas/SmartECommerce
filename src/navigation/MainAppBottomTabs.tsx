import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartScreen, HomeScreen, ProfileScreen } from "../screens";
import { AppColors } from "../styles";
import { s, vs } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { IS_ANDROID } from "../constants";

const { Navigator, Screen } = createBottomTabNavigator();

const MainAppBottomTabs = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarStyle: IS_ANDROID && {
            height: vs(50)
        },
        tabBarLabelStyle: {
            marginTop: vs(8),
            fontSize: s(12)
        }
      }}
    >
      <Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, size}) => (
            <Ionicons name="home" size={size} color={color} />
        ),
        title: 'Home'
      }} />
      <Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: ({ color, size}) => (
            <Ionicons name="cart" size={size} color={color} />
        ),
        title: 'Cart'
      }} />
      <Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size}) => (
            <Ionicons name="person" size={size} color={color} />
        ),
        title: 'Profile'
      }} />
    </Navigator>
  );
};

export { MainAppBottomTabs };
