import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "../component/styles/CommonStyles";
import { sendReview } from "./CreateAdvertisementReviewAdapter";

export const CreateAdvertisementReview = ({route, navigation}) => {

    const [review, setReview] = useState("");
    const {advertisementId} = route.params;
    const [userId, setUserUUID] = useState("");

    useEffect(() => {
        AsyncStorage.getItem('uuid')
        .then(userId => {
            setUserUUID(userId);
        });
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text
                    style={styles.bigTitle}>
                    Submit a Review
                </Text>
            
                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Write your review here
                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setReview}
                        multiline={true}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        margin: "2%",
                        backgroundColor: "#EFD0DD",
                        borderColor: "#EFD0DD",
                        // borderWidth: "medium",
                        aspectRatio: "6/1",
                        justifyContent: "center"
                        // borderRadius: "10px"
                    }} //userId, adsId, review
                    onPress={() => sendReview(userId, advertisementId, review)}>
                    <Text style={{ margin: "auto", color: "#FFFFFF", textAlign: "center" }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
