import React, { Component } from 'react';
//import "../../node_modules/leaflet/dist/leaflet.css"
import {ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { WebView } from 'react-native-webview'
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

function MapScreen(props){
    return (
        <View> 
            <WebView source={{ uri: 'https://www.openstreetmap.org/' }} style={{ flex: 1 }}></WebView>
        </View>
    );
}

export default MapScreen;