import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { OrderHistoryItem } from "../../components";

const OrderHistoryScreen = () => {
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <FlatList
          data={}
          keyExtractor={}
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
