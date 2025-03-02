import React from "react"
import {ScrollView, StatusBar, StyleSheet, Text} from 'react-native';
import { MapView, MarkerView} from "@maplibre/maplibre-react-native";

function MapScreen(props){
    return (
      <MapView style={styles} >
        <MarkerView coordinate={[7.20815, 2.29941]} anchor={{ x: 0.5, y: 0.5}}>
          <Text>marker</Text>
        </MarkerView>
      </MapView>
    );
}

const styles = StyleSheet.create({
  background: {
      flex: 1, 
  },
})

export default MapScreen;
