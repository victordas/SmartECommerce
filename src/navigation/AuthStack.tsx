import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen, SignUpScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="SignInScreen" component={SignInScreen}></Screen>
            <Screen name="SignUpScreen" component={SignUpScreen}></Screen>
        </Navigator>
    )
}

export { AuthStack }