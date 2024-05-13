import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import menu from './menu'; 
import eventos from './eventos'; 
import churrasqueira1 from './churrasqueira1'; 
import churrasqueira2 from './churrasqueira2';
import churrasqueira3 from './churrasqueira3';

const Stack = createNativeStackNavigator();
function Login({ navigation }) {
  const apertar = () => {
    navigation.navigate('Menu');  
  };

  return (
    <ImageBackground source={require('./assets/yacht-club.png')} resizeMode='cover' style={styles.image}>
      <View style={styles.container}>
        <Text style={{fontSize: 22}}>Ibicuí iate club</Text>

        <View style={{width: 200, height: 20, borderBottomWidth: 1, borderBottomColor: 'red',marginBottom: 50, marginTop: 130}}>
          <TextInput id='Usuario' placeholder='Usuario'></TextInput>
        </View>

        <View style={{width: 200,borderBottomWidth: 1, borderBottomColor: 'red', marginBottom: 130}}>
          <TextInput id='Senha' placeholder="Senha"></TextInput>
        </View>

        <Button title='Login' onPress={apertar} />
        
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={menu} />
        <Stack.Screen name="eventos" component={eventos} />
        <Stack.Screen name="churrasqueira1" component={churrasqueira1} />
        <Stack.Screen name="churrasqueira2" component={churrasqueira2} />
        <Stack.Screen name="churrasqueira3" component={churrasqueira3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
