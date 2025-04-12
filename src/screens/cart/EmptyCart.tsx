import { StyleSheet, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppButton, AppText } from "../../components";
import { AppColors, AppFonts } from "../../styles";
import App from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EmptyCart = () => {
  const { navigate } = useNavigation();
  const { container, subTitle, title, icon } = styles;
  return (
    <View style={container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={AppColors.primary}
        style={icon}
      />
      <AppText style={title}>Your cart is empty</AppText>
      <AppText style={subTitle}>
        Browse our product and find something you like
      </AppText>
      <AppButton title="Start shopping" onPress={() => navigate("Home")} />
    </View>
  );
};

export { EmptyCart };

const styles = StyleSheet.create({
  button: {
    width: "80%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
  subTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    textAlign: "center",
    marginBottom: vs(20),
    color: AppColors.medGray,
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
});
