import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export const getCateringData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(EnviornmentVariable.API_BASE_URL + "/vendor/ads/Catering", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export const getData = (category) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(EnviornmentVariable.API_BASE_URL + "/vendor/ads/" + category, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}