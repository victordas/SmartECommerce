import FlashMessage, { showMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import { MainAppStack } from "./src/navigation";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

export default function App() {

  const [ fontsLoaded ] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  })

  if(!fontsLoaded) {
    return <ActivityIndicator size={'large'} />
  }

  return (
    <NavigationContainer>
      <FlashMessage position={"top"} />
      <MainAppStack />
    </NavigationContainer>
  );
}
