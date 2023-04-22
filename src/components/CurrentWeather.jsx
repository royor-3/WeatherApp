import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
    return (
        <>
            <View style={styles.container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High: 8</Text>
                    <Text style={styles.highLow}>Low: 6</Text>
                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description}>Its sunny</Text>
                <Text style={styles.message}>Its perfect T-shirt weather</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    safeAreaWrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'pink'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    temp: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        color: 'black',
        fontSize: 30
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    highLowWrapper: {
        flexDirection: 'row',
        gap: 5
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 48
    },
    message: {
        fontSize: 30
    }
})

export default CurrentWeather
