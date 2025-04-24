import React from "react"
import {ImageBackground, StyleSheet, Text, PermissionsAndroid, TouchableOpacity} from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../redux/testSlice"
import LocationPrompt from "../components/LocationPrompt"

function StartScreen(props){
    const authKey = useSelector((state) => state.test.authKey)
    const error = useSelector((state) => state.test.error)
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
                <Text style={{color: "#ffffff", textAlign: "center", fontWeight: 700, fontSize: 16}}>{authKey}</Text>
                <Text>{error}</Text>
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