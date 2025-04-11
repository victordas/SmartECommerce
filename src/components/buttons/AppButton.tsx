import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppText } from "../texts/AppText";
import { AppColors } from "../../styles";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean,
  style?: ViewStyle
}
const AppButton = (appButtonProps: AppButtonProps) => {
  const {
    onPress,
    title,
    backgroundColor = AppColors.primary,
    textColor = AppColors.white,
    disabled = false,
    style
  } = appButtonProps;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button,  {
        backgroundColor: disabled ? AppColors.disableGray : backgroundColor
      }, style]}
      disabled={disabled}
    >
      <AppText style={[styles.title, { color: textColor}]} variant="bold">
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(20),
    alignSelf: "center",
  },
  title: {
    fontSize: s(20),
  },
});

export { AppButton };
