import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppSafeView, HomeHeader } from "../../components";

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
    </AppSafeView>
  );
};

export { ProfileScreen };

const styles = StyleSheet.create({});
