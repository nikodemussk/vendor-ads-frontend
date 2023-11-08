import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export const getReviews = (advertisementId) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch(EnviornmentVariable.API_BASE_URL + "/vendor/ads/review?advertisementId=" + advertisementId, requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
}