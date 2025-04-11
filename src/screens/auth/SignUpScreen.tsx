import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  AppButton,
  AppSafeView,
  AppText,
  AppTextInput,
} from "../../components";
import { AppColors, sharedPaddingHorizontal } from "../../styles";
import { IMAGES } from "../../constants";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const { container, appName, logo, signInButton } = styles;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { navigate } = useNavigation()
  return (
    <AppSafeView style={container}>
      <Image source={IMAGES.appLogo} style={logo} />
      <AppTextInput placeholder="User Name" onChangeText={setUserName} />
      <AppTextInput placeholder="Email" onChangeText={setEmail} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppText style={appName}>Smart E-Commerce</AppText>
      <AppButton title="Create New Account" onPress={() => {}} />
      <AppButton
        title="Sign in"
        style={signInButton}
        textColor={AppColors.primary}
        onPress={() => navigate('SignInScreen')}
      />
    </AppSafeView>
  );
};

export { SignUpScreen };

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
