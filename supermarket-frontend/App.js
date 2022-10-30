import {StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from './src/pages/landing/Landing';
import Login from './src/pages/login/Login';
import Signup from './src/pages/signup/Signup';
import Home from './src/pages/home/Home';
import { colors } from './src/constants/palette';
import { Ionicons } from '@expo/vector-icons';
import Notification from './src/pages/notification/Notification';
import Chat from './src/pages/chat/Chat';
import Profile from './src/pages/profile/Profile';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return <BottomTab.Navigator screenOptions={{
    headerStyle:{backgroundColor: colors.primary, },
    headerTitleAlign:'center',
    headerTitleStyle:{fontWeight: 'bold'},
    headerTintColor:colors.white,
    tabBarActiveTintColor: colors.white,
    tabBarInactiveTintColor: colors.secondary,
    tabBarShowLabel:false,
    tabBarStyle:{backgroundColor: colors.primary},
  }}>
    <BottomTab.Screen name='Home' component={Home} options={{
      tabBarIcon: ({color}) => <Ionicons name='home' color={color} size={36}/>
    }}/>
    <BottomTab.Screen name='Notification' component={Notification} options={{
      tabBarIcon: ({color}) => <Ionicons name='notifications-sharp' color={color} size={36}/>
    }}/>
    <BottomTab.Screen name='Chat' component={Chat} options={{
      tabBarIcon: ({color}) => <Ionicons name='chatbubble' color={color} size={36}/>
    }}/>
    <BottomTab.Screen name='Profile' component={Profile} options={{
      tabBarIcon: ({color}) => <Ionicons name='person-circle-outline' color={color} size={36}/>
    }}/>
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
