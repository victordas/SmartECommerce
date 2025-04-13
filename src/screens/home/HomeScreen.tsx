import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { AppSafeView, HomeHeader, ProductCard } from "../../components";
import { getProducts, products } from "../../data";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store";
import { Product } from "../../models";

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const products = (await getProducts()) || [];
    setProducts(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const { columnWrapperStyle, contentContainerStyle } = styles;
  const dispatch = useDispatch();
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        data={products}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <ProductCard
            imageUrl={item.imageURL}
            price={item.price.toFixed(2)}
            title={item.title}
            onAddToCartPress={() => {
              dispatch(addItemToCart(item));
            }}
          />
        )}
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle}
        contentContainerStyle={contentContainerStyle}
      />
    </AppSafeView>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  contentContainerStyle: {
    paddingHorizontal: s(10.5),
  },
});
