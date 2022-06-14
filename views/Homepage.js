import axios from "axios";
import * as Location from 'expo-location';
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Current from "../components/Current";
import HourForecast from "../components/HourForecast";
import DayForecast from "../components/DayForecast";

const requestBase = 'https://api.weatherapi.com/v1/forecast.json?key=0837a5665aaf4ae9be293542221006&days=3&aqi=no&alerts=no&q=';

const Homepage = () => {
    const [data, setData] = useState()
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // Get Geolocation data
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    // Get Weather data
    useEffect(() => {
        if (location === null)
            return;
        const { latitude, longitude } = location.coords
        axios.get(`${requestBase}${latitude},${longitude}`)
            .then(res => res.data)
            .then(res => setData(res))
            .catch(err => console.warn(err))
    }, [location])

    return (
        <View>
            {data
                ? <View>
                    <Current currentData={data.current} locationData={data.location} />
                    <HourForecast
                        data={data.forecast.forecastday[0].hour}
                        currentDate={data.location.localtime_epoch}
                    />
                    <DayForecast
                        data={data.forecast.forecastday.map(item => {
                            return {
                                date_epoch: item.date_epoch,
                                ...item.day
                            } 
                        })}
                    />
                </View>
                : <View><Text>Loading...</Text></View>}

        </View>
    )
}

export default Homepage;