import React, { Component } from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { WebView } from 'react-native-webview'

class MapScreen extends Component {
    render() {
      return (
        <WebView
          source={{ uri: 'https://www.openstreetmap.org/' }}
          style={styles}
        />
      );
    }
  }

const styles = StyleSheet.create({
  background: {
      flex: 1, 
  },
})

export default MapScreen;
