import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_MEDIUM, RADIUS, SPACING_PERCENT, TEXT_SIZES, WP } from '../../theme/config'
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
const Home = ({ navigation }) => {

     const HOME_TABS = [
          {
               name: "Education",
               icon: (<IonIcon name='school-sharp' color={COLORS.whiteColor} size={WP(8)} />)
          },
          {
               name: "Sports",
               icon: (<MatIcons name='sports-basketball' color={COLORS.whiteColor} size={WP(8)} />)
          }
     ]

     const onTabClick = (item) => {
          navigation.navigate('quizdetail', { item: item })
     }

     return (
          <SafeAreaView style={styles.container}>
               <FlatList
                    data={HOME_TABS}
                    numColumns={2}
                    keyExtractor={(_, i) => `item${i}`}
                    contentContainerStyle={{ alignItems: 'center', }}
                    renderItem={({ item, index }) => {
                         return (
                              <TouchableOpacity onPress={() => onTabClick('testt')} style={styles.tabContainer}>
                                   <View style={styles.tabCircle}>{item.icon}</View>
                                   <Text style={styles.tabText}>{item.name}</Text>
                              </TouchableOpacity>
                         )
                    }}
               />
          </SafeAreaView>
     )
}

export default Home

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: COLORS.whiteColor,
     },
     tabContainer: {
          width: WP(35),
          height: WP(35),
          backgroundColor: COLORS.whiteColor,
          margin: WP(5),
          borderRadius:WP(RADIUS),
          alignItems: 'center',
          justifyContent: 'center',

          // shadow 
          elevation: 5,
          shadowColor: COLORS.blackColor,
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: WP(1),
     },
     tabText: {
          fontSize: WP(TEXT_SIZES.info_1),
          fontFamily: FONT_MEDIUM,
          paddingTop: WP(SPACING_PERCENT),
     },
     tabCircle: {
          width: WP(14),
          height: WP(14),
          borderRadius: WP(10),
          backgroundColor: COLORS.primaryColor,
          alignItems: 'center',
          justifyContent: 'center',
     }
})