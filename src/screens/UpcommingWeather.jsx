import React from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native'
// Components
import ListItem from '../components/ListItem'

const DATA = [
    {
        dt_txt: '2023-02-18 12:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: '2023-02-18 15:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: '2023-02-18 18:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]

const UpcommingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    const { image } = styles
    return (
        <>
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')}
                style={image}
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1
    }
})

export default UpcommingWeather
