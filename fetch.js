/** 
 * Helper function to call web API endpoint
 * using the authorization bearer token scheme
*/

function callApiWithToken(endpoint, token, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const body = {};

    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
       // mode: "no-cors"
    };

    logMessage('Calling web API...');

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => { //console.log(json)
            logMessage('Web API responds:');
            console.log(response);
            logMessage("Run ID = " + JSON.stringify(response.id));
            //console.log(JSON.stringify(response));
            //console.log(JSON.stringify(response.id));
        }).catch(error => {
            console.error(error);
        });
}