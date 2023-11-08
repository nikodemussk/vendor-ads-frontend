import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import { TouchableOpacity } from "react-native";
// import { styles } from '../component/styles/CommonStyles';
import { registerNewUser } from "./RegisterAccountClient";
import { Platform } from 'react-native';

const RegisterAccount = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const { width } = useWindowDimensions();
    const SIZE = (width - (width * 0.08)) * 0.25;
    const BUTTON_SIZE = (width - (width * 0.08)) * 0.49;

    return (
        // <View>
        //     <View style={styles.container}>
        //         <View style={styles.fieldContainer}>
        //             <View style={styles.inputContainer}>
        //                 <Text
        //                     style={styles.inputTitle}>
        //                     Full Name
        //                 </Text>
        //                 <TextInput
        //                     style={styles.input}
        //                     onChangeText={setFullName}
        //                 />
        //             </View>
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
        //             title={"Register Account"}
        //             onPress={() => registerNewUser(navigation, email, password, fullName)} />
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
                        width: BUTTON_SIZE,
                        margin: "2%",
                        backgroundColor: "#EFD0DD",
                        borderColor: "#EFD0DD",
                        // borderWidth: "medium",
                        aspectRatio: "6/1",
                        // borderRadius: "10px"
                    }}
                    // onPress={() => validateUserLogin(navigation, email, passsword)}>
                    onPress={() => registerNewUser(navigation, email, password, fullName)}>

                    <Text style={{ margin: "auto", color: "#FFFFFF" }}>Register</Text>
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
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ margin: "auto", color: "#FFFFFF" }}>Back to login</Text>
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
        container: {
            // display: 'flex',
            backgroundColor: '#fff',
            // alignItems: 'center',
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
            borderColor: '#B5B4B0'
        },
        inputTitle: {
            color: '#B5B4B0',
            textAlign: 'left',
            // alignItems: 'left',
            // fontSize: '1rem',
            // marginBottom: '0.7em'
        },
        inputContainer: {
            width: '100%',
            // marginBottom: '2em'
        },
        bigTitle: {
            // fontSize: '2em',
            fontWeight: '700',
            // marginBottom: '1.5em'
        }
    });
}


export default RegisterAccount;