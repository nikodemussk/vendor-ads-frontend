import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
// import { styles } from '../component/styles/CommonStyles';
import { loginCheck, validateUserLogin } from './LoginAdapter';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [passsword, setPassword] = useState("");
    const [notification, setNotification] = useState("");

    const { width } = useWindowDimensions();
    const SIZE = (width - (width * 0.08)) * 0.25;
    const BUTTON_SIZE = (width - (width * 0.08)) * 0.49;

    useEffect(() => {
        AsyncStorage.getItem('uuid')
            .then(uuid => {
                if (uuid !== null && uuid !== undefined && uuid !== "undefined") {
                    navigation.navigate('BottomNavigation')
                }
            })
    }, []);

    return (
        // <View>
        //     <View style={styles.container}>
        //         <View style={styles.fieldContainer}>
        //             <View style={styles.inputContainer}>
        //                 <Text
        //                     style={styles.inputTitle}>
        //                     Email
        //                 </Text>
        //                 <TextInput
        //                     style={styles.input}
        //                     onChangeText={setEmail}
        //                 />
        //             </View>
        //             <View style={styles.inputContainer}>
        //                 <Text
        //                     style={styles.inputTitle}>
        //                     Password
        //                 </Text>
        //                 <TextInput
        //                     style={styles.input}
        //                     onChangeText={setPassword}
        //                 />
        //             </View>
        //         </View>
        //         <Button
        //             title={"Login"}
        //             onPress={() => validateUserLogin(navigation, email, passsword)} />
        //         <Button
        //             title={"Register"}
        //             onPress={() => navigation.navigate('RegisterAccount')} />
        //     </View>
        // </View>


        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text
                    style={styles.bigTitle}>
                    Login
                </Text>
                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        {notification}
                    </Text>
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
                        width: BUTTON_SIZE,
                        margin: "2%",
                        backgroundColor: "#EFD0DD",
                        borderColor: "#EFD0DD",
                        // borderWidth: "medium",
                        aspectRatio: "6/1",
                        // borderRadius: "10px"
                    }}
                    onPress={() => validateUserLogin(navigation, email, passsword, setNotification)}>
                    <Text style={{ margin: "auto", color: "#FFFFFF" }}>Login</Text>
                </TouchableOpacity>


            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "space-around"
            }} >
                <TouchableOpacity
                    style={{
                        width: BUTTON_SIZE,
                        margin: "2%",
                        backgroundColor: "#EFD0DD",
                        borderColor: "#EFD0DD",
                        // borderWidth: "medium",
                        aspectRatio: "6/1",
                        // borderRadius: "10px"
                    }}
                    onPress={() => navigation.navigate('RegisterAccount')}>
                    <Text style={{ margin: "auto", color: "#FFFFFF" }}>Register Now</Text>
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
} else if (Platform.OS === "android") {
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
            // borderBottomWidth: '1px',
            // borderColor: '#B5B4B0'
        },
        inputTitle: {
            color: '#B5B4B0',
            textAlign: 'left',
            // alignItems: 'left',
            fontSize: 1.0,
            marginBottom: 0.7
        },
        inputContainer: {
            // width: '100%',
            marginBottom: 2
        },
        bigTitle: {
            fontSize: 2.0,
            fontWeight: '700',
            marginBottom: 1.5
        }
    });
}



export default Login;
