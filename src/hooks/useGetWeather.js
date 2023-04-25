import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeathData = async () => {
        try {
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            )
            const data = await response.json()
            setWeather(data)
        } catch (error) {
            setError('Could not fetch weather')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                setError('permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)
            await fetchWeathData()
        })()
    }, [lat, lon])

    return [isLoading, error, weather]
}
