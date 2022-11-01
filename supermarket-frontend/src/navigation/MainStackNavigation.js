import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../pages/landing/Landing';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import DrawerNavigator from '../navigation/DrawerNavigation';
import ViewMoreItem from '../pages/viewMoreItem/ViewMoreItem';
import ViewMoreCategory from '../pages/viewMoreCategory/ViewMoreCategory';
import SingleItemView from '../pages/singleItemView/SingleItemView';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
    return <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor: '#EEEEEE', },
        headerTitleAlign:'center',
        headerTitleStyle:{fontWeight: 'bold'},
        contentStyle:{backgroundColor: '#EEEEEE'},          
      }}>
        <Stack.Screen name='Landing' component={Landing} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Signup}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Main' component={DrawerNavigator} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='ViewMoreCategory' component={ViewMoreCategory}/>
        <Stack.Screen name='ViewMoreItem' component={ViewMoreItem}/>
        <Stack.Screen name='SingleItemView' component={SingleItemView}/>
      </Stack.Navigator>
}

export default MainStackNavigation;