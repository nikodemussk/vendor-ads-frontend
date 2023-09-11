import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";



export const registerVendor = (vendorName, vendorCategoryType, vendorLocation, uuid) => {
    let bodyData = {
        "vendorName": vendorName,
        "vendorCategoryType": vendorCategoryType,
        "vendorLocation": vendorLocation,
        "userUUID": uuid
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
        body: JSON.stringify(bodyData)
    };

    fetch(EnviornmentVariable.API_BASE_URL + '/vendor/register', requestOptions)
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(e => console.log(e));
}