import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcons from "react-native-vector-icons/Ionicons"
import { Button, LabelInput } from '../../components'
import { COLORS, FONT, FONT_BOLD, FONT_MEDIUM, FONT_SEMIBOLD, IMAGES, SPACING_PERCENT, TEXT_SIZES, WP } from '../../theme/config'

export default function Login({ navigation }) {


     return (
          <SafeAreaView style={Styles._mainContainer}>
               {/* <Loader
                    isVisible={Loading}
               /> */}
               <ScrollView contentContainerStyle={{
                    alignItems: "center",
                    padding: WP(5),
                    // backgroundColor:'cyan'
               }}>
                    <Image
                         source={IMAGES.splash_img}
                         style={Styles._logoMain}
                    />
                    <View style={{ width: '100%' }}>
                         <Text style={Styles._textMain}>Welcome!</Text>
                         <Text style={Styles._textDes}>Sign in to continue</Text>

                         <View style={Styles._inputContainer}>
                              <LabelInput
                                   placeholder={"Enter your Email"}
                                   label={'Email'}
                                   inputStyle={{ fontFamily: FONT }}
                              />
                              <LabelInput
                                   placeholder={"Enter your password"}
                                   label={'Password'}
                                   containerStyle={{ marginTop: WP(SPACING_PERCENT / 2) }}
                                   secureTextEntry
                              />

                              <Text onPress={() => { navigation.navigate('forgotpassword')}}  style={Styles._forgotText}>Forgot password</Text>
                         </View>
                         <Button 
                        onPress={() => { navigation.navigate('homedrawer')}}
                         lable={'Login'} styles={{ width: '100%', marginTop:WP(SPACING_PERCENT/4) }} />
                         <Text style={Styles._dontText}>Don't have an account?
                              <Text
                                   onPress={() => { navigation.navigate('signup')}}
                                   style={{ color: COLORS.primaryColor }}> sign up</Text>
                         </Text>

                    </View>
               </ScrollView>
          </SafeAreaView>
     )
}

const Styles = StyleSheet.create({
     _mainContainer: {
          flex: 1,
          backgroundColor: COLORS.whiteColor,
     },
     _logoMain: {
          width: WP(60),
          height: WP(50),
          resizeMode: "contain",
     },
     _textMain: {
          color: COLORS.blackColor,
          fontSize: WP(5.5),
          fontFamily: FONT_SEMIBOLD,
          // marginBottom: WP(10),
     },
     _textDes: {
          color: COLORS.secondaryColor,
          fontSize: WP(TEXT_SIZES.info_2),
          fontFamily: FONT,
     },
     _inputContainer: {
          marginTop: WP(SPACING_PERCENT * 1.5),
     },
     _forgotText: {
          color: COLORS.primaryColor,
          fontSize: WP(TEXT_SIZES.info_1),
          fontFamily: FONT_MEDIUM,
          textAlign: 'right',
          padding: WP(SPACING_PERCENT / 2)
     },
     _dontText: {
          color: COLORS.secondaryColor,
          fontSize: WP(TEXT_SIZES.info_1),
          fontFamily: FONT,
          textAlign: 'center',
          padding: WP(SPACING_PERCENT / 2)
     },
     _button: {
          width: WP(14),
          height: WP(14),
          backgroundColor: COLORS.primaryColor,
          borderRadius: WP(50),
          justifyContent: "center",
          alignItems: "center",
          elevation: 8,
          marginTop: WP(3)
     },
})