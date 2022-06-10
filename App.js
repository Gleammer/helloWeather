import { StyleSheet, Text, View } from 'react-native';
import Homepage from './views/Homepage';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.wrapperTitle}>Hello, Weather!</Text>
        <Homepage/>
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
