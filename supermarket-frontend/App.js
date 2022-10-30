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

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return <BottomTab.Navigator screenOptions={{
    headerStyle:{backgroundColor: colors.primary, },
    headerTitleAlign:'center',
    headerTitleStyle:{fontWeight: 'bold'},
    headerTintColor:colors.white,
    contentStyle:{backgroundColor: '#EEEEEE'},      
    tabBarActiveTintColor: colors.white,
    tabBarInactiveTintColor: colors.light_gray,
    tabBarShowLabel:false,
    tabBarStyle:{backgroundColor: colors.primary}
  }}>
    <BottomTab.Screen name='Home' component={Home} options={{
      tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>
    }}/>
    <BottomTab.Screen name='Notification' component={Notification} options={{
      tabBarIcon: ({color, size}) => <Ionicons name='notifications-sharp' color={color} size={size}/>
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
