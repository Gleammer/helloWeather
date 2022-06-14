import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Hour from './Hour'

const HourList = (props) => {
    const currentDate = new Date(props.currentDate * 1000)
    const renderItem = (iteration) => {
        return (
            <Hour data={iteration.item} />
        )
    }

    return (
        <View>
            <Text style={styles.title}>Today <Text style={styles.date}>({currentDate.toLocaleDateString()})</Text></Text>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    date: {
        fontSize: 14,
        color: '#2a2a2a',
        fontWeight: 'normal'
    }
})

export default HourList