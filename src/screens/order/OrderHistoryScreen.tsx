import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppButton, AppSafeView, OrderHistoryItemView } from "../../components";
import { sharedPaddingHorizontal } from "../../styles";
import { getUserOrders } from "../../data";
import { OrderHistoryItem } from "../../models";

const OrderHistoryScreen = () => {
  const [orders, setOrders] = useState<OrderHistoryItem[]>([]);
  const fetchOrders = async () => {
    const userOrders = (await getUserOrders()) || [];
    setOrders(userOrders)
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <FlatList
          data={orders}
          keyExtractor={order => order.id}
          renderItem={({ item }) => (
            <OrderHistoryItemView
            {...item}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </AppSafeView>
  );
};

export { OrderHistoryScreen };

const styles = StyleSheet.create({});
