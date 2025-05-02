import React from 'react';
import { StyleSheet } from 'react-native';
import store from './app/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './app/components/NavigationStack';

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
        <NavigationStack></NavigationStack>
      </NavigationContainer>
    </Provider>
  );
}