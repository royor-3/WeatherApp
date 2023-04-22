import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

// components
import CurrentWeather from './src/components/CurrentWeather'

const App = () => {
    return (
        <SafeAreaView style={styles.safeAreaWrapper}>
            <CurrentWeather />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeAreaWrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'pink'
    }
})

export default App
