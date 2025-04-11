import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "./colors";

export const sharedPaddingHorizontal = s(12)
export const commonStyles = StyleSheet.create({
    shadow: {
        // IOS
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: vs(4)},
        shadowOpacity: 0.2,
        shadowRadius: s(4),

        // ANDROID
        elevation: s(4),
    }
})