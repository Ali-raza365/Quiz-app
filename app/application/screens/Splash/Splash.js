import React, { useEffect } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, HP, IMAGES, SPACING_PERCENT, TAB_ICON_SIZE, WP } from "../../theme/config";



export default function Splash({ navigation }) {

     useEffect(() => {
          setTimeout(() => {
               navigation.navigate('authstack')
          }, 3000);
     }, [])



     return (
          <SafeAreaView style={Styles._mainContainer}>
               <Image
                    source={IMAGES.splash_img}
                    style={{
                         width: WP(80),
                         height: WP(80),
                    }}
               />

               <ActivityIndicator style={{position:'absolute', bottom:HP(6)}}  size={WP(10)} color={COLORS.primaryColor} />
          </SafeAreaView>
     )
}

const Styles = StyleSheet.create({
     _mainContainer: {
          flex: 1,
          backgroundColor: COLORS.whiteColor,
          justifyContent: "center",
          alignItems: "center",
     },
})