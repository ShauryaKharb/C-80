import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, StyleSheet } from 'react-native'

import HomeScreen from './screens/Home'
import StartMapScreen from './screens/StarMap'
import DailyPicScreen from './screens/DailyPic'
import SpaceCraftScreen from './screens/SpaceCraft'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={StartMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
