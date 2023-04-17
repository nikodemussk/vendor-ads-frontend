import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from "../component/styles/CommonStyles";
import { sendVendorPicture } from "./VendorAdminClient";

const VendorAdminPage = () => {

    const [photos, setPhoto] = useState({});
    const [coverImages, setCoverImages] = useState({});

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
        <View>
            <Text
                style={styles.bigTitle}>
                Cover Image
            </Text>
            <Button title="Choose Photo" onPress={handleCoverImage} />

            <Text
                style={styles.bigTitle}>
                Image (Max. 3 Photos)
            </Text>
            <Button title="Choose Photo" onPress={handleChoosePhoto} />
            <Button title="Upload" onPress={() => sendVendorPicture(photos)} />
            {photos.assets && photos.assets.map(img => {
                console.log(img);
                return (
                <Image style={{ width: 100, height: 50, borderWidth: 1, borderColor: 'red' }}
                    source={{
                        uri: img.uri
                    }}>
                </Image>)
            })}
        </View>
    )


}



export default VendorAdminPage;