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

async function temp() {
    const sessionToken = await AsyncStorage.getItem('sessionToken');
    
    if (sessionToken != undefined) {
        console.log(sessionToken)
        navigation.navigate('ViewEvent');
    }
}