import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { AppSafeView, HomeHeader } from '../../components';
import { AppFonts } from '../../styles';

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text style={{fontSize: 60 }}>Home Screen</Text>
      <Text style={{fontSize: 60, fontFamily: AppFonts.Medium }}>Home Screen</Text>
      <Text style={{fontSize: 60, fontFamily: AppFonts.Bold }}>Home Screen</Text>
    </AppSafeView>
  )
}

export { HomeScreen };

const styles = StyleSheet.create({
  
})