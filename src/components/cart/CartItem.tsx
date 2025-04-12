import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppText } from "../texts/AppText";
import { AppColors, AppFonts } from "../../styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

interface CartItemProps {
  title: string;
  price: number;
  imageUrl: string;
  qty: number;
  onDeletePress: () => void;
  onIncreasePress: () => void;
  onDecreasePress: () => void;
}

const CartItem = (cartItemProps: CartItemProps) => {
  const {
    container,
    deleteButton,
    deleteButtonContainer,
    deleteText,
    detailContainer,
    iconButton,
    image,
    imageContainer,
    priceStyle,
    qtyContainer,
    textQty,
    titleStyle,
  } = styles;

  const {
    imageUrl,
    onDecreasePress,
    onDeletePress,
    onIncreasePress,
    price,
    qty,
    title,
  } = cartItemProps;
  return (
    <View style={container}>
      {/** Image container */}
      <View style={imageContainer}>
        <Image
          style={image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      {/** Detail container */}
      <View style={detailContainer}>
        <AppText style={titleStyle}>{title}</AppText>
        <AppText style={priceStyle}>{price}</AppText>
        <View style={qtyContainer}>
          <Pressable style={iconButton} onPress={onIncreasePress}>
            <FontAwesome name="plus" size={s(10)} color={AppColors.primary} />
          </Pressable>
          <AppText style={textQty}>{qty}</AppText>
          <Pressable style={iconButton} onPress={onDecreasePress}>
            <FontAwesome name="minus" size={s(10)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>
      {/** Delete button container */}
      <View style={deleteButtonContainer}>
        <Pressable style={deleteButton} onPress={onDeletePress}>
          <AntDesign name="delete" size={s(14)} color={AppColors.redColor} />
          <AppText style={deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export { CartItem };

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  deleteText: {
    marginLeft: s(7),
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    fontSize: s(12),
    marginTop: vs(3),
  },
  detailContainer: {
    flex: 3.5,
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.lightGray,
    padding: s(5),
    height: s(20),
    width: s(20),
    borderRadius: s(10),
  },
  image: {
    height: s(80),
    width: s(80),
    resizeMode: "contain",
    borderRadius: s(5),
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  priceStyle: {
    fontSize: s(16),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginVertical: vs(5),
  },
  qtyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: s(1),
    width: s(80),
    paddingVertical: vs(5),
  },
  textQty: {
    flex: 1,
    textAlign: "center",
    color: AppColors.primary,
  },
  titleStyle: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
    marginTop: vs(5),
  },
});
