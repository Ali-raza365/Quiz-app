import React from 'react';
import {
     StyleSheet,
     TextInput,
     Text,
     View,
} from 'react-native';
import { COLORS, FONT, FONT_SEMIBOLD, HP, RADIUS, WP } from '../theme/config';

const LabelInput = ({ label, placeholder, value, onChangeText, editable, width, inputStyle, containerStyle, keyboard, secureTextEntry }) => {
     return (
          <View style={containerStyle}>
               <Text style={Styles._label}>{label}</Text>
               <TextInput
                    selectionColor={COLORS.secondaryColor}
                    editable={editable}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.grey}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboard == 'default' || keyboard == null || keyboard == undefined ? 'default' : 'number-pad'}
                    onChangeText={onChangeText}
                    style={[Styles._inputStyle, { width: width, backgroundColor: editable == false ? COLORS.primaryColor : COLORS.whiteColor, color: editable == false ? COLORS.whiteColor : COLORS.blackColor }, inputStyle,]}
               />
          </View>
     );
}

const Styles = StyleSheet.create({
     _inputStyle: {
          height: HP(6),
          fontSize: WP(4),
          color: COLORS.secondaryColor,
          //    fontFamily:FONT,
          borderWidth: 1,
          borderColor: COLORS.borderColor,
          borderRadius: WP(3),
          paddingHorizontal: WP(5 / 2),

          // shadow 
          elevation: 5,
          shadowColor: COLORS.blackColor,
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: WP(1),
     },
     _label: {
          fontSize: WP(4.4),
          color: COLORS.blackColor,
          fontFamily: FONT_SEMIBOLD,
          marginBottom: WP(5 / 5)
     },
});

export default LabelInput;