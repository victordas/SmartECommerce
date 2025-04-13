import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { AppButton, AppSafeView, OrderHistoryItem } from "../../components";
import { sharedPaddingHorizontal } from "../../styles";

const OrderHistoryScreen = () => {
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <FlatList
          data={[]}
          keyExtractor={(item: any) => `${item.id}`}
          renderItem={(({item}) => (
            <OrderHistoryItem />
          ))}
          showsVerticalScrollIndicator={false}
         />
      </View>

      <View >
        <AppButton title="Confirm" onPress={() => {}} />
      </View>
    </AppSafeView>
  );
};

export { OrderHistoryScreen };

const styles = StyleSheet.create({});
