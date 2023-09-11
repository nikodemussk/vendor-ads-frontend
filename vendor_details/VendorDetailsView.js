import React, { useEffect, useState } from "react";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import VendorViewCustomImageCarousal from "../component/vendor_view_carousel/CustomImageCarousal";

const VendorDetailsView = ({ navigation }) => {

    const aaaa = {
        vendorName: "HOTEL JW MARRIOTT (PAKET PERNIKAHAN ALL-IN NEW NORMAL)",
        images: [
        {
            image: require('../assets/1.jpg'),
        },
        {
            image: require('../assets/1.jpg'),
        },
        {
            image: require('../assets/1.jpg'),
        },
        {
            image: require('../assets/1.jpg'),
        },
        {
            image: require('../assets/1.jpg'),
        }
    ]}

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    {aaaa.vendorName}
                </Text>

                <VendorViewCustomImageCarousal data={aaaa.images} autoPlay={false} pagination={true} />

                <View style={styles.vendorDetailsOrderNowButton}>
                    <Button style={styles.vendorDetailsOrderNowButton} title={"Order Now"}  color="#EFD0DD" onPress={() => navigation.navigate('BookVendorView', aaaa)}/>
                </View>
                <Text style={styles.vendorDetailsDescriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla pharetra diam sit amet. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. At consectetur lorem donec massa sapien faucibus et. Hac habitasse platea dictumst vestibulum rhoncus. Ut ornare lectus sit amet est placerat in egestas erat. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eu turpis egestas pretium aenean pharetra magna ac placerat. Lobortis feugiat vivamus at augue eget arcu dictum varius. Nascetur ridiculus mus mauris vitae. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Nulla aliquet enim tortor at auctor urna. Aliquam vestibulum morbi blandit cursus risus at. Leo duis ut diam quam nulla porttitor massa. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Justo nec ultrices dui sapien eget. In arcu cursus euismod quis viverra nibh. Ullamcorper sit amet risus nullam eget felis eget nunc.

                    Odio pellentesque diam volutpat commodo sed egestas. Ultrices in iaculis nunc sed augue lacus. Ultricies leo integer malesuada nunc vel risus. Proin libero nunc consequat interdum varius sit. Nibh mauris cursus mattis molestie a iaculis at erat. Congue eu consequat ac felis donec. Nunc non blandit massa enim nec. Amet consectetur adipiscing elit pellentesque. Egestas dui id ornare arcu odio ut sem nulla pharetra. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Aliquam ut porttitor leo a. Integer feugiat scelerisque varius morbi enim. Massa ultricies mi quis hendrerit dolor magna eget est. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Nunc aliquet bibendum enim facilisis gravida. Mauris a diam maecenas sed enim ut sem. Blandit aliquam etiam erat velit scelerisque in dictum. Cursus risus at ultrices mi.
                </Text>
                {/* {categoriesData.map(category => {
                    return (
                        <View style={{aspectRatio: "3/1"}}>
                             <ImageBackground source={category.imageUrl} resizeMode="cover" style={{height: "100%"}}>
                                <View style={styles.vendorPlaceholder}>
                                    <Text style={styles.vendorTitle}>{category.title}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    )
                })} */}
            </View>

        </ScrollView>
    )
}

export default VendorDetailsView;