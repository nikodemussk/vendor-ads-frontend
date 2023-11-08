import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import { getAllMessageForVendor, getMessage, getVendorDetails, sendMessage } from "./MessagingClient";

const AllMessagingView = ({ navigation, route }) => {

    const [messageData, setMessageData] = useState([]);
    const [messageList, setMessageList] = useState([]);
    const [sender, setSender] = useState("");
    const [userUUID, setUserUUID] = useState("");
    const [message, setMessage] = useState("");
    const [vendorUUID, setVendorUUID] = useState("");
    // const {vendorUUID} = route.params;

    useEffect(() => {
        // AsyncStorage.getItem('uuid')
        //     .then(userId => {
        //         setUserUUID(userId);
        //         getMessage(userId, vendorUUID).then(data => setMessageData(data))
        //     })


        AsyncStorage.getItem('fullName')
            .then(setSender)

        AsyncStorage.getItem('vendorUUID')
            .then(vendorId => {
                setVendorUUID(vendorId)
                return vendorId;
            })
            .then(getAllMessageForVendor)
            // .then(console.log)
            .then(setMessageList)

        getVendorDetails(userUUID, setSender);
        // getAllMessageForVendor(vendorUUID)
        // // .then(response => console.log(response))
        // .then(setMessageList)
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {messageList.map(data => {
                return (
                    <View style={styles.fieldContainer}>
                        <TouchableOpacity style={{...styles.profileButton, backgroundColor: "#E6AC7F", justifyContent: "center"}} onPress={() => navigation.navigate("MessagingViewVendor", { "vendorUUID": vendorUUID, "userId": data.userId })}>
                            <View style={styles.profileButton} >
                                <Text style={{...styles.profileButton, color: "#FFFFFF"}}>{data.fullName}</Text>
                                {/* <Text style={styles.profileButton}>{data.advertisementId}</Text> */}
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default AllMessagingView;
