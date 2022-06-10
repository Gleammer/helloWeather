import { View, Text, StyleSheet, Image } from 'react-native'

const Current = (props) => {
    return (
        <View>
            <View style={styles.row}>
                <View style={styles.columnBig}>
                    <Text style={styles.location}>{props.locationData.name}</Text>
                    <Text>{props.locationData.region} / {props.locationData.country}</Text>
                    <Text style={styles.temperature}>{props.currentData.temp_c} <Text style={styles.small}>&deg;C</Text></Text>
                    <Text style={styles.status}>{props.currentData.condition.text}</Text>
                </View>
                <View style={styles.column}>
                    <Image source={{ uri: 'http:' + props.currentData.condition.icon }} style={styles.statusImage} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>13%</Text>
                </View>
                <View style={styles.column}>
                    <Text>0.533 mBar</Text>
                </View>
                <View style={styles.column}>
                    <Text>9 km/h</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    location: {
        fontSize: 22
    },
    temperature: {
        fontSize: 64,
    },
    small: {
        fontSize: 32
    },
    status: {

    },
    statusImage: {
        height: 100,
        width: 100
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flex: 1
    },
    columnBig: {
        flex: 2
    }
})

export default Current