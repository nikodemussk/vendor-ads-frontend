import React, { useEffect, useState } from "react";
import { Button, Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Slider from "../component/carousel/Slider";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import CustomImageCarousal from "../component/carousel2/CustomImageCarousal"
import { ScrollView } from "react-native-gesture-handler";
import EventCustomImageCarousal from "../component/event_carousel/CustomImageCarousal";
import { getCateringData, getData } from "./HomePageClient";

const HomeScreen = ({ navigation }) => {

    const [venueVendorData, setVenueData] = useState([]);
    const [cateringAdsData, setCateringAdsData] = useState([]);
    const [photographyVendorData, setPhotographyData] = useState([]);
    const [eventPlannerVendorData, setEventPlannerData] = useState([]);
    const [partyDecorPlannerVendorData, setPartyDecorPlannerVendorData] = useState([]);


    const [eventData, setEventData] = useState([]);

    const width = Dimensions.get('window').width;

    useEffect(() => {
        getCateringData()
        .then(response => setCateringAdsData(response))

        getData("Venue").then(setVenueData)
        getData("Photography").then(setPhotographyData)
        getData("Event Planner").then(setEventPlannerData)
        getData("Party Decor Planner").then(setPartyDecorPlannerVendorData)
    }, []);

    const _renderItem = ({item,index}) => {
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Find your perfect venue
                </Text>
               {venueVendorData !== [] && <CustomImageCarousal data={venueVendorData} autoPlay={false} pagination={true} navigation={navigation}/>}
            </View>
            {/* <View style={styles.highlightedContainer}>
                <Text style={styles.bigTitle}>
                    Upcoming Public Event
                </Text>

                {(eventData[0] !== undefined && eventData[0].images !== undefined) ? <EventCustomImageCarousal data={eventData} autoPlay={false} pagination={true} navigation={navigation}/> : ""}

            </View> */}
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Event Planner
                </Text>

                {eventPlannerVendorData.length > 0 && <CustomImageCarousal data={eventPlannerVendorData} autoPlay={false} pagination={true} navigation={navigation}/>}

            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Food & Catering
                </Text>

                {cateringAdsData.length > 0 && <CustomImageCarousal data={cateringAdsData} autoPlay={false} pagination={true} navigation={navigation}/>}
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Photography
                </Text>

                {photographyVendorData.length > 0 && <CustomImageCarousal data={photographyVendorData} autoPlay={false} pagination={true} navigation={navigation}/>}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Party Decor
                </Text>

                {partyDecorPlannerVendorData.length > 0 && <CustomImageCarousal data={partyDecorPlannerVendorData} autoPlay={false} pagination={true} navigation={navigation}/>}
            </View>
        </ScrollView>
    )
}

export default HomeScreen;