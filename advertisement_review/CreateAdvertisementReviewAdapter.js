import { EnviornmentVariable } from "../component/environment/EnvironmentVariable";

export const sendReview = (userId, adsId, review) => {
    let bodyData = {
        "userId": userId,
        "adsId": adsId,
        "review": review
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        mode: 'cors',
        body: JSON.stringify(bodyData)
    };

    fetch(EnviornmentVariable.API_BASE_URL + '/vendor/ads/review', requestOptions)
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(e => console.log(e));
}