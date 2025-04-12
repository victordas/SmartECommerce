import { KeyboardTypeOptions, StyleSheet } from "react-native";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { AppTextInput } from "./AppTextInput";
import { AppColors } from "../../styles";
import { AppText } from "../texts/AppText";
import { s, vs } from "react-native-size-matters";

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const AppTextInputController = <T extends FieldValues>(
  appTextInputControllerProps: AppTextInputControllerProps<T>
) => {
  const { control, name, rules, placeholder, secureTextEntry, keyboardType } =
    appTextInputControllerProps;
  const { errorMessage, inputError } = styles;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && inputError}
          />
          {error && <AppText style={errorMessage}>{error.message}</AppText>}
        </>
      )}
    />
  );
};

export { AppTextInputController };

const styles = StyleSheet.create({
  inputError: {
    borderColor: AppColors.redColor,
  },
  errorMessage: {
    color: AppColors.redColor,
    fontSize: s(12),
    textAlign: 'left',
    marginBottom: vs(10),
    marginTop: vs(-5),
  },
});
