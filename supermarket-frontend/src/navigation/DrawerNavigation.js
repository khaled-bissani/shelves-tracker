import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{
      headerShown:false
    }}>
      <Drawer.Screen name='DrawerHome' component={BottomTabNavigator}/>
    </Drawer.Navigator>
}

export default DrawerNavigator;