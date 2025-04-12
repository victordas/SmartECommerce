import { StyleSheet, View } from "react-native";
import React from "react";
import { AppButton, AppSafeView, AppText, AppTextInput } from "../../components";
import { AppColors, commonStyles, sharedPaddingHorizontal } from "../../styles";
import { s, vs } from "react-native-size-matters";
import { IS_ANDROID, IS_IOS } from "../../constants";

const CheckoutScreen = () => {
  const { bottomButtonContainer, inputsContainer } = styles;
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={inputsContainer}>
          <AppTextInput placeholder="Full name" />
          <AppTextInput placeholder="Phone number" />
          <AppTextInput placeholder="Address" />
        </View>
      </View>

      <View >
        <AppButton title="Confirm" onPress={() => {}} />
      </View>
    </AppSafeView>
  );
};

export { CheckoutScreen };

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_IOS ? vs(15) : undefined,
    paddingTop: vs(10),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: 'absolute',
    width: '100%',
    bottom: IS_ANDROID ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.blueGray,
    paddingTop: vs(10),
  }
});
