import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AppButton,
  AppSafeView,
  CartItem,
  HomeHeader,
  TotalView,
} from "../../components";
import { EmptyCart } from "./EmptyCart";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  removeProductFromCart,
  RootState,
} from "../../store";

const CartScreen = () => {
  const { navigate } = useNavigation();
  const { cartItems } = useSelector((state: RootState) => state.cartRecucer);
  const dispatch = useDispatch();

  const totalShipping = cartItems.reduce(
    (totalShipping, { shippingCharge }) => totalShipping + shippingCharge,
    0
  );
  const totalTax = cartItems.reduce(
    (totalShipping, { price, taxRate }) =>
      totalShipping + price * (taxRate / 100),
    0
  );
  const totalPrice = cartItems.reduce(
    (totalPrice, { price }) => totalPrice + price,
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
          <CartItem
            {...item}
            onDecreasePress={() => {
              dispatch(removeItemFromCart(item));
            }}
            onDeletePress={() => {
              dispatch(removeProductFromCart(item));
            }}
            onIncreasePress={() => {
              dispatch(removeItemFromCart(item));
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <TotalView {...totalViewValues} />
      <AppButton title="Continue" onPress={() => navigate("CheckoutScreen")} />
    </AppSafeView>
  ) : (<EmptyCart />);
};

export { CartScreen };

const styles = StyleSheet.create({});
