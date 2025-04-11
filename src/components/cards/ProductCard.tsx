import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors, AppFonts, commonStyles } from "../../styles";
import { AppText } from "../texts/AppText";
import { Ionicons } from "@expo/vector-icons";

const ProductCard = () => {
  const {
    addToCartButton,
    container,
    detailsContainer,
    imageContainer,
    image,
    priceText,
    titleText,
  } = styles;
  return (
    <View style={container}>
      {/** Add to cart button */}
      <TouchableOpacity style={addToCartButton}>
        <Ionicons name="cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>

      {/** Image UI */}
      <View style={imageContainer}>
        <Image style={image} />
      </View>

      {/** Details */}
      <View style={detailsContainer}>
        <AppText style={titleText}>Victor</AppText>
        <AppText style={priceText}>Priceless</AppText>
      </View>
    </View>
  );
};

export { ProductCard };

const styles = StyleSheet.create({
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: s(5),
    top: s(5),
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  detailsContainer: {
    flex: 1,
    paddingTop: vs(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
  priceText: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(7),
  },
});
