import { StyleSheet, View } from "react-native";
import React from "react";
import {
  AppButton,
  AppSafeView,
  AppTextInputController,
} from "../../components";
import { AppColors, commonStyles, sharedPaddingHorizontal } from "../../styles";
import { s, vs } from "react-native-size-matters";
import { IS_ANDROID, IS_IOS } from "../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, RootState } from "../../store";
import { addDoc, collection, doc } from "firebase/firestore";
import { firestoreDb } from "../../config";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

const schema = yup.object({
  fullName: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be minimum three characters long")
    .matches(/^[a-zA-Z' ]*$/, "Only alphabets are allowed"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed"),

  address: yup.string().required("Full postal address is required"),
});

type CheckoutFormData = yup.InferType<typeof schema>;

const CheckoutScreen = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const { bottomButtonContainer, inputsContainer } = styles;
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const { userData } = useSelector((state: RootState) => state.userReducer);
  const { cartItems } = useSelector((state: RootState) => state.cartRecucer);

  const saveOrder = async (formData: CheckoutFormData) => {
    try {
      const orderData = {
        ...formData,
        cartItems,
        orderTotal: cartItems.reduce(
          (orderTotal, { sum, taxRate, shippingCharge, qty }) =>
            orderTotal +
            (sum + (sum * qty * taxRate) / 100 + shippingCharge * qty),
          0
        ),
        createdAt: new Date(),
      };

      const { uid } = userData;
      const userOrderRef = collection(doc(firestoreDb, "users", uid!), "orders");
      await addDoc(userOrderRef, orderData);

      const orderRef = collection(firestoreDb, "orders");
      await addDoc(orderRef, orderData);

      showMessage({
        type: "success",
        message: "Order placed",
      });
      dispatch(clearCart());
      goBack();
    } catch (error) {
      showMessage({
        type: "danger",
        message: "Error while placing your order",
      });
    }
  };
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={inputsContainer}>
          <AppTextInputController
            placeholder="Full name"
            control={control}
            name={"fullName"}
          />
          <AppTextInputController
            placeholder="Phone number"
            control={control}
            name={"phoneNumber"}
          />
          <AppTextInputController
            placeholder="Address"
            control={control}
            name={"address"}
          />
        </View>
      </View>

      <View style={bottomButtonContainer}>
        <AppButton
          title="Confirm"
          onPress={() => {
            handleSubmit(saveOrder)();
          }}
        />
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
    position: "absolute",
    width: "100%",
    bottom: IS_ANDROID ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.blueGray,
    paddingTop: vs(10),
  },
});
