import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT_SEMIBOLD, HP, WP } from '../theme/config'

export default function Button({ lable, onPress, styles }) {
     return (
          <TouchableOpacity
               style={[Styles._mainContainer, styles]}
               activeOpacity={0.8}
               onPress={onPress}
          >
               <Text style={Styles._lable}>{lable}</Text>
          </TouchableOpacity>
     )
}

const Styles = StyleSheet.create({
     _mainContainer: {
          width: "80%",
          height: HP(6),
          backgroundColor: COLORS.primaryColor,
          borderRadius: WP(8),
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
     },
     _lable: {
          color: COLORS.whiteColor,
          fontSize: WP(5),
          fontFamily:FONT_SEMIBOLD,
          fontWeight: "bold"
     },
})