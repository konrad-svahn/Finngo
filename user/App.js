import React from 'react';
import { StyleSheet, Text} from 'react-native';
import MapScreen from './app/screens/MapScreen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() { 
  return (
    <MapScreen></MapScreen>
  );
}