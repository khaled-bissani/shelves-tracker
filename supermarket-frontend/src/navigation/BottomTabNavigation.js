import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants/palette';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/home/Home';
import Notification from '../pages/notification/Notification';
import Chat from '../pages/chat/Chat';
import Profile from '../pages/profile/Profile';
import MenuButton from '../components/MenuButton/MenuButton';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = ({navigation}) => {
    return <BottomTab.Navigator  screenOptions={{
      headerLeft:() => <MenuButton onPress={()=> navigation.toggleDrawer()}/>,
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

export default BottomTabNavigation;