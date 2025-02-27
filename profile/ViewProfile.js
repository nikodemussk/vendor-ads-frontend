import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import { ConstantStyles } from "../component/styles/ConstantStyles";
import { checkIfUserIsAVendor } from "./ViewProfileClient";

const ViewProfile = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [fullName, setFullName] = useState("");
    const [userUUID, setUserUUID] = useState("");
    const [registeredAsAVendor, setRegisteredAsAVendor] = useState(false);
    const [vendorUUID, setVendorUUID] = useState("");
    // const fullName = AsyncStorage.getItem('fullName')
    // const fullName = "Profile"

    useEffect(() => {
        AsyncStorage.getItem('fullName')
            .then(name => setFullName(name))
        AsyncStorage.getItem('uuid')
            .then(userId => {
                setUserUUID(userId);
                checkIfUserIsAVendor(setRegisteredAsAVendor, setVendorUUID, userId)
            })
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fieldContainer}>
                <View style={{ aspectRatio: "3/1" }}>
                    <ImageBackground source={{uri: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}} resizeMode="cover" style={{ height: "100%" }}>
                        <View style={styles.vendorPlaceholder}>
                            <Text style={styles.vendorTitle}>{fullName}</Text>
                        </View>
                    </ImageBackground>
                </View>
                {registeredAsAVendor ?
                    <View>
                        <View style={styles.profileButton} >
                            <Button
                                style={styles.profileButton}
                                title={"Add Listing"}
                                color={ConstantStyles.BRAND_COLOR}
                                onPress={() => navigation.navigate('CreateAnAds', {"vendorUUID": vendorUUID})} 
                                />
                        </View>
                        <View style={styles.profileButton} >
                            <Button
                                style={styles.profileButton}
                                title={"View Order"}
                                color={ConstantStyles.BRAND_COLOR}
                                onPress={() => navigation.navigate('RegisterAsAVendor')} />
                        </View>
                        <View style={styles.profileButton} >
                            <Button
                                style={styles.profileButton}
                                title={"View Message"}
                                color={ConstantStyles.BRAND_COLOR}
                                onPress={() => navigation.navigate('AllMessagingView', vendorUUID)} />
                        </View>
                    </View>
                    :
                    <View style={styles.profileButton} >
                        <Button
                            style={styles.profileButton}
                            title={"Register as a Vendor"}
                            color={ConstantStyles.BRAND_COLOR}
                            onPress={() => navigation.navigate('RegisterAsAVendor')} />

                    </View>
                }
                <View style={styles.profileButton} >
                    <Button
                        style={styles.profileButton}
                        title={"Log out"}
                        color={ConstantStyles.BRAND_COLOR}
                        onPress={() => navigation.navigate('RegisterAsAVendor')} />
                </View>
                <View style={styles.profileButton} >
                    <Text style={styles.profileButton}>User ID: {userUUID}</Text>
                </View>
                {registeredAsAVendor ?
                    <View style={styles.profileButton} >
                        <Text style={styles.profileButton}>Vendor ID: {vendorUUID}</Text>
                    </View> :
                    <View></View>}

            </View>
        </ScrollView>
    )
}

export default ViewProfile;
