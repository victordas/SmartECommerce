import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { MainAppBottomTabs } from "./MainAppBottomTabs";
import { CheckoutScreen, OrderHistoryScreen } from "../screens";

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
      <Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          headerShown: true,
        }}
      />
      <Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{
          headerShown: true,
          title: 'Orders History'
        }}
      />
    </Navigator>
  );
};

export { MainAppStack };
