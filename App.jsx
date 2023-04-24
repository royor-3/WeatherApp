import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

// components
// import CurrentWeather from './src/screens/CurrentWeather'
import UpcommingWeather from './src/screens/UpcommingWeather'

const App = () => {
    return (
        <SafeAreaView style={styles.safeAreaWrapper}>
            {/* <CurrentWeather /> */}
            <UpcommingWeather />
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
