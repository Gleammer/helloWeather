import { View, Text, StyleSheet } from 'react-native'

const Current = (props) => {
    return (
        <View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.location}>{props.locationData.name}</Text>
                    <Text style={styles.temperature}>18 <Text style={styles.small}>&deg;C</Text></Text>
                    <Text style={styles.status}>Cloudy</Text>
                </View>
                <View style={styles.column}>
                    {/* Image with condition here */}
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
    row: {
        flexDirection: 'row'
    },
    column: {
        flex: 1
    }
})

export default Current