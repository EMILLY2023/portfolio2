import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Home from './components/Home';
import First from './components/First/First';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import ThirdOne from './components/Third/ThirdOne';
import ThirdSecond from './components/Third/ThirdSecond';
import Un from './components/Bienvenue/Un';






export default function App() {
  return (
    <View style={styles.container}>
    <Home/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
