import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AppButton,
  AppSafeView,
  CartItemView,
  HomeHeader,
  TotalView,
} from "../../components";
import { EmptyCart } from "./EmptyCart";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
  RootState,
} from "../../store";
import { sharedPaddingHorizontal } from "../../styles";
import { vs } from "react-native-size-matters";

const CartScreen = () => {
  const { navigate } = useNavigation();
  const { cartItems } = useSelector((state: RootState) => state.cartRecucer);
  const dispatch = useDispatch();

  const totalShipping = cartItems.reduce(
    (totalShipping, { shippingCharge, qty }) => totalShipping + (shippingCharge * qty),
    0
  );
  const totalTax = cartItems.reduce(
    (totalShipping, { price, taxRate, qty }) =>
      totalShipping + (price * (taxRate / 100) * qty),
    0
  );
  const totalPrice = cartItems.reduce(
    (totalPrice, { sum }) => totalPrice + sum,
    0
  );

  const totalViewValues = {
    totalPrice,
    totalShipping,
    totalTax,
    orderTotal: totalPrice + totalShipping + totalTax,
  };

  return cartItems.length ? (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <CartItemView
            {...item}
            onDecreasePress={() => {
              dispatch(removeItemFromCart(item));
            }}
            onDeletePress={() => {
              dispatch(removeProductFromCart(item));
            }}
            onIncreasePress={() => {
              dispatch(addItemToCart(item));
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <TotalView {...totalViewValues} />
      <AppButton title="Continue" onPress={() => navigate("CheckoutScreen")} style={{width: "80%", marginBottom: vs(8)}} />
    </AppSafeView>
  ) : (<EmptyCart />);
};

export { CartScreen };

const styles = StyleSheet.create({});
