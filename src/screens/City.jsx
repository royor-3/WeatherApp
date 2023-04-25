import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    StatusBar
} from 'react-native'
import moment from 'moment'
// components
import IconText from '../components/IconText'

const City = ({ weatherData }) => {
    const {
        container,
        image,
        cityName,
        countryName,
        cityText,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText,
        iconContainer
    } = styles

    const { name, country, population, sunrise, sunset } = weatherData

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={image}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={populationWrapper}>
                    <IconText
                        iconContainer={iconContainer}
                        iconName={'user'}
                        iconSize={50}
                        iconColor={'red'}
                        text={`Population: ${population}`}
                        textStyles={populationText}
                    />
                </View>
                <View style={riseSetWrapper}>
                    <IconText
                        iconContainer={iconContainer}
                        iconName={'sunrise'}
                        iconSize={50}
                        iconColor={'white'}
                        text={moment(sunrise).format('h:mm:ss a')}
                        textStyles={riseSetText}
                    />
                    <IconText
                        iconContainer={iconContainer}
                        iconName={'sunset'}
                        iconSize={50}
                        iconColor={'white'}
                        text={moment(sunset).format('h:mm:ss a')}
                        textStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // marginTop: StatusBar.currentHeight || 0,
    },
    image: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        marginTop: 10
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    iconContainer: {
        alignItems: 'center'
    }
})

export default City
