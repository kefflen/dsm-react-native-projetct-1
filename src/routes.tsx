import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import {ThemeProvider} from 'styled-components'
import {Login} from './pages/login'
import Main from './pages/main'
import {theme} from './theme'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerTitleAlign: 'center',
              headerTintColor: theme.textOnPrimary,
              headerStyle: {
                backgroundColor: theme.primary500,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.textOnPrimary,
              },
            }}
          />
          <Stack.Screen
            name="main"
            component={Main}
            options={{
              title: 'GitHub VIEWER',
              headerTitleAlign: 'center',
              headerTintColor: theme.textOnPrimary,
              headerLeft: undefined,
              headerStyle: {
                backgroundColor: theme.primary500,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.textOnPrimary,
              },
            }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}
