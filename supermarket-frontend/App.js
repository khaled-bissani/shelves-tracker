import {StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './src/pages/landing/Landing';
import Login from './src/pages/login/Login';
import Signup from './src/pages/signup/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: '#EEEEEE', },
          headerTitleAlign:'center',
          headerTitleStyle:{fontWeight: 'bold'},
          contentStyle:{backgroundColor: '#EEEEEE'},          
        }}>
          <Stack.Screen name='Landing' component={Landing} options={{headerShown: false}}/>
          <Stack.Screen name='Register' component={Signup}/>
          <Stack.Screen name='Login' component={Login}/>
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
