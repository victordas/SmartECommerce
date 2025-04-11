import { ReactNode } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { AppColors } from "../../styles";
import { IS_ANDROID } from "../../constants";

interface AppSafeViewProps {
  children: ReactNode;
  style?: ViewStyle
}
const AppSafeView = (appSafeViewProps: AppSafeViewProps) => {
  const { children, style, ...rest } = appSafeViewProps;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View {...rest} style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0
    },
    container: {
        flex: 1
    }
})

export { AppSafeView }
