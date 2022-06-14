import { View, Text, Image, StyleSheet } from 'react-native'

const Hour = (props) => {
    const time = new Date(props.data.time_epoch * 1000)

    return (
        <View>
            <Text style={styles.center}>{time.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })}</Text>
            <Image source={{ uri: 'http:' + props.data.condition.icon }} style={styles.statusImage}/>
            <Text style={[styles.center, styles.temperature]}> {props.data.temp_c}&deg;</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    statusImage: {
        height: 70,
        width: 70
    },
    center: {
        textAlign: 'center',
        width: 70
    },
    temperature: {
        fontSize: 14,
        fontWeight: '600'
    }
})

export default Hour