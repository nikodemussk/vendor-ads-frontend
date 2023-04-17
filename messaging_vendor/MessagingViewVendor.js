import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import { getMessage, getVendorDetails, sendMessage } from "./MessagingClient";

const MessagingViewVendor = ({ navigation, route }) => {

    const [messageData, setMessageData] = useState([]);
    const [sender, setSender] = useState("");
    // const [userUUID, setUserUUID] = useState("");
    const [message, setMessage] = useState("");
    const { vendorUUID, userId } = route.params;

    useEffect(() => {

        getMessage(userId, vendorUUID).then(data => setMessageData(data))

        AsyncStorage.getItem('vendorName')
            .then(setSender)
        getVendorDetails(userId, setSender);
    }, [messageData]);

    // console.log(vendorUUID, userId)
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {messageData.map((data, index) => {
                // index > 0 && console.log(messageData[index-1].sender, data.sender)
                return (
                    <View style={styles.fieldContainer}>
                            <View style={{...styles.profileButton}} >
                                {(index === 0 || messageData[index-1].sender !== data.sender) && 
                                <Text style={data.sender === sender ? 
                                    {textAlign: "right", marginLeft: "20%", marginRight: "2%", fontWeight: 700} : 
                                    {textAlign: "left", marginRight: "20%", marginLeft: "2%", fontWeight: 700}}>
                                    {data.sender}</Text>}
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
                    onPress={() => sendMessage(userId, vendorUUID, "123", message, sender)} />
            </View>
        </ScrollView>
    )
}

export default MessagingViewVendor;
