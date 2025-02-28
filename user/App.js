import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import MapScreen from './app/screens/MapScreen';
import { MapView } from "@maplibre/maplibre-react-native";

export default function App() { 
  return (
    <MapView style={{ flex: 1 }} />
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

