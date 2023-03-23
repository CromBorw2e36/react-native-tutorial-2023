import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const peopleLst = [
    { name: 'Chức năng 1', age: 23 },
    { name: 'Chức năng 2', age: 23 },
    { name: 'Chức năng 3', age: 23 },
    { name: 'Chức năng 4', age: 23 },
    { name: 'Chức năng 5', age: 23 }
  ]
  return (
    <View style={styles.container}>
     {
      peopleLst.map((person, i) => (
        <View key={i} style={styles.item}>
          <Text>{person.name}</Text>
        </View>
      ))
     }
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
  item: {
    backgroundColor: 'red',
    padding: 10,
    margin: 3,
    width: "50%"
  }
});

