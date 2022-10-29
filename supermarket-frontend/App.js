import {StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './src/pages/landing/Landing';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Landing' component={Landing}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>    
  );
}

const styles= StyleSheet.create({
  mainContainer: {
    flex:1, 
  }
})
