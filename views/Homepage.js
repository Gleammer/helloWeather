import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Homepage = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('https://api.weatherapi.com/v1/forecast.json?key=0837a5665aaf4ae9be293542221006&q=London&days=3&aqi=no&alerts=no')
            .then(res => res.data)
            .then(res => setData(res))
            .catch(err => console.warn(err))
    }, [])

    return (
        <View>
            <Text>Homepage!</Text>
            <Text>{data && data.current.cloud}</Text>
        </View>
    )
}

export default Homepage;