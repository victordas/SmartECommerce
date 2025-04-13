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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../config";
import { showMessage } from "react-native-flash-message";

const signUpSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email is not valid"
    ),

  username: yup
    .string()
    .required("Full name is required")
    .min(3, "Name must be minimum three characters long")
    .matches(/^[a-zA-Z' ]*$/, "Only alphabets are allowed"),

  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password should be minimum 7 characters long")
    .max(20, "Password cannot be more than 20 characters long"),
});

type SignUpFormDataType = yup.InferType<typeof signUpSchema>;

const SignUpScreen = () => {
  const { container, appName, logo, signInButton } = styles;
  const { navigate } = useNavigation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const signUp = async (formData: SignUpFormDataType) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        formData.email,
        formData.password
      );
      showMessage({
        type: "success",
        message: "User created",
      });
      navigate("MainAppBottomTabs");
      return userCredential.user;
    } catch (error: any) {
      let message = "";
      if (error.code === "auth/email-already-in-use") {
        message = "This email is already in use";
      } else if (error.code === "auth/invalid-email") {
        message = "This email is invalid";
      } else if (error.code === "auth/weak-password") {
        message = "The password is too weak";
      } else {
        message = "An error occured during sign-up";
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
        placeholder="User Name"
        control={control}
        name={"username"}
      />
      <AppTextInputController
        placeholder="Email"
        control={control}
        name={"email"}
      />
      <AppTextInputController
        control={control}
        name={"password"}
        placeholder="Password"
        secureTextEntry
      />
      <AppText style={appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Create New Account"
        onPress={() => {
          handleSubmit(signUp)();
        }}
      />
      <AppButton
        title="Sign in"
        style={signInButton}
        textColor={AppColors.primary}
        onPress={() => navigate("SignInScreen")}
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
