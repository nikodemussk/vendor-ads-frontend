import ReactNative from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export async function registerNewUser(navigation, email, password, fullName) {
    if (email !== "" && password !== "") {
        let bodyData = {
            "email": email,
            "password": password,
            "fullName": fullName
        }
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            mode: 'cors',
            body: JSON.stringify(bodyData)
        };
    
        fetch(EnviornmentVariable.API_BASE_URL + '/register', requestOptions)
            .then(response => response.text())
            .then(text => console.log(text))
            .catch(e => console.log(e));
    } else {
        console.log("empty email or password")
    }

    return;
}

export async function checkIfUserIsAVendor(setRegisteredAsAVendor, setVendorUUID, userUUID) {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            mode: 'cors',
        };
    
        return fetch(EnviornmentVariable.API_BASE_URL + '/user/vendor/list?userUUID=' + userUUID, requestOptions)
            .then(response => response.json())
            .then(responseBody => {
                // console.log(responseBody)
                if (responseBody.length > 0) {
                    setRegisteredAsAVendor(true);
                    setVendorUUID(responseBody[0].vendorId)
                    AsyncStorage.setItem("vendorUUID", responseBody[0].vendorId)
                    AsyncStorage.setItem("vendorName", responseBody[0].vendorName)
                }
            })
            .catch(e => console.log(e));
}