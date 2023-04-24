/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
// components
import CurrentWeather from '../screens/CurrentWeather'
import UpcommingWeather from '../screens/UpcommingWeather'
import City from '../screens/City'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey'
            }}
        >
            <Tab.Screen
                name={'Current'}
                component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'droplet'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={'Upcoming'}
                component={UpcommingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={'City'}
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs
