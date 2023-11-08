import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import AsyncStorage from "@react-native-async-storage/async-storage";


export async function sendMessage(userId, vendorId, chatId, message, sender) {
    const bodyData = {
        "chatId": chatId,
        "vendorId": vendorId,
        "userId": userId,
        "sender": sender,
        "message": message
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
        body: JSON.stringify(bodyData)
    };

    fetch(EnviornmentVariable.API_BASE_URL + '/createMessage', requestOptions)
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(e => console.log(e));
}

export async function getMessage(userId, vendorId) {
    const bodyData = {
        "vendorId": vendorId,
        "userId": userId
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
        body: JSON.stringify(bodyData)
    };

    return fetch(EnviornmentVariable.API_BASE_URL + '/getMessage', requestOptions)
        .then(response => response.json())
        .catch(e => console.log(e));
}

export async function getVendorDetails(userUUID, setVendorName) {
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
                setVendorName(responseBody[0].vendorName)
                AsyncStorage.setItem("vendorUUID", responseBody[0].vendorId)
                AsyncStorage.setItem("vendorName", responseBody[0].vendorName)
            }
        })
        .catch(e => console.log(e));
}

export async function getAllMessageForVendor(vendorId) {
    const bodyData = {
        "vendorId": vendorId
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
        body: JSON.stringify(bodyData)
    };

    return fetch(EnviornmentVariable.API_BASE_URL + '/getMessageByVendor', requestOptions)
        .then(response => response.json())
        .catch(e => console.log(e));
}