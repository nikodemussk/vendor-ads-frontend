import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export const sendCreateAnAds = (photos, vendorId, vendorCategoryType, title, description) => {

    // String vendorId,
    // String advertisementId,
    // String name,
    // String description,
    // String category,
    // VendorImageRequestSpec images

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestBody = {
        "images": photos,
        "category": vendorCategoryType,
        "name": title,
        "description": description,
        "advertisementId": new Date().getTime() + "-" + vendorId,
        "vendorId": vendorId
    }

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(requestBody),
        redirect: 'follow'
    };

    fetch(EnviornmentVariable.API_BASE_URL + "/vendor/ads", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}