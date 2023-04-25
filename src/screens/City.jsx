import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    SafeAreaView
} from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')
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
                <View>
                    <Text style={[cityName, cityText]}>{name}</Text>
                    <Text style={[countryName, cityText]}>{country}</Text>
                </View>
                <View style={populationWrapper}>
                    <IconText
                        iconContainer={iconContainer}
                        iconName={'user'}
                        iconSize={50}
                        iconColor={'indianred'}
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
                        text={moment.unix(sunrise).format('LTS')}
                        textStyles={riseSetText}
                    />
                    <IconText
                        iconContainer={iconContainer}
                        iconName={'sunset'}
                        iconSize={50}
                        iconColor={'white'}
                        text={moment.unix(sunset).format('LTS')}
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
        color: 'indianred',
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
