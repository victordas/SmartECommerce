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
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ProfileScreen = () => {
  const { userData } = useSelector((state: RootState) => state.userReducer);
  const { navigate } = useNavigation();
  return (
    <AppSafeView>
      <HomeHeader />
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton title={"My orders"} onPress={() => {
            navigate("OrderHistoryScreen");
          }}/>
        <ProfileSectionButton title={"Language"} />
        <ProfileSectionButton
          title={"Logout"}
          onPress={() => {
            navigate("SignInScreen");
          }}
        />
      </View>
    </AppSafeView>
  );
};

export { ProfileScreen };

const styles = StyleSheet.create({});
