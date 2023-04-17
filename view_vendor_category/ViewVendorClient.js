import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export const getAdsByCategory = (category) => {
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