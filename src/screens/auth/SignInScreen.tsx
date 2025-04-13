import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  AppButton,
  AppSafeView,
  AppText,
  AppTextInput,
  AppTextInputController,
} from "../../components";
import { AppColors, sharedPaddingHorizontal } from "../../styles";
import { IMAGES } from "../../constants";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../config";
import { showMessage } from "react-native-flash-message";

const signInSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email is not valid"
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password should be minimum 7 characters long")
    .max(20, "Password cannot be more than 20 characters long"),
});

type SignInFormDataType = yup.InferType<typeof signInSchema>;

const SignInScreen = () => {
  const { container, appName, logo, signUpButton } = styles;
  const { navigate } = useNavigation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const signIn = async (formData: SignInFormDataType) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        formData.email,
        formData.password
      );
      navigate("MainAppBottomTabs");
    } catch (error: any) {
      let message = "";
      if (error.code === "auth/user-not-found") {
        message = "User not found";
      } else if (error.code === "auth/invalid-credential") {
        message = "Wrong email or password";
      } else {
        message = "An error occured during sign-in";
      }

      showMessage({
        type: "danger",
        message,
      });
    }
  };
  return (
    <AppSafeView style={container}>
      <Image source={IMAGES.appLogo} style={logo} />
      <AppTextInputController
        control={control}
        placeholder="Email"
        name={"email"}
        keyboardType={"email-address"}
      />
      <AppTextInputController
        control={control}
        placeholder="Password"
        secureTextEntry
        name={"password"}
      />
      <AppText style={appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Login"
        onPress={() => {
          handleSubmit(signIn)();
        }}
      />
      <AppButton
        title="Sign Up"
        style={signUpButton}
        textColor={AppColors.primary}
        onPress={() => navigate("SignUpScreen")}
      />
    </AppSafeView>
  );
};

export { SignInScreen };

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
  signUpButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
