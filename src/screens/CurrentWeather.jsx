import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
// compoenents
import RowText from '../components/RowText'
// utilities
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
    const {
        wrapper,
        container,
        tempStyles,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message
    } = styles

    const {
        main: { temp, feels_like, temp_max, temp_min },
        weather
    } = weatherData

    const weatherCondition = weather[0].main

    return (
        <SafeAreaView
            style={[
                wrapper,
                {
                    backgroundColor:
                        weatherType[weatherCondition].backgroundColor
                }
            ]}
        >
            <View style={container}>
                <Feather
                    name={weatherType[weatherCondition].icon}
                    size={100}
                    color="white"
                />
                <Text style={tempStyles}>{`${Math.round(temp)}°`}</Text>
                <Text style={feels}>{`Feels like ${Math.round(
                    feels_like
                )}°`}</Text>
                <RowText
                    textContainer={highLowWrapper}
                    texts={[
                        `High ${Math.round(temp_max)}° `,
                        `Low ${Math.round(temp_min)}°`
                    ]}
                    stylesText={[highLow]}
                />
            </View>
            <RowText
                textContainer={bodyWrapper}
                texts={[
                    weather[0].description,
                    weatherType[weatherCondition].message
                ]}
                stylesText={[description, message]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    tempStyles: {
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
