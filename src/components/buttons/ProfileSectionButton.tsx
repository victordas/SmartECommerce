import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppText } from "../texts/AppText";
import { AppColors, AppFonts } from "../../styles";
import { s, vs } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";

interface ProfileSectionButtonProps {
  onPress?: () => void;
  title: string;
}

const ProfileSectionButton = (
  profileSectionButtonProps: ProfileSectionButtonProps
) => {
  const { onPress, title } = profileSectionButtonProps;
  const { container, iconContainer, textContainer, textTitle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <View style={textContainer}>
        <AppText style={textTitle}>{title}</AppText>
      </View>
      <View style={iconContainer}>
        <MaterialIcons
          name="arrow-forward-ios"
          size={s(14)}
          color={AppColors.medGray}
        />
      </View>
    </TouchableOpacity>
  );
};

export { ProfileSectionButton };

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: AppColors.lightGray,
    paddingBottom: vs(10),
    marginTop: vs(14),
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  iconContainer: {},
  textContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
    marginHorizontal: s(8),
  },
});
