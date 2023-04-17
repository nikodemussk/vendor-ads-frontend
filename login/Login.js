import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { EnviornmentVariable } from '../component/environment/EnvironmentVariable';
import { ConstantStyles } from '../component/styles/ConstantStyles';
// import { styles } from '../component/styles/CommonStyles';
import { loginCheck, validateUserLogin } from './LoginAdapter';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [passsword, setPassword] = useState("");
    const [notification, setNotification] = useState("");
    const [isError, setError] = useState(false);

    const { width } = useWindowDimensions();
    const SIZE = (width - (width * 0.08)) * 0.25;
    const BUTTON_SIZE = (width - (width * 0.08)) * 0.75;

    useEffect(() => {
        AsyncStorage.getItem('uuid')
            .then(uuid => {
                if (uuid !== null && uuid !== undefined && uuid !== "undefined") {
                    navigation.navigate('BottomNavigation')
                }
            })
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.bigTitle}>
                        Welcome to {EnviornmentVariable.BRAND_NAME}
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
                <View>
                    <Text
                        style={styles.inputTitle, { color: "#FA0000" }}>
                        {notification}
                    </Text>
                </View>
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
                    onPress={() => validateUserLogin(navigation, email, passsword, setNotification)}>
                    <Text style={{ width: BUTTON_SIZE, aspectRatio: "8/1", verticalAlign: 'middle', margin: "auto", color: "#FFFFFF", textAlign: 'center', textAlignVertical: 'center' }}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "space-around"
            }} >
                <Text>Forgotten your password?</Text>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "space-around",
                marginTop: 30
            }} >
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RegisterAccount')}
                >
                    <Text style={{ fontWeight: 900, color: ConstantStyles.BRAND_COLOR }}> Register Now!</Text>
                </TouchableOpacity>
            </View>

            {/* <TouchableOpacity
                    style={{
                        borderRadius: styles.button.borderRadius,
                        width: BUTTON_SIZE,
                        margin: "2%",
                        backgroundColor: "#EFD0DD",
                        borderColor: "#EFD0DD",
                        // borderWidth: "medium",
                        aspectRatio: "6/1",
                        // borderRadius: "10px"
                    }}
                    <Text style={{ margin: "auto", color: "#FFFFFF", textAlign: 'center' }}>Register Now</Text>
                </TouchableOpacity> */}
            {/* onPress={() => navigation.navigate('RegisterAccount')}> */}
        </View >
    )
}

let styles;
if (Platform.OS === "web") {
    styles = StyleSheet.create({
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
            marginBottom: '1.5em',
            color: '#000000'
        }
    });
} else if (Platform.OS === "android") {
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



export default Login;
