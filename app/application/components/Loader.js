import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Modal from "react-native-modal"
import { COLORS, WP } from '../theme/config'
import Lottie from 'lottie-react-native';

export default function Loader({ isVisible }) {
     return (
          <Modal backdropOpacity={0.0} isVisible={isVisible}>
               <View style={Styles._mainContainer}>
                    <Lottie style={Styles._animation} source={require("../assets/animations/Loader.json")} autoPlay loop />
                    {/* <Text style={Styles._title}>Loading...</Text> */}
               </View>
          </Modal>
     )
}

const Styles = StyleSheet.create({
     _mainContainer: {
          // width: WP(30),
          // height: WP(30),
          // backgroundColor: COLORS.whiteColor,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: WP(2),
          overflow: "hidden"
     },
     _animation: {
          width: WP(40),
          height: WP(40),
          // backgroundColor: COLORS.whiteColor,
     },
     _title: {
          color: COLORS.primaryColor,
          fontSize: WP(4),
          position: "absolute",
          bottom: 0,
          fontWeight: "bold",
     },
})