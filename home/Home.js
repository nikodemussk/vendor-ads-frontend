import React, { useEffect, useState } from "react";
import { Button, Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Slider from "../component/carousel/Slider";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import CustomImageCarousal from "../component/carousel2/CustomImageCarousal"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import EventCustomImageCarousal from "../component/event_carousel/CustomImageCarousal";
import { getCateringData, getData } from "./HomePageClient";
import { LocalStorage } from "../utils/LocalStorage";
import {ConstantStyles} from "../component/styles/ConstantStyles.js"

const HomeScreen = ({ navigation }) => {

    const [venueVendorData, setVenueData] = useState([]);
    const [fullName, setFullName] = useState("");
    const [cateringAdsData, setCateringAdsData] = useState([]);
    const [photographyVendorData, setPhotographyData] = useState([]);
    const [eventPlannerVendorData, setEventPlannerData] = useState([]);
    const [partyDecorPlannerVendorData, setPartyDecorPlannerVendorData] = useState([]);


    const [eventData, setEventData] = useState([]);

    const width = Dimensions.get('window').width;

    useEffect(() => {
        getCateringData()
            .then(response => setCateringAdsData(response))

        LocalStorage.getUserProfileFullName(setFullName)

        getData("Venue").then(setVenueData)
        getData("Photography").then(setPhotographyData)
        getData("Event Planner").then(setEventPlannerData)
        getData("Party Decor Planner").then(setPartyDecorPlannerVendorData)
    }, []);

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ margin: 1, width: '90%' }}>
                <View style={styles.fieldContainer}>
                    <View style={styles.titleContainer}>
                        <Text
                            style={styles.titleHeader}>
                            Hello,
                        </Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text
                            style={styles.titleHeader}>
                            {fullName}
                        </Text>
                    </View>
                </View>

                {/* <View> */}
                {/* <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1548504778-b14db6c34b04?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} resizeMode="cover" style={{ height: "100%" }}> */}
                {/* <View style={{backgroundColor: ConstantStyles.BRAND_COLOR, borderRadius: 5}}>
                        <Text style={{color: "#FFFFFF", fontWeight: 700, marginLeft: 5}}>Plan your next event with us now!</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("VendorDetailsView", item)}>
                            <Text>Find your vendor</Text>
                        </TouchableOpacity>
                </View> */}
                {/* </ImageBackground> */}
                {/* </View>

                <View>
                    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1548504778-b14db6c34b04?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} resizeMode="cover" style={{ height: "100%" }}>
                        <Text style={{color: "#FFFFFF", fontWeight: 700}}>Running a event related business?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("VendorDetailsView", item)}>
                            <Text>Promote your business here</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View> */}

                <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Find your perfect venue
                </Text>
                {venueVendorData !== [] && <CustomImageCarousal data={venueVendorData} autoPlay={false} pagination={true} navigation={navigation} />}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Event Planner
                </Text>

                {eventPlannerVendorData.length > 0 && <CustomImageCarousal data={eventPlannerVendorData} autoPlay={false} pagination={true} navigation={navigation} />}

            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Food & Catering
                </Text>

                {cateringAdsData.length > 0 && <CustomImageCarousal data={cateringAdsData} autoPlay={false} pagination={true} navigation={navigation} />}
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Photography
                </Text>

                {photographyVendorData.length > 0 && <CustomImageCarousal data={photographyVendorData} autoPlay={false} pagination={true} navigation={navigation} />}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Party Decor
                </Text>

                {partyDecorPlannerVendorData.length > 0 && <CustomImageCarousal data={partyDecorPlannerVendorData} autoPlay={false} pagination={true} navigation={navigation} />}
            </View>
            </View>

        </ScrollView>
    )
}

export default HomeScreen;