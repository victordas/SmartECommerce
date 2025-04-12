import { StyleSheet, View } from "react-native";
import React from "react";
import { AppColors } from "../../styles";
import { s, vs } from "react-native-size-matters";
import { AppText } from "../texts/AppText";

const OrderHistoryItem = () => {
  const { detailStyle, separator } = styles;
  return (
    <View>
        <AppText variant="bold" style={{
            fontSize: s(16),
            textTransform: 'capitalize'
        }}>Order Datails</AppText>
      <View style={separator}></View>
      <View style={detailStyle}>
        <AppText>Order Total:</AppText>
        <AppText>`$ ${''}`</AppText>
      </View>
      <View style={detailStyle}>
        <AppText>Order Total:</AppText>
        <AppText>`$ ${''}`</AppText>
      </View>
    </View>
  );
};

export { OrderHistoryItem };

const styles = StyleSheet.create({
    detailStyle: {
        justifyContent: 'space-between'
    },
  separator: {
    height: vs(1),
    width: "100%",
    backgroundColor: AppColors.primary,
    marginVertical: vs(5),
  },
});
