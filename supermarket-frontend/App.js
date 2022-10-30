import {StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from './src/pages/landing/Landing';
import Login from './src/pages/login/Login';
import Signup from './src/pages/signup/Signup';
import Home from './src/pages/home/Home';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return <BottomTab.Navigator>
    <BottomTab.Screen name='Home' component={Home}/>
  </BottomTab.Navigator>
}

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
          <Stack.Screen name='Main' component={BottomTabNavigator} options={{
            headerShown:false
          }}/>
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
