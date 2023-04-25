import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')
// utilities
import { weatherType } from '../utilities/weatherType'
const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props

    const { item, date, day, temp, dateTextWrapper } = styles
    return (
        <View style={item}>
            <Feather
                name={weatherType[condition]?.icon}
                size={50}
                color={'white'}
            />
            <View style={dateTextWrapper}>
                <Text style={[date, day]}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('LTS')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(
                max
            )}°`}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 28,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'indianred'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    day: {
        textTransform: 'capitalize'
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
})
export default ListItem
