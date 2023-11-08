import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";
import AsyncStorage from "@react-native-async-storage/async-storage";


export async function sendMessage(userId, vendorId, chatId, message, sender, advertisementId) {
    const bodyData = {
        "chatId": chatId,
        "vendorId": vendorId,
        "advertisementId": advertisementId,
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