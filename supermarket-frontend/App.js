import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigation/>
        </NavigationContainer>
      </Provider>
    </>    
  );
}

const styles= StyleSheet.create({
  mainContainer: {
    flex:1, 
  }
})
