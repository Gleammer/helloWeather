import axios from "axios";
import * as Location from 'expo-location';
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Current from "../components/Current";


const Homepage = () => {
    const [data, setData] = useState()
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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


    useEffect(() => {
        console.log(`Location: ${JSON.stringify(location)}`)
        axios.get('https://api.weatherapi.com/v1/forecast.json?key=0837a5665aaf4ae9be293542221006&q=London&days=3&aqi=no&alerts=no')
            .then(res => res.data)
            .then(res => setData(res))
            .catch(err => console.warn(err))
    }, [location])

    return (
        <View>
            {data && <Current currentData={data.current} locationData={data.location} />}
        </View>
    )
}

export default Homepage;