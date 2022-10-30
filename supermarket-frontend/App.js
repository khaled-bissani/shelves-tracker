import {Pressable, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/home/Home';
import { colors } from './src/constants/palette';
import { Ionicons } from '@expo/vector-icons';
import Notification from './src/pages/notification/Notification';
import Chat from './src/pages/chat/Chat';
import Profile from './src/pages/profile/Profile';
import MainStackNavigation from './src/navigation/MainStackNavigation';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  return <BottomTab.Navigator  screenOptions={{
    headerLeft:()=>(
      <Pressable onPress={()=>{navigation.toggleDrawer()}}>
        <Ionicons name='menu' size={36} color={colors.white} />
      </Pressable>
    ),
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
        <MainStackNavigation/>
      </NavigationContainer>
    </>    
  );
}

const styles= StyleSheet.create({
  mainContainer: {
    flex:1, 
  }
})
