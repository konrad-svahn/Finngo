import React from 'react';
import { StyleSheet, Text} from 'react-native';
import MapScreen from './app/screens/MapScreen';
import NavBar from './app/components/navBar';
import store from './app/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

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
    <Provider store={store}>
      <NavigationContainer>
        <NavBar></NavBar>
      </NavigationContainer>
    </Provider>
  );
}