import { StyleSheet, View } from "react-native";
import React from "react";
import { AppColors, commonStyles } from "../../styles";
import { s, vs } from "react-native-size-matters";
import { AppText } from "../texts/AppText";
import { OrderHistoryItem } from "../../models";

const OrderHistoryItemView = (orderItem: OrderHistoryItem) => {
  const { container, detailStyle, separator } = styles;
  const { orderTotal, createdAt } = orderItem;
  return (
    <View style={container}>
      <AppText
        variant="bold"
        style={{
          fontSize: s(18),
          textTransform: "capitalize",
        }}
      >
        Order Datails
      </AppText>
      <View style={separator}></View>
      <View style={detailStyle}>
        <AppText>Order Total:</AppText>
        <AppText>$ {orderTotal.toFixed(2)}</AppText>
      </View>
      <View style={detailStyle}>
        <AppText>Order Date:</AppText>
        <AppText>{createdAt.toISOString().split('T')[0]}</AppText>
      </View>
    </View>
  );
};

export { OrderHistoryItemView };

const styles = StyleSheet.create({
  container: {
    ...commonStyles,
    padding: s(8),
    borderRadius: 10,
    borderColor: AppColors.blueGray,
    borderWidth: 1
  },
  detailStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(5)
  },
  separator: {
    height: vs(1),
    width: "100%",
    backgroundColor: AppColors.primary,
    marginVertical: vs(5),
  },
});
