import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import eventos from './eventos'; 

const Stack = createNativeStackNavigator();

export default function Menu({ navigation }) {
  const apertar = () => {
    navigation.navigate('eventos');
  };

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
      onPress={apertar} 
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
