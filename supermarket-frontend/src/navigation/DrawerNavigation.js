import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{
      headerShown:false
    }}>
      <Drawer.Screen name='DrawerHome' component={BottomTabNavigation}/>
    </Drawer.Navigator>
}

export default DrawerNavigator;