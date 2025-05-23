import React from "react"
import {TextInput, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch} from 'react-redux'
import { login, setEmail, setPassword } from "../redux/testSlice"
import AsyncStorage from '@react-native-async-storage/async-storage'

function LogInScreen(props){
    const auth = useSelector((state) => state.test.authKey)
    const email = useSelector((state) => state.test.email)
    const password = useSelector((state) => state.test.password)
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.background}>
            <Text style={{fontSize: 30, paddingBottom: 8}}>Login</Text>
            <Text>{auth}</Text>
            <View style={styles.aligner}>
                <MaterialIcons name="alternate-email" size={20}></MaterialIcons>
                <TextInput style={styles.textInput} placeholder="Email" keyboardType="email-address"  onChangeText={(input) => dispatch(setEmail(input))}></TextInput>
            </View>
            <View style={styles.aligner}>
                <MaterialIcons name="alternate-email" size={20}></MaterialIcons>
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={(input) => dispatch(setPassword(input))}></TextInput>
            </View>
            <View style={{width: '90%'}}>
                <TouchableOpacity style={styles.loginButon} onPress={() => {dispatch(login({ email, password, props}))}}>
                    <Text style={{color: "#ffffff", textAlign: "center", fontWeight: 700, fontSize: 16}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {console.log(email+" "+password)}}>
                    <Text style={{color: "#ad40af", paddingBottom: 20, textAlign: "center"}}>forgot your password?</Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "center", paddingBottom: 20}}>
                    <Text>Don't have an acount?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                        <Text style={{color: "#ad40af", fontWeight: 700}}>  Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "top",
        alignItems: "center",
        marginTop: 290,
        paddingHorizontal: 30,
    },
    textInput: {
        paddingVertical:0, 
        flex: 1
    },
    aligner: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        paddingTop: 8,
        marginBottom: 20,
    },
    loginButon: {
        backgroundColor: "#ad40af",
        padding: 20, 
        borderRadius: 10, 
        marginBottom: 30, 
    }
})

export default LogInScreen;