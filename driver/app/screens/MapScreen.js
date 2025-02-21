import React from "react"
import {ImageBackground, StyleSheet, Text, View} from "react-native"
import { MapView } from "@maplibre/maplibre-react-native";


function StartScreen(props){
    return (
        <ImageBackground source={require("../assets/icon.png")} style={styles.background}>
            <MapView/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
    },
})

export default StartScreen;