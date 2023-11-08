import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import DateTimePicker from '../component/date_time_picker/DateTimePicker';
import { Platform } from 'react-native';
import { styles } from '../component/styles/CommonStyles';

const BookVendorView = ({ navigation, route}) => {

    const {name} = route.params;

    const [eventName, setEventName] = useState("");
    const [location, setLocation] = useState("");
    const [dateTime, setDateTime] = useState(null);

    // console.log(route)
    // useEffect(() => {console.log(dateTime)},[dateTime])

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text
                    style={styles.bigTitle}>
                    Book Vendor
                </Text>

                <View style={styles.inputContainer}>
                    <Text
                        style={styles.bigTitle}>
                        Vendor Name: {name}
                    </Text>
                </View> 
                <View style={styles.inputContainer}>
                    <Text
                        style={styles.bigTitle}>
                        Date Selected: {
                        dateTime !== null && 
                        dateTime.nativeEvent !== null && new Date(dateTime.nativeEvent.timestamp).toDateString()}
                    </Text>
                </View> 
                {dateTime === null && <DateTimePicker onChange={setDateTime}/>}
            </View>
            <View style={styles.vendorDetailsOrderNowButton}>
                    <Button style={styles.vendorDetailsOrderNowButton} title={"Book Now"}  color="#EFD0DD" onPress={() => navigation.navigate('PayVendorView', route.params)}/>
            </View>
            {/* <Button title={"Create the Event"} onPress={() => registerEvent(eventName, location, dateTime)} /> */}
        </View >
    )
}

if (Platform.OS === "web") {
    const styles = StyleSheet.create({
        container: {
            // display: 'flex',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        fieldContainer: {
            width: '70%'
        },
        input: {
            textAlign: 'center',
            backgroundColor: '#FFF',
            borderBottomWidth: '1px',
            borderColor: '#B5B4B0'
        },
        inputTitle: {
            color: '#B5B4B0',
            textAlign: 'left',
            alignItems: 'left',
            fontSize: '1rem',
            marginBottom: '0.7em'
        },
        inputContainer: {
            width: '100%',
            marginBottom: '2em'
        },
        bigTitle: {
            fontSize: '2em',
            fontWeight: '700',
            marginBottom: '1.5em'
        }
    });
}



export default BookVendorView;