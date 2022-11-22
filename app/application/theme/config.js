import React from 'react';
import {
     Platform,
     Dimensions,
     useWindowDimensions,
} from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
// import Lang from '../translations';

import AntIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MatIcons from 'react-native-vector-icons/MaterialIcons';

//CONSTANTS USED IN APP
export const APP_NAME = 'InvoiceMate';
export const PLATFORM = Platform.OS;
export const WP = widthPercentageToDP;
export const HP = heightPercentageToDP;
export const MOBILE_WIDTH = Dimensions.get('window').width;
export const MOBILE_HEIGHT = Dimensions.get('window').height;
export const RADIUS = 3;
export const SPACING = 12;
export const SPINNER_SIZE = 32;
export const FONT = 'Jost-Regular';
export const FONT_BOLD = 'Jost-Bold';
export const FONT_MEDIUM = 'Jost-Medium';
export const FONT_LIGHT = 'Jost-Light';
export const FONT_SEMIBOLD = 'Jost-SemiBold';
export const BUTTON_HEIGHT = 5;
export const INPUT_HEIGHT = 6;
export const SCREEN_ICON_SIZE = 6;
export const HOME_TAB_ICON_SIZE = 6;
export const TAB_ICON_SIZE = 6;

//COLORS USED IN APPLICATION
export const COLORS = {
     primaryColor: '#ff9700',
     secondaryColor: '#8c8c8c',
     primaryRGB: 'rgba(90,44,102,',
     territoryColor: '#9D4DB3',
     primaryColor2: '#9E2654',
     secondaryColor2: '#BC2E65',
     territoryColor2: '#D34D80',
     lightGrey: '#8C8A9A',
     darkGrey: '#2E3033',
     grey: '#cccccc',
     blackColor: '#000',
     whiteColor: '#ffffff',
     borderColor: '#E7E7E7',
     redColor: '#E6344A',
     greenColor: '#21CE99',
     yellowColor: '#F5BA03',
     circle1: '#9e2654',
     circle2: '#a83c65',
     circle3: '#b15176',
     circle4: '#bb6787',
     circle5: '#c57d98',
     primary_circle1: '#5a2c66',
     primary_circle2: '#6b4175',
     primary_circle3: '#7b5685',
     primary_circle4: '#8c6b94',
};

export const EXPENSE_COLORS = ["tomato", "orange", '#FF7F50', "gold", 'yellow', '#90EE90', 'green', '#A84420', '#FFC600', '#FE5000', '#12B347', '#E8A20C', '#E6A467']

//FONT SIZES USED IN APP
export const FONT_SIZES = {
     h1: 28,
     h2: 22,
     h3: 18,
     info_1: 16,
     info_2: 14,
};

//FONT SIZES USED IN APP
export const TEXT_SIZES = {
     h1: 7,
     h2: 6,
     h3: 5,
     info_1: 4,
     info_2: 3.5,
};

export const SPACING_PERCENT = 5;

export const TOUCH_ID_CONFIG = {
     title: 'Authentication Required', // Android
     imageColor: COLORS.primaryColor, // Android
     imageErrorColor: COLORS.redColor, // Android
     sensorDescription: 'Touch sensor', // Android
     sensorErrorDescription: 'Failed', // Android
     cancelText: 'Cancel', // Android
     fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
     unifiedErrors: false, // use unified error messages (default false)
     passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export const TOUCH_ID_SUPPORT_CONFIG = {
     unifiedErrors: false,
     passcodeFallback: true
}



//MONTHS
export const MONTHS = [
     'Jan',
     'Feb',
     'Mar',
     'Apr',
     'May',
     'Jun',
     'Jul',
     'Aug',
     'Sep',
     'Oct',
     'Nov',
     'Dec',
];

export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


//IMAGES FOR THE APP
export const IMAGES = {
     splash_img: require("../assets/images/splash_bg.jpeg"),
     mainLogo: require("../assets/images/Connection.png"),
     whiteLogo: require("../assets/images/Connection2.png")
};

export const DEFAULT_PICTURE = "https://firebasestorage.googleapis.com/v0/b/connection-1fe0f.appspot.com/o/ProfilePictures%2Fno-profile-picture-icon.png?alt=media&token=8bd51e4a-9c3a-40c6-82b0-a8714beab7ad"
















