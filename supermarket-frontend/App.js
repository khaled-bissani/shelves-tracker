import {StyleSheet, View } from 'react-native';
import Landing from './src/pages/landing/Landing';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Landing/>
    </View>
  );
}

const styles= StyleSheet.create({
  mainContainer: {
    flex:1,
  }
})
