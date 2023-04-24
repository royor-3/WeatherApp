import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
// compoenents
import RowText from '../components/RowText'

const CurrentWeather = () => {
    const {
        container,
        temp,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message
    } = styles

    return (
        <>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText
                    textContainer={highLowWrapper}
                    texts={['High: 8', 'Low: 6']}
                    stylesText={[highLow]}
                />
            </View>
            <RowText
                textContainer={bodyWrapper}
                texts={['Its sunny', 'Its perfect T-shirt weather']}
                stylesText={[description, message]}
            />
        </>
    )
}

const styles = StyleSheet.create({
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
