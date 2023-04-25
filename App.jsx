import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// components
import Tabs from './src/components/Tabs'
import ErrorItem from './src/components/ErrorItem'
// hooks
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
    const [isLoading, error, weather] = useGetWeather()

    if (weather && weather.list) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        )
    }

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size={'large'} color={'blue'} />
            ) : (
                <ErrorItem />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default App
