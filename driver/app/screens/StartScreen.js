import React from "react"
import {ImageBackground, StyleSheet, Text, View} from "react-native"

function StartScreen(props){
    return (
        <ImageBackground source={require("../assets/icon.png")} style={styles.background}>
           <View style={styles.toMapButon}>
            <Text>Map</Text>
           </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    toMapButon: {
        height: 70,
        width: "40%",
        backgroundColor: "#444444",
        alignItems: "center",
    },
})

export default StartScreen;