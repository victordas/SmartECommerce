import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { MainAppBottomTabs } from "./MainAppBottomTabs";

const { Navigator, Screen } = createStackNavigator();

const MainAppStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="AuthStack" component={AuthStack} />
      <Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
    </Navigator>
  );
};

export { MainAppStack };
