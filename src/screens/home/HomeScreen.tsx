import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { AppSafeView, HomeHeader, ProductCard } from '../../components';
import { products } from '../../data';
import { s, vs } from 'react-native-size-matters';

const HomeScreen = () => {
  const { columnWrapperStyle, contentContainerStyle } = styles
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        data={products}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <ProductCard 
          imageUrl={item.imageURL}
          price={item.price.toFixed(2)}
          title={item.title}
          onAddToCartPress={() => {}}
        />}
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle}
        contentContainerStyle={contentContainerStyle}
      />
    </AppSafeView>
  )
}

export { HomeScreen };

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: vs(10)
  },
  contentContainerStyle: {
    paddingHorizontal: s(10.5)
  }
})