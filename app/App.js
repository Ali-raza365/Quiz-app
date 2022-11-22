import { View, Text, LogBox } from 'react-native'
import React from 'react'
import Root from './application/navigation/Root'
import { NavigationContainer } from '@react-navigation/native'
import { AppBar } from './application/components'
import { COLORS } from './application/theme/config'
// import { store } from './application/redux/Store'
// import { Provider } from 'react-redux'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])

export default function App() {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <AppBar
          backgroundColor={COLORS.whiteColor}
          type={"light"}
        />
        <Root />
      </NavigationContainer>
    // </Provider>
  )
}