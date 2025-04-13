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
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const { navigate } = useNavigation()
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
        <ProfileSectionButton title={"Logout"} onPress={() => { navigate('SignInScreen') }} />
      </View>
    </AppSafeView>
  );
};

export { ProfileScreen };

const styles = StyleSheet.create({});
