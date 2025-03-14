import React from "react"
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native"

function StartScreen(props){
    return (
        <ImageBackground source={require("../assets/icon.png")} style={styles.background}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={styles.loginButon}>
                <Text style={{color: "#ffffff", textAlign: "center", fontWeight: 700, fontSize: 16}}>Logout</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButon: {
        height: 70,
        width: "40%",
        backgroundColor: "#444444",
        justifyContent: "center",
    },
})

export default StartScreen;