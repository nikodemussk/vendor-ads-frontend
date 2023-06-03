import { encrypt, decrypt } from "../component/encyrption/Encryption";

export const registerEvent = (eventName, location, dateTime) => {
    let bodyData = {
        "eventName": eventName,
        "location": location,
        "dateTime": dateTime
    }

    console.log(bodyData);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
        body: JSON.stringify(bodyData)
    };

    fetch('http://localhost:8080/event/create', requestOptions)
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(e => console.log(e));
}