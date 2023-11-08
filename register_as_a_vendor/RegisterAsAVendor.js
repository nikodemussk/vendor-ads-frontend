import { Button, SafeAreaView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { registerVendor } from './RegisterAsAVendorClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import DateTimePicker from '../component/date_time_picker/DateTimePicker';
import { SelectList } from 'react-native-dropdown-select-list'
import { Platform } from 'react-native';
import { styles } from '../component/styles/CommonStyles';

const RegisterAsAVendor = () => {

    const [vendorCategoryType, setVendorCategoryType] = useState("");
    const [vendorName, setVendorName] = useState("");
    const [vendorLocation, setVendorLocation] = useState("");

    const { width } = useWindowDimensions();
    const SIZE = (width - (width * 0.08)) * 0.25;
    const BUTTON_SIZE = (width - (width * 0.08)) * 0.49;

    const categorySelection = [
        { key: '1', value: 'Catering' },
        { key: '2', value: 'Event Decor' },
        { key: '3', value: 'Photography' },
        { key: '4', value: 'Event Planner' },
        { key: '5', value: 'Venue' },
        // { key: '4', value: 'Disabled', disabled: true },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text
                    style={styles.bigTitle}>
                    Register As A Vendor
                </Text>
                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Company Name
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setVendorName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Category
                    </Text>
                    <SelectList
                        setSelected={(category) => setVendorCategoryType(category)}
                        data={categorySelection}
                        save="value"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Location
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setVendorLocation}
                    />
                </View>
                {/* <DateTimePicker onChange={setDateTime}/> */}
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "space-around"
            }} >
                <TouchableOpacity
                    style={{
                        width: BUTTON_SIZE,
                        margin: "2%",
                        backgroundColor: "#EFD0DD",
                        borderColor: "#EFD0DD",
                        // borderWidth: "medium",
                        aspectRatio: "6/1",
                        // borderRadius: "10px"
                    }}
                    onPress={() => AsyncStorage.getItem('uuid').then(uuid => registerVendor(vendorName, vendorCategoryType, vendorLocation, uuid))}>
                    <Text style={{ margin: "auto", color: "#FFFFFF" }}>Register Now</Text>
                </TouchableOpacity>
            </View>
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


export default RegisterAsAVendor;