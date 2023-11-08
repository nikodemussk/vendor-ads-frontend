import React, { useEffect, useState } from "react";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { AdvertisementReviewView } from "../advertisement_review/AdvertisementReviewView";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import VendorViewCustomImageCarousal from "../component/vendor_view_carousel/CustomImageCarousal";
import { getAdsCall } from "./VendorDetailsClient";

const VendorDetailsView = ({ navigation, route }) => {

    const {vendorId, advertisementId} = route.params;
    const [adsData, setAdsData] = useState(null);

    useEffect(() => {
        getAdsCall(advertisementId)
        .then(setAdsData);
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    {adsData?.name}
                </Text>
                <Text style={styles.bigTitle}>
                    Vendor ID: {vendorId}
                </Text>
                <Text style={styles.bigTitle}>
                    Ads ID: {advertisementId}
                </Text>
                <Text style={styles.bigTitle}>
                    Category: {adsData?.category}
                </Text>

                {adsData !== null && <VendorViewCustomImageCarousal data={adsData.images} autoPlay={false} pagination={true} />}

                <View style={styles.vendorDetailsOrderNowButton}>
                    <Button style={styles.vendorDetailsOrderNowButton} title={"Order Now"} color="#EFD0DD" onPress={() => navigation.navigate('BookVendorView', adsData)} />
                </View>
                <View style={styles.vendorDetailsOrderNowButton} style={{marginTop: "10px"}}>
                    <Button style={styles.vendorDetailsOrderNowButton} title={"Message Vendor"} color="#EFD0DD" onPress={() => navigation.navigate('MessagingView', adsData)} />
                </View>
                <View style={styles.vendorDetailsOrderNowButton} style={{marginTop: "10px"}}>
                    <Button style={styles.vendorDetailsOrderNowButton} title={"Add Review"} color="#EFD0DD" onPress={() => navigation.navigate('CreateAdvertisementReview', {"advertisementId": advertisementId})} />
                </View>

                <Text style={styles.vendorDetailsDescriptionText}>
                    {adsData?.description}
                </Text>

                <AdvertisementReviewView advertisementId={advertisementId} />
            </View>

        </ScrollView>
    )
}

export default VendorDetailsView;