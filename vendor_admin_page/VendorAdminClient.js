import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export const sendVendorPicture = (photos) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({...photos, vendorId: "123456"}),
        redirect: 'follow'
    };

    fetch(EnviornmentVariable.API_BASE_URL + "/vendor/image", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}