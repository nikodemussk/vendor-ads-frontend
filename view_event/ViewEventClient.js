import { encrypt, decrypt } from "../component/encyrption/Encryption";
import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export const getEventList = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
    };

    return fetch(EnviornmentVariable.API_BASE_URL + '/event/getAll', requestOptions)
        .then(response => response.json())
        // .then(response => console.log(response)) 
        .catch(e => console.log(e));
}