import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppButton, AppSafeView, CartItem, HomeHeader, TotalView } from "../../components";
import { EmptyCart } from "./EmptyCart";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const { navigate } = useNavigation()
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <FlatList
      data={}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => (
        <CartItem { ...item } />
      )}
      showsVerticalScrollIndicator={false}
       />
       <TotalView />
       <AppButton title="Continue" onPress={() => navigate('CheckoutScreen')} />
    </AppSafeView>
  );
};

export { CartScreen };

const styles = StyleSheet.create({});
