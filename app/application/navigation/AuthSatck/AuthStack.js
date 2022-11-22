import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  ForgotPassword, Login, Signup
} from "../../screens";
import { FONT_MEDIUM } from '../../theme/config';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName='login'
    >
      <Stack.Screen
        name='login'
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='signup'
        component={Signup}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerLargeTitleShadowVisible: false,
          headerTitle: '',
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name='forgotpassword'
        component={ForgotPassword}
        options={{
          headerTitle: 'Forgot Password',
          headerBackTitleVisible:false,
          headerShadowVisible:false,
          headerTitleStyle:{
               fontFamily:FONT_MEDIUM,
          },
        }}
      />
    </Stack.Navigator>
  )
}