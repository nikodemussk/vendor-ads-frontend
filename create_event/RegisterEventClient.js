import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";


export const registerEvent = (eventName, location, dateTime) => {
    let bodyData = {
        "eventName": eventName,
        "location": location,
        "dateTime": dateTime
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
        body: JSON.stringify(bodyData)
    };

    fetch(EnviornmentVariable.API_BASE_URL + '/event/create', requestOptions)
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(e => console.log(e));
}