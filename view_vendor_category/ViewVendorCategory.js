import React, { useEffect, useState } from "react";
import { Button, useWindowDimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import CustomImage from "./CustomImage";
import Icon from 'react-native-vector-icons/Ionicons';


const ViewVendorCategory = ({ navigation, categoryName }) => {

    const [data, setData] = useState([]);

    const { width } = useWindowDimensions();
    const SIZE = (width - (width * 0.08)) * 0.25;
    const BUTTON_SIZE = (width - (width * 0.08)) * 0.49;
    const SPACER = (width - SIZE) / 2;

    const categoriesData = [{
        title: "Venue",
        image: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }, {
        title: "Catering",
        image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
    }, {
        title: "Photography",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
    }, {
        title: "Event Planner",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    }, {
        title: "Event Decor",
        image: "https://images.unsplash.com/photo-1625076019815-b1a5f7e5ef1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    ]

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    View {categoryName} Vendor
                </Text>
            </View> */}


            {[1,2,3,4,5].map(index => {
                return (
                    <View style={{ borderColor: "#EFD0DD", borderWidth: "thin", borderRadius: "2px", padding: "2%", margin: "2%" }}>
                        <Text>Alissa Bride</Text>
                        <Text>Rating: 5</Text>
                        <Text><Icon name={"location-outline"} />Jakarta</Text>

                        <View style={{ display: "flex", flexDirection: "row", maxWidth: "100%", justifyContent: "space-around" }}>
                            <Image source={categoriesData[0].image} style={{ width: "24%", height: "90px", margin: "0.2%" }} />
                            <Image source={categoriesData[0].image} style={{ width: "24%", height: "90px", margin: "0.2%" }} />
                            <Image source={categoriesData[0].image} style={{ width: "24%", height: "90px", margin: "0.2%" }} />
                            <Image source={categoriesData[0].image} style={{ width: "24%", height: "90px", margin: "0.2%" }} />
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", maxWidth: "100%", justifyContent: "space-around" }} >
                            <TouchableOpacity style={{ width: BUTTON_SIZE, margin: "2%", backgroundColor: "#EFD0DD", borderColor: "#EFD0DD", borderWidth: "medium", aspectRatio: "6/1", borderRadius: "10px" }} onPress={() => navigation.navigate('BookVendorView')}>
                                <Text style={{ margin: "auto", color: "#FFFFFF" }}>Book Now</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: BUTTON_SIZE, margin: "2%", backgroundColor: "#FFFFFF", borderColor: "#EFD0DD", borderWidth: "medium", aspectRatio: "6/1", borderRadius: "10px" }} onPress={() => navigation.navigate("VendorDetailsView")}>
                                <Text style={{ margin: "auto", color: "#EFD0DD" }}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                )
            })}

            {/* <CustomImage
                // key={index}
                // index={index}
                item={categoriesData}
                x={0}
                size={SIZE}
                spacer={SPACER}
              /> */}

        </ScrollView >
    )
}

export default ViewVendorCategory;
