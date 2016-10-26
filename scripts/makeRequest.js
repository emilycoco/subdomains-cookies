// Simple ajax request that makes a get request to a url and feeds returned data to specified callback
function makeRequest(url, callback) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        console.log('Cannot initialize ajax request.');
        return false;
    }
    httpRequest.onreadystatechange = processResults;
    httpRequest.open('GET', url, true);
    httpRequest.send();

    function processResults() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                callback(httpRequest.responseText);
            } else {
                console.log('There was a problem with the request.', httpRequest);
            }
        }
    }
}