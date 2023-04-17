export async function sendVendorBooking(userUUID, vendorUUID, bookTime) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "userId": userUUID,
        "vendorId": vendorUUID,
        "bookTime": bookTime
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(EnviornmentVariable.API_BASE_URL + "/vendor/book", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}