/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
// components
import CurrentWeather from '../screens/CurrentWeather'
import UpcommingWeather from '../screens/UpcommingWeather'
import City from '../screens/City'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'indianred',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    backgroundColor: 'lightblue'
                },
                headerStyle: {
                    backgroundColor: 'lightblue'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'indianred'
                }
            }}
        >
            <Tab.Screen
                name={"Aujourd'hui"}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'droplet'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}
                        />
                    )
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name={'Prévisions'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}
                        />
                    )
                }}
            >
                {() => <UpcommingWeather weatherData={weather.list} />}
            </Tab.Screen>
            <Tab.Screen
                name={'Ma ville'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}
                        />
                    )
                }}
            >
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}
export default Tabs
