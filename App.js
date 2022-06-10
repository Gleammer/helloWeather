import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    axios.get('https://api.weatherapi.com/v1/forecast.json?key=0837a5665aaf4ae9be293542221006&q=London&days=3&aqi=no&alerts=no')
      .then(res => res.data)
      .then(res => console.log(res))
      .catch(err => console.warn(err))
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.wrapperTitle}>Hello, Weather!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  wrapperTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
