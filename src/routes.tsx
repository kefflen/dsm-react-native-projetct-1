import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
// import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './pages/main'

const Stack = createStackNavigator()

export default function Routes(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
