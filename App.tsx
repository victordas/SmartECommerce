import FlashMessage, { showMessage } from "react-native-flash-message";
import { AppSafeView, AppText } from "./src/components";

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />
      <AppSafeView>
        <AppText variant="medium">Hello SEC!</AppText>
        <AppText variant="bold">Hello Bold SEC!</AppText>
        <AppText
          onPress={() => {
            showMessage({
              message: "Hello World (◕‿◕)",
              color: "yellow",
              type: "success",
            });
          }}
          variant="bold"
        >
          Hello Flash!
        </AppText>
      </AppSafeView>
    </>
  );
}
