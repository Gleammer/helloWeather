import { View, Text, Image, StyleSheet, Button } from 'react-native'

const Day = (props) => {
    const date = new Date(props.data.date_epoch * 1000)

    return (
        <View style={styles.row}>
            <Text style={styles.column}>{date.toLocaleString('default', {weekday: 'long'})}</Text>
            <Image source={{ uri: 'http:' + props.data.condition.icon }} style={[styles.column, styles.icon]} />
            <Text style={[styles.column, styles.center]}><Text style={styles.bold}>{props.data.maxtemp_c}&deg;</Text> / {props.data.mintemp_c}&deg;</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        flex: 1
    },
    icon: {
        height: 50,
        width: null,
        resizeMode: 'contain'
    },
    center: {
        textAlign: 'center'
    },
    bold: {
        fontWeight: '600'
    }
})

export default Day;