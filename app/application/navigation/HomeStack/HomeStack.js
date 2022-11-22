import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
     Home, QuizDetail
} from "../../screens";
import { COLORS, FONT, FONT_MEDIUM, WP } from '../../theme/config';
const Stack = createNativeStackNavigator();

export default function HomeStcak() {

     const navigation = useNavigation()

     return (
          <Stack.Navigator
               initialRouteName='home'
               screenOptions={{
                    headerShown: true,
                    cardStyle: {
                         backgroundColor: COLORS.whiteColor,
                    },
               }}
          >
               <Stack.Screen
                    name='home'
                    component={Home}
                    options={{
                         headerTitle: 'Choose Category',
                         headerStyle: { backgroundColor: COLORS.whiteColor, textAlign: "center" },
                         headerTitleAlign: 'center',
                         headerShadowVisible: false,
                         headerLeft: () => (
                              <IonIcons
                                   onPress={() => { navigation.toggleDrawer() }}
                                   name='menu-sharp'
                                   color={COLORS.blackColor}
                                   size={WP(7)}
                              />),
                    }}
               />

               <Stack.Screen
                    name='quizdetail'
                    component={QuizDetail}
                    options={{
                         headerTitle: 'Quiz',
                         headerBackTitleVisible: false,
                         headerShadowVisible:false,
                         headerTitleAlign: 'center',
                         headerTitleStyle: {
                              fontFamily: FONT_MEDIUM,
                         }

                    }}
               />

          </Stack.Navigator>
     )
}