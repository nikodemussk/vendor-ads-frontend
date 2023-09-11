import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '../component/date_time_picker/DateTimePicker';

const BookVendorView = ({ navigation, route}) => {

    const {vendorName} = route.params;

    const [eventName, setEventName] = useState("");
    const [location, setLocation] = useState("");
    const [dateTime, setDateTime] = useState("");

    console.log(route)

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text
                    style={styles.bigTitle}>
                    Book Vendor
                </Text>

                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Vendor Name: {vendorName}
                    </Text>
                    {/* <TextInput
                        style={styles.input}
                        onChangeText={setLocation}
                    />*/}
                </View> 
                <DateTimePicker onChange={setDateTime}/>
            </View>
            <View style={styles.vendorDetailsOrderNowButton}>
                    <Button style={styles.vendorDetailsOrderNowButton} title={"Book Now"}  color="#EFD0DD" onPress={() => navigation.navigate('PayVendorView', route.params)}/>
            </View>
            {/* <Button title={"Create the Event"} onPress={() => registerEvent(eventName, location, dateTime)} /> */}
        </View >
    )
}

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


export default BookVendorView;