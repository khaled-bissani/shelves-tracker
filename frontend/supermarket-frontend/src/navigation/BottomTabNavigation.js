import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors,fonts } from '../constants/palette';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/home/Home';
import Notification from '../pages/notification/Notification';
import Profile from '../pages/profile/Profile';
import MenuButton from '../components/MenuButton/MenuButton';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = ({navigation}) => {
    return <BottomTab.Navigator  screenOptions={{
      headerLeft:() => <MenuButton onPress={()=> navigation.toggleDrawer()}/>,
      headerStyle:{backgroundColor: colors.primary, },
      headerTitleAlign:'center',
      headerTitleStyle:{fontWeight: 'bold', fontSize:fonts.subTitle},
      headerTintColor:colors.white,
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: colors.secondary,
      tabBarShowLabel:false,
      tabBarStyle:{backgroundColor: colors.primary},
      tabBarHideOnKeyboard: true
    }}>
      <BottomTab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({color}) => <Ionicons name='home' color={color} size={fonts.iconSize}/>
      }}/>
      <BottomTab.Screen name='Notification' component={Notification} options={{
        tabBarIcon: ({color}) => <Ionicons name='notifications-sharp' color={color} size={fonts.iconSize}/>
      }}/>
      <BottomTab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({color}) => <Ionicons name='person-circle-outline' color={color} size={fonts.iconSize}/>
      }}/>
    </BottomTab.Navigator>
}

export default BottomTabNavigation;