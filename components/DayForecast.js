import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Day from "./Day";

const DayForecast = (props) => {
    const renderItem = (iteration) => {
        return (
            <Day
                data={iteration.item}
            />
        )
    }

    return (
        <View>
            <Text style={styles.title}>Forecast:</Text>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                scrollEnabled={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default DayForecast