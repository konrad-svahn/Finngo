import React, { useEffect } from "react"
import {ImageBackground, StyleSheet, Text, PermissionsAndroid, TouchableOpacity} from "react-native"
import { useDispatch } from 'react-redux'
import { logout } from "../redux/testSlice"
import LocationPrompt from "../components/LocationPrompt"
import AsyncStorage from '@react-native-async-storage/async-storage'

function StartScreen(props){
    const dispatch = useDispatch()
    return (
        <ImageBackground source={require("../assets/icon.png")} style={styles.background}>
            <LocationPrompt></LocationPrompt>
            <TouchableOpacity style={styles.loginButon}
                onPress={() => {
                    dispatch(logout())
                    props.navigation.navigate("Login")
                }} 
            >
                <Text style={{color: "#ffffff", textAlign: "center", fontWeight: 700, fontSize: 16}}>logout</Text>
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