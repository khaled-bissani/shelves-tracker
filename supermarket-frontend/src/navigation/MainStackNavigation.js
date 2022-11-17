import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/palette';
import Landing from '../pages/landing/Landing';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import DrawerNavigator from '../navigation/DrawerNavigation';
import ViewMoreItem from '../pages/viewMoreItem/ViewMoreItem';
import ViewMoreCategory from '../pages/viewMoreCategory/ViewMoreCategory';
import SingleItemView from '../pages/singleItemView/SingleItemView';
import EditProfile from '../pages/editProfile/EditProfile';
import ChangeProfilePicture from '../pages/changeProfilePicture/ChangeProfilePicture';
import ChangePassword from '../pages/changePassword/ChangePassword';
import ChatMessage from '../pages/chatMessage/ChatMessage';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
    return <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor: '#EEEEEE', },
        headerTitleAlign:'center',
        headerTitleStyle:{fontWeight: 'bold'},
        contentStyle:{backgroundColor: '#EEEEEE'},
        animation: 'slide_from_right',          
      }}>
        <Stack.Screen name='Landing' component={Landing} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Signup}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Main' component={DrawerNavigator} options={{
          headerShown:false,
          animation: 'fade', 
        }}/>
        <Stack.Screen name='ViewMoreCategory' component={ViewMoreCategory} options={{
          headerTitle:'All Categories',
        }}/>
        <Stack.Screen name='ViewMoreItem' component={ViewMoreItem} options={
          ({route, navigation})=> {
            const categoryName = route.params.categoryName
            return{
              title: categoryName
            }
          }
        }/>
        <Stack.Screen name='SingleItemView' component={SingleItemView} options={{
          headerTitle:''
        }}/>
        <Stack.Screen name='EditProfile' component={EditProfile} options={{headerTitle:'Edit Profile'}}/>
        <Stack.Screen name='ChangeProfilePicture' component={ChangeProfilePicture}/>
        <Stack.Screen name='ChangePassword' component={ChangePassword} options={{headerTitle:'Change Password'}}/>
        <Stack.Screen name='ChatMessage' component={ChatMessage} options={{
          headerTitle:'Name',
          headerStyle:{backgroundColor: colors.primary, },
          headerTintColor:colors.white,
        }}/>
      </Stack.Navigator>
}

export default MainStackNavigation;