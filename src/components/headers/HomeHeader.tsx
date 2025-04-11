import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppColors } from "../../styles";
import { s, vs } from "react-native-size-matters";
import { IMAGES } from "../../constants";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.appLogo} style={styles.logo} 
      />
    </View>
  );
};

export { HomeHeader };

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: vs(10),
  },
  logo: {
    height: vs(40),
    width: s(40),
    tintColor: AppColors.white
  },
});
