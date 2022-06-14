import { View, Text, Image, StyleSheet, Button } from 'react-native'

const Day = (props) => {
    const date = new Date(props.data.time_epoch * 1000)

    return (
        <View style={styles.row}>
            <Text style={styles.column}>{date.getDate()}</Text>
            <Image source={{ uri: 'http:' + props.data.condition.icon }} style={[styles.column, styles.icon]} />
            <Text style={styles.column}>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 30
    },
    column: {
        flex: 1
    },
    icon: {
        height: 50,
        width: null,
        resizeMode: 'contain'
    }
})

export default Day;