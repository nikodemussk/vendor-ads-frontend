import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, ImageBackground, Image, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { sendCreateAnAds } from "./CreateAnAdsClient";
import { SelectList } from 'react-native-dropdown-select-list'
import { Platform } from 'react-native';

const CreateAnAds = ({ navigation, route }) => {

    const [photos, setPhoto] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [coverImages, setCoverImages] = useState({});
    const [vendorCategoryType, setVendorCategoryType] = useState("");

    const { width } = useWindowDimensions();
    const SIZE = (width - (width * 0.08)) * 0.25;
    const BUTTON_SIZE = (width - (width * 0.08)) * 0.49;

    const { vendorUUID } = route.params;

    const categorySelection = [
        { key: '1', value: 'Catering' },
        { key: '2', value: 'Event Decor' },
        // { key: '4', value: 'Disabled', disabled: true },
    ]

    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true, mediaType: "photo", selectionLimit: 3 }, (response) => {
            console.log(response)
            if (response) {
                setPhoto(response);
            }
        });
    };

    const handleCoverImage = () => {
        launchImageLibrary({ noData: true, mediaType: "photo", selectionLimit: 1 }, (response) => {
            if (response) {
                setCoverImages(response);
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text
                    style={styles.bigTitle}>
                    Create an Ads
                </Text>
                <View style={styles.inputContainer}>
                    <Text
                        style={styles.inputTitle}>
                        Ad Title
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitle}
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
                        Description
                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setDescription}
                        multiline={true}
                    />
                </View>

                <Text
                    style={styles.bigTitle}>
                    Image (Max. 3 Photos)
                </Text>

                {/* <TouchableOpacity
                    style={{
                        width: BUTTON_SIZE,
                        margin: "2%",
                        backgroundColor: "#EFD0DD",
                        borderColor: "#EFD0DD",
                        borderWidth: "medium",
                        aspectRatio: "6/1",
                        borderRadius: "10px"
                    }}
                    onPress={() => sendVendorPicture(photos)}>
                    <Text style={{ margin: "auto", color: "#FFFFFF" }}>Login</Text>
                </TouchableOpacity> */}

                {photos.assets && photos.assets.map(img => {
                    // console.log(img);
                    return (
                        <Image style={{ width: 100, height: 50, borderWidth: 1, borderColor: 'red' }}
                            source={{
                                uri: img.uri
                            }}>
                        </Image>)
                })}

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
                        justifyContent: "center"
                        // borderRadius: "10px"
                    }}
                    onPress={handleChoosePhoto}>
                    <Text style={{ margin: "auto", color: "#FFFFFF", textAlign: "center" }}>Select Image</Text>
                </TouchableOpacity>
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
                        justifyContent: "center"
                        // borderRadius: "10px"
                    }}//photos, vendorId, vendorCategoryType, title, description
                    onPress={() => sendCreateAnAds(photos, vendorUUID, vendorCategoryType, title, description)}>
                    <Text style={{ margin: "auto", color: "#FFFFFF", textAlign: "center" }}>Create a Listing</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

let styles;
if (Platform.OS === "web") {
    styles = StyleSheet.create({
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
} else if (Platform.OS === "android") {
    styles = StyleSheet.create({
        container: {
            // display: 'flex',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            // width: '100%'
        },
        fieldContainer: {
            width: '70%'
        },
        input: {
            textAlign: 'center',
            backgroundColor: '#FFF',
            borderBottomWidth: 1,
            borderColor: '#B5B4B0'
        },
        inputTitle: {
            color: '#B5B4B0',
            textAlign: 'left',
            alignItems: 'left',
            // fontSize: '1rem',
            marginBottom: '0.7em'
        },
        inputContainer: {
            // width: '100%',
            // marginBottom: '2em'
        },
        bigTitle: {
            // fontSize: '2em',
            fontWeight: '700',
            // marginBottom: '1.5em'
        }
    });
}

export default CreateAnAds;