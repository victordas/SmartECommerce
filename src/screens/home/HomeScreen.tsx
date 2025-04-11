import { StyleSheet } from 'react-native'
import React from 'react'
import { AppSafeView, HomeHeader, ProductCard } from '../../components';

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <ProductCard />
    </AppSafeView>
  )
}

export { HomeScreen };

const styles = StyleSheet.create({
  
})