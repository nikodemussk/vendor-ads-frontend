import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '../component/date_time_picker/DateTimePicker';
import { Platform } from 'react-native';
import { styles } from '../component/styles/CommonStyles';

const PayVendorView = ({ navigation, route }) => {

    const { vendorName } = route.params;

    const [accountNumber, setAccountNumber] = useState("123456789");
    const [bankName, setBankName] = useState("BCA");


    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text
                    style={styles.bigTitle}>
                    Bank Transfer to {bankName}
                </Text>

                <View style={styles.inputContainer}>
                    <Text
                        style={styles.bigTitle}>
                        Account Number: {accountNumber}
                    </Text>
                    {/* <TextInput
                        style={styles.input}
                        onChangeText={setLocation}
                    />*/}
                </View>
            </View>
            <View style={styles.vendorDetailsOrderNowButton}>
                <Button style={styles.vendorDetailsOrderNowButton} title={"Check payment status"} color="#EFD0DD" onPress={() => navigation.navigate('BookVendorView', route.params)} />
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


export default PayVendorView;