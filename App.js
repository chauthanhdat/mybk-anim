import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.subject}>
      <Text>CO3043</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subject: {
    width: 100,
    height: 200,
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
