import { Text, SafeAreaView, StyleSheet,Button } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Menu
      </Text>
      <Text> </Text>
      <Button
      title="Churrasqueira 1"
      color='#cd853f'
      />
      <Text> </Text>
      <Button
      title="Churrasqueira 2"
      color='#cd853f'
      />
      <Text> </Text>
      <Button
      title="Churrasqueira 3"
      color='#cd853f'
      />
      <Text> </Text>
      <Button
      title="Eventos"
      color='#ffa07a'
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center'
  },

});

