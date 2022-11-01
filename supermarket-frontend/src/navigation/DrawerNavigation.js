import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors, fonts } from '../constants/palette';
import AddCategory from '../pages/addCategory/AddCategory';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{
      headerShown:false,
      drawerActiveBackgroundColor: colors.primary,
      drawerActiveTintColor: colors.white,
      drawerInactiveTintColor: colors.secondary,
      drawerStyle: {backgroundColor: colors.background},
      drawerLabelStyle: {fontSize: fonts.text}
    }}>
      <Drawer.Screen name='DrawerHome' component={BottomTabNavigation} options={{
        drawerIcon: ({color}) => <Ionicons name='home' color={color} size={fonts.iconSize}/>,
        drawerLabel: 'Home'
      }}/>
      <Drawer.Screen name='AddCategory' component={AddCategory} options={{
        drawerIcon: ({color}) => <Ionicons name='add' color={color} size={fonts.iconSize}/>,
        drawerLabel: 'Add Category',
        headerShown:true,
      }}/>
    </Drawer.Navigator>
}

export default DrawerNavigator;