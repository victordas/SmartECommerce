import React, { FC, ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { s } from "react-native-size-matters";
import { AppColors, AppFonts } from "../../styles";

interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "bold" | "medium";
}

const AppText = (appTextProps: AppTextProps) => {
  const { children, variant, style, ...rest } = appTextProps;
  return (
    <Text {...rest} style={[styles[variant || "medium"], style]}>
      {children}
    </Text>
  );
};

export { AppText };

const styles = StyleSheet.create({
  bold: {
    fontSize: s(18),
    color: AppColors.black,
    fontFamily: AppFonts.Bold,
  },
  medium: {
    fontSize: s(18),
    color: AppColors.black,
    fontFamily: AppFonts.Medium,
  },
});
