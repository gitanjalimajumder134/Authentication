/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Welcome, Chatbot } from "./screens";

const Stack = createNativeStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        >
          <Stack.Screen 
            name='Welcome'
            component={Welcome}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name='Login'
            component={Login}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name='Signup'
            component={Signup}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name='Chatbot'
            component={Chatbot}
            options={{
              headerShown:false
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


