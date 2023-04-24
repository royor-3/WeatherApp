import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

// components
import CurrentWeather from './src/screens/CurrentWeather'
import UpcommingWeather from './src/screens/UpcommingWeather'
import City from './src/screens/City'

const App = () => {
    const { safeAreaWrapper } = styles

    return (
        <SafeAreaView style={safeAreaWrapper}>
            <CurrentWeather />
            {/* <UpcommingWeather /> */}
            {/* <City /> */}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeAreaWrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    }
})

export default App
