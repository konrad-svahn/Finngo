import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, WebView} from 'react-native';
import MapScreen from './app/screens/MapScreen';
import { MapView, MarkerView} from "@maplibre/maplibre-react-native";

export default function App() { 
  return (
    <MapView style={{ flex: 1 }} >
      <MarkerView coordinate={[7.20815, 2.29941]} anchor={{ x: 0.5, y: 0.5}}>
        <Text>marker</Text>
      </MarkerView>
    </MapView>
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

