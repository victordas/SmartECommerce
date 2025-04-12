import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AppSafeView,
  AppText,
  HomeHeader,
  ProfileSectionButton,
} from "../../components";
import { sharedPaddingHorizontal } from "../../styles";
import { s, vs } from "react-native-size-matters";

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText
        variant="bold"
        style={{ fontSize: s(18), marginTop: vs(10) }}
      >{`Hello! ${""} `}</AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton title={"My orders"} />
        <ProfileSectionButton title={"Language"} />
        <ProfileSectionButton title={"Logout"} />
      </View>
    </AppSafeView>
  );
};

export { ProfileScreen };

const styles = StyleSheet.create({});
