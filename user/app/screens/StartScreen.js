import React from "react"
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../redux/testSlice"


function StartScreen(props){

    const count = useSelector((state) => state.test.authKey)
    const dispatch = useDispatch()
    return (
        <ImageBackground source={require("../assets/icon.png")} style={styles.background}>
            <TouchableOpacity style={styles.loginButon}
                onPress={() => {
                    dispatch(logout())
                    props.navigation.navigate("Login")
                }} 
            >
                <Text style={{color: "#ffffff", textAlign: "center", fontWeight: 700, fontSize: 16}}>{count}</Text>
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