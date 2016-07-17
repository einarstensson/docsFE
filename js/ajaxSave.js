function putEditorContentToDocument(xhttp, params){
    var apiURL = buildAPIURL();
    xhttp.open("PUT", apiURL, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(params));
}
