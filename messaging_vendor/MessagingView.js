import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import { getMessage, getVendorDetails, sendMessage } from "./MessagingClient";

const MessagingView = ({ navigation, route }) => {

    const [messageData, setMessageData] = useState([]);
    const [sender, setSender] = useState("");
    const [userUUID, setUserUUID] = useState("");
    const [message, setMessage] = useState("");
    const {vendorUUID} = route.params;

    useEffect(() => {
        AsyncStorage.getItem('uuid')
            .then(userId => {
                setUserUUID(userId);
                getMessage(userId, vendorUUID).then(data => setMessageData(data))
            })
        AsyncStorage.getItem('fullName')
        .then(setSender)
        getVendorDetails(userUUID, setSender);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {messageData.reverse().map(data => {
                return (
                    <View style={styles.fieldContainer}>
                        <View style={styles.profileButton} >
                            <Text style={styles.profileButton}>{data.sender}</Text>
                            <Text style={styles.profileButton}>{data.message}</Text>
                        </View>
                    </View>
                )
            })}
            <View style={styles.fieldContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setMessage}
                />
                <Button style={styles.vendorDetailsOrderNowButton}
                    title={"Send Message"} color="#EFD0DD"
                    onPress={() => sendMessage(userUUID, vendorUUID, "123", message, sender, setMessageData)} />
            </View>
        </ScrollView>
    )
}

export default MessagingView;
