import { View, Text } from 'react-native'
import React from 'react'
import {
     AllChats,
     UserChat,
     AddUserInfo,
     Login,
     Settings,
     Splash,
} from "../../application/screens"
import AuthStack from './AuthSatck/AuthStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Drawer from './Drawer'

const Stack = createNativeStackNavigator();

export default function Root() {
     return (
          <Stack.Navigator
               initialRouteName='splash'
               screenOptions={{
                    headerShown: false
               }}
          >
               <Stack.Screen
                    name='splash'
                    component={Splash}
                    options={{
                         headerShown: false
                    }}
               />
               <Stack.Screen
                    name='authstack'
                    component={AuthStack}
               />
               <Stack.Screen
                    name='homedrawer'
                    component={Drawer}
               />
          </Stack.Navigator>
     )
}