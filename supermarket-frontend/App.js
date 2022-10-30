import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigation/MainStackNavigation';

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
