import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
// components
import IconText from '../components/IconText'

const City = () => {
    const {
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
    return (
        <>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={image}
            >
                <Text style={[cityName, cityText]}>Tokyo</Text>
                <Text style={[countryName, cityText]}>Japan</Text>
                <View style={populationWrapper}>
                    <IconText
                        iconContainer={iconContainer}
                        iconName={'user'}
                        iconSize={50}
                        iconColor={'red'}
                        text={'8000'}
                        textStyles={populationText}
                    />
                </View>
                <View style={riseSetWrapper}>
                    <IconText
                        iconContainer={iconContainer}
                        iconName={'sunrise'}
                        iconSize={50}
                        iconColor={'white'}
                        text={'10:48:58am'}
                        textStyles={riseSetText}
                    />
                    <IconText
                        iconContainer={iconContainer}
                        iconName={'sunset'}
                        iconSize={50}
                        iconColor={'white'}
                        text={'17:28:15pm'}
                        textStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
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
