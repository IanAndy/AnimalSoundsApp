import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Music from './components/Music';
// import Test from './components/Test';
import Navigator from './routes/homeStack';

export default function App() {
  return (

    <Navigator/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
