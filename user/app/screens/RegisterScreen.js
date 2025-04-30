import React from "react"
import {TextInput, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch} from 'react-redux'
import { register, setEmail, setPassword, setFirsName, setLastName} from "../redux/testSlice"

function RegisterScreen(props){
    const email = useSelector((state) => state.test.email)
    const password = useSelector((state) => state.test.password)
    const firstName = useSelector((state) => state.test.firstName)
    const lastName = useSelector((state) => state.test.lastName)
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.background}>
            <Text style={{fontSize: 30, paddingBottom: 8}}>Register</Text>
            <View style={styles.aligner}>
                <MaterialIcons name="alternate-email" size={20}></MaterialIcons>
                <TextInput style={styles.textInput} placeholder="Email" keyboardType="email-address" onChangeText={(input) => dispatch(setEmail(input))}></TextInput>
            </View>
            <View style={styles.aligner}>
                <MaterialIcons name="alternate-email" size={20}></MaterialIcons>
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={(input) => dispatch(setPassword(input))}></TextInput>
            </View>
            <View style={styles.aligner}>
                <MaterialIcons name="alternate-email" size={20}></MaterialIcons>
                <TextInput style={styles.textInput} placeholder="first name" keyboardType="email-address" onChangeText={(input) => dispatch(setFirsName(input))}></TextInput>
            </View>
            <View style={styles.aligner}>
                <MaterialIcons name="alternate-email" size={20}></MaterialIcons>
                <TextInput style={styles.textInput} placeholder="last name" secureTextEntry={true} onChangeText={(input) => dispatch(setLastName(input))}></TextInput>
            </View>
            <View style={{width: '90%'}}>
                <TouchableOpacity onPress={() => dispatch(register({ email, password, firstName, lastName, props}))} style={styles.loginButon}>
                    <Text style={{color: "#ffffff", textAlign: "center", fontWeight: 700, fontSize: 16}}>Register</Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "center", paddingBottom: 20}}>
                    <Text>Alredy have an acount?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                        <Text style={{color: "#ad40af", fontWeight: 700}}>  Login</Text>
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

export default RegisterScreen;