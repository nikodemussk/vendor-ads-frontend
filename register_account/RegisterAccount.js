import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import { TouchableOpacity } from "react-native";
// import { styles } from '../component/styles/CommonStyles';
import { registerNewUser } from "./RegisterAccountClient";
import { Platform } from 'react-native';
import { ConstantStyles } from "../component/styles/ConstantStyles";

const RegisterAccount = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const { width } = useWindowDimensions();
    const SIZE = (width - (width * 0.08)) * 0.25;
    const BUTTON_SIZE = (width - (width * 0.08)) * 0.75;

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.bigTitle}>
                        Sign Up
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Password
                    </Text>

                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Full Name
                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setFullName}
                    />
                </View>
                {/* <DateTimePicker onChange={setDateTime}/> */}
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "space-around"
            }} >
                <TouchableOpacity
                    style={{
                        borderRadius: styles.button.borderRadius,
                        width: BUTTON_SIZE,
                        margin: "2%",
                        backgroundColor: ConstantStyles.BRAND_COLOR,
                        borderColor: ConstantStyles.BRAND_COLOR,
                        // borderWidth: "medium",
                        aspectRatio: "8/1",
                        // borderRadius: "10px"
                    }}
                    onPress={() => registerNewUser(navigation, email, password, fullName)}>
                    <Text style={{ width: BUTTON_SIZE, aspectRatio: "8/1", verticalAlign: 'middle', margin: "auto", color: "#FFFFFF", textAlign: 'center', textAlignVertical: 'center' }}>Regsiter</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "space-around",
                marginTop: 30
            }} >
                <Text>Already have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ fontWeight: 900, color: ConstantStyles.BRAND_COLOR }}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

let styles;
if (Platform.OS === "web") {
    styles = StyleSheet.create({
        container: {
            // display: 'flex',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        fieldContainer: {
            width: '70%'
        },
        input: {
            textAlign: 'center',
            backgroundColor: '#FFF',
            borderBottomWidth: '1px',
            borderColor: '#B5B4B0'
        },
        inputTitle: {
            color: '#B5B4B0',
            textAlign: 'left',
            alignItems: 'left',
            fontSize: '1rem',
            marginBottom: '0.7em'
        },
        inputContainer: {
            width: '100%',
            marginBottom: '2em'
        },
        bigTitle: {
            fontSize: '2em',
            fontWeight: '700',
            marginBottom: '1.5em'
        }
    });
} else {
    styles = StyleSheet.create({
        titleContainer: {
            marginBottom: 10,
        },
        button: {
            borderRadius: 5,
        },
        container: {
            // display: 'flex',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        fieldContainer: {
            width: '70%'
        },
        input: {
            textAlign: 'left',
            backgroundColor: '#FFF',
            borderBottomWidth: 1,
            borderColor: '#B5B4B0',
        },
        inputTitle: {
            color: '#000000',
            textAlign: 'left',
            // alignItems: 'left',
            fontSize: 13.0,
            marginBottom: 0.7
        },
        inputContainer: {
            // width: '100%',
            marginBottom: 2
        },
        bigTitle: {
            fontSize: 20.0,
            fontWeight: '700',
            marginBottom: 1.5
        }
    });
}


export default RegisterAccount;