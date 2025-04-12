import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppText } from "../texts/AppText";
import { AppColors } from "../../styles";

interface TotalViewProps {
  totalPrice: number;
  totalShipping: number;
  totalTax: number;
  orderTotal: number;
}

const TotalView = (totalViewProps: TotalViewProps) => {
  const { amountStyle, rowView, separator, textStyle } = styles;
  const { orderTotal, totalPrice, totalShipping, totalTax } = totalViewProps;
  return (
    <View>
      <View style={rowView}>
        <AppText style={textStyle}>Total price:</AppText>
        <AppText style={amountStyle}>{`$ ${totalPrice}`}</AppText>
      </View>
      <View style={rowView}>
        <AppText style={textStyle}>Taxes:</AppText>
        <AppText style={amountStyle}>{`$ ${totalTax}`}</AppText>
      </View>
      <View style={rowView}>
        <AppText style={textStyle}>Shipping fee:</AppText>
        <AppText style={amountStyle}>{`$ ${totalShipping}`}</AppText>
      </View>
      <View style={separator}></View>
      <View style={rowView}>
        <AppText style={textStyle}>Order total:</AppText>
        <AppText style={amountStyle}>{`$ ${orderTotal}`}</AppText>
      </View>
    </View>
  );
};

export { TotalView };

const styles = StyleSheet.create({
  amountStyle: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  separator: {
    height: vs(1),
    width: "100%",
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(5),
  },
  textStyle: {
    fontSize: s(16),
    flex: 1,
  },
});
