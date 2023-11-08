import React, { useEffect, useState } from "react";
import { Button, useWindowDimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import CustomImage from "./CustomImage";
import Icon from 'react-native-vector-icons/Ionicons';
import { getAdsByCategory } from "./ViewVendorClient";
import CustomImageCarousal from "../component/carousel2/CustomImageCarousal"



const ViewVendorCategory = ({ navigation, route }) => {

    const [data, setData] = useState([]);

    const { width } = useWindowDimensions();
    const SIZE = (width - (width * 0.08)) * 0.25;
    const BUTTON_SIZE = (width - (width * 0.08)) * 0.49;
    const SPACER = (width - SIZE) / 2;

    const { category } = route.params;

    useEffect(() => {
        getAdsByCategory(category).then(setData)
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data.map(ads => {
                return (
                    <View style={{
                        borderColor: "#EFD0DD",
                        borderWidth: 1,
                        // borderWidth: "thin", 
                        // borderRadius: "2px", 
                        padding: "2%", margin: "2%"
                    }}>
                        <Text>{ads.name}</Text>
                        <Text>{ads.rating ? `Rating: ${ads.rating}` : "New Vendor"}</Text>
                        <Text><Icon name={"location-outline"} />{ads.location || "Location Not Specified"}</Text>

                        <View style={{ display: "flex", flexDirection: "row", maxWidth: "100%", justifyContent: "space-around" }}>
                            {
                                ads.images.map(image => <Image source={{uri: image.imageFileName}} style={{width: 100, aspectRatio: 1/1}} />)
                                    
                            }



                        </View>
                        <View style={{ display: "flex", flexDirection: "row", maxWidth: "100%", justifyContent: "space-around" }} >
                            <TouchableOpacity style={{
                                width: BUTTON_SIZE, margin: "2%", backgroundColor: "#EFD0DD", borderColor: "#EFD0DD",
                                // borderWidth: "medium", 
                                justifyContent: "center",
                                aspectRatio: "6/1",
                                // borderRadius: "10px" 
                            }} onPress={() => navigation.navigate('BookVendorView', { "name": ads.name })}>
                                <Text style={{ margin: "auto", color: "#FFFFFF", textAlign: "center" }}>Book Now</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                width: BUTTON_SIZE, margin: "2%", backgroundColor: "#FFFFFF", borderColor: "#EFD0DD",
                                // borderWidth: "medium", 
                                aspectRatio: "6/1",
                                justifyContent: "center",
                                borderWidth: 1
                                // borderRadius: "10px" 
                            }} onPress={() => navigation.navigate("VendorDetailsView", {
                                "vendorId": ads.vendorId, "advertisementId": ads.advertisementId
                            })}>
                                <Text style={{ margin: "auto", color: "#EFD0DD", textAlign: "center" }}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                )
            })}

        </ScrollView >
    )
}

export default ViewVendorCategory;
