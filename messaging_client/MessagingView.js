import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import { getMessage, sendMessage } from "./MessagingClient";

const MessagingView = ({ navigation, route }) => {

    const [messageData, setMessageData] = useState([]);
    const [sender, setSender] = useState("");
    const [userUUID, setUserUUID] = useState("");
    const [message, setMessage] = useState("");
    const {vendorId, advertisementId} = route.params;

    useEffect(() => {
        AsyncStorage.getItem('uuid')
            .then(userId => {
                setUserUUID(userId);
                getMessage(userId, vendorId).then(data => setMessageData(data))
            })
        AsyncStorage.getItem('fullName')
        .then(setSender)

    }, [messageData]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {messageData.map((data, index) => {
                return (
                    <View style={styles.fieldContainer}>
                            <View style={{...styles.profileButton}} >
                                {(index === 0 || messageData[index-1].sender !== data.sender) && <Text style={data.sender === sender ? {textAlign: "right", marginLeft: "20%", marginRight: "2%", fontWeight: 700} : {textAlign: "left", marginRight: "20%", marginLeft: "2%", fontWeight: 700}}>{data.sender}</Text>}
                                <Text style={data.sender === sender ? {textAlign: "right", marginLeft: "20%", marginRight: "2%"} : {textAlign: "left", marginRight: "20%", marginLeft: "2%"}}>{data.message}</Text>
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
                    onPress={() => sendMessage(userUUID, vendorId, "123", message, sender, advertisementId)
                    .then(() => getMessage(userUUID, vendorId))
                    .then(response => setMessageData(response))
                    .then(console.log("AAAA"))} />
            </View>
        </ScrollView>
    )
}

export default MessagingView;
