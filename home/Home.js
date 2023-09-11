import React, { useEffect, useState } from "react";
import { Button, Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Slider from "../component/carousel/Slider";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import { styles } from "../component/styles/CommonStyles";
import CustomImageCarousal from "../component/carousel2/CustomImageCarousal"
import { ScrollView } from "react-native-gesture-handler";
import EventCustomImageCarousal from "../component/event_carousel/CustomImageCarousal";

const HomeScreen = ({ navigation }) => {

    const [data, setData] = useState([]);

    const width = Dimensions.get('window').width;

    // useEffect(() => {
    //     getEventList().then(data => setData(data));
    // }, []);

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

    const aaaa = [
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
      ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Find your perfect venue
                </Text>
               {/* <Slider style={{width: "100px"}} /> */}
               <CustomImageCarousal data={aaaa} autoPlay={false} pagination={true} navigation={navigation}/>
                {data != undefined && data.map(datum =>
                    <View>
                        <Text style={styles.eventTitle}>{datum.name}</Text>
                        <Text>{datum.location}</Text>
                        <Text>{new Date(datum.dateTime * 1000).toISOString()}</Text>
                    </View>)}
            </View>
            <View style={styles.highlightedContainer}>
                <Text style={styles.bigTitle}>
                    Upcoming Public Event
                </Text>

                <EventCustomImageCarousal data={aaaa} autoPlay={false} pagination={true} navigation={navigation}/>

            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Event Planner
                </Text>

                <CustomImageCarousal data={aaaa} autoPlay={false} pagination={true} navigation={navigation}/>

                {/* {data != undefined && data.map(datum =>
                    <View>
                        <Text style={styles.eventTitle}>{datum.name}</Text>
                        <Text>{datum.location}</Text>
                        <Text>{new Date(datum.dateTime * 1000).toISOString()}</Text>
                    </View>)} */}
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Photography
                </Text>

                <CustomImageCarousal data={aaaa} autoPlay={false} pagination={true} navigation={navigation}/>
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    Party Decor
                </Text>

                <CustomImageCarousal data={aaaa} autoPlay={false} pagination={true} navigation={navigation}/>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;