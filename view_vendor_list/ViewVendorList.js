import React, { useEffect, useState } from "react";
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";

const ViewVendorList = ({ navigation }) => {

    const [data, setData] = useState([]);


    // useEffect(() => {
    //     getEventList().then(data => setData(data));
    // }, []);

    const categoriesData = [{
        title: "Venue",
        imageUrl: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }, {
        title: "Catering",
        imageUrl: "https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
    }, {
        title: "Photography",
        imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
    }, {
        title: "Event Planner",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    }, {
        title: "Event Decor",
        imageUrl: "https://images.unsplash.com/photo-1625076019815-b1a5f7e5ef1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    ]

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Browse Categories
                </Text>

                {categoriesData.map(category => {
                    return (
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate("VendorByCategory", {"category": category.title})}>
                            <View style={{ aspectRatio: "3/1" }}>
                                <ImageBackground source={{uri: category.imageUrl}} resizeMode="cover" style={{ height: "100%" }}>
                                    <View style={styles.vendorPlaceholder}>
                                        <Text style={styles.vendorTitle}>{category.title}</Text> 
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>

        </ScrollView>
    )
}

export default ViewVendorList;
