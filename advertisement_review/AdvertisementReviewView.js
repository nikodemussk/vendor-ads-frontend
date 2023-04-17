import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { styles } from "../component/styles/CommonStyles";
import { getReviews } from "./AdvertisementReviewAdapter";


export const AdvertisementReviewView = (props) => {

    const [reviewData, setReviewData] = useState(null);
    const { advertisementId } = props;

    useEffect(() => {
        getReviews(advertisementId).then(setReviewData);
    }, []);

    return (
        <View style={{ ...styles.fieldContainer, marginTop: "3%" }}>
            <Text style={styles.bigTitle}>Reviews</Text>
            {reviewData?.map(review => {
                return (
                    <View style={{ borderColor: "#000000", borderWidth: 1 }}>
                        <Text>{review.userName}</Text>
                        <Text>{review.review}</Text>
                    </View>
                )
            })}

        </View>
    )
}