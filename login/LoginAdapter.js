import ReactNative, { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export async function validateUserLogin(navigation, email, password, setNotification) {
    if (email !== "" && password !== "") {
        let bodyData = {
            "email": email,
            "password": password
        }
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            mode: 'cors',
            body: JSON.stringify(bodyData)
        };
    
        fetch(EnviornmentVariable.API_BASE_URL + '/login', requestOptions)
            .then(response => {
                if (response.status == 400) {
                    setNotification("wrong email or password")
                    return;
                } 
                return response.json();
            })
            .then(responseBody => {
                console.log(responseBody)
                if (responseBody == null) return;
                AsyncStorage.setItem('uuid', responseBody.userId)
                .then(() => AsyncStorage.setItem('fullName', responseBody.fullName))
                .then(() => navigation.navigate('BottomNavigation'))
            })
            .catch(e => console.log(e));
    } else {
        setNotification("empty email or password")
        console.log("empty email or password")
    }

    return;
}

export async function loginCheck() {
    // const sessionToken = await AsyncStorage.getItem('sessionToken');
    const sessionToken = await AsyncStorage.getItem('uuid');
    
    if (sessionToken != undefined) {
        console.log(sessionToken)
        navigation.navigate('BottomNavigation');
    }
}