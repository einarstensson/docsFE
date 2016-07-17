function getDocument(){
    var xhttp = buildAjaxRequest();
    buildGetResponse(xhttp);
    getCurrentDocument(xhttp);
}
