import { KeyboardTypeOptions, StyleSheet, TextInput, TextStyle } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles";

interface AppTextInputProps {
    value?: string,
    onChangeText?: (text: string) => void,
    placeholder?: string,
    secureTextEntry?: boolean,
    keyboardType?: KeyboardTypeOptions,
    style?: TextStyle,
}

const AppTextInput = (appTextInputProps: AppTextInputProps) => {
    const { value, onChangeText, placeholder, secureTextEntry, keyboardType, style } = appTextInputProps
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={[styles.input, style]}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: vs(40),
        borderRadius: s(25),
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        paddingHorizontal: s(15),
        fontSize: s(16),
        backgroundColor: AppColors.white,
        width: '100%',
        marginBottom: s(10)
    }
})

export { AppTextInput }