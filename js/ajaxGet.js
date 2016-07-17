function appendContentToEditor(response){
    document.getElementById("document").value = response['data']['attributes']['content'];
}

function buildGetResponse(xhttp){
    xhttp.onreadystatechange = function(){
          if(xhttp.readyState == 4 && xhttp.status == 200){
              var response = JSON.parse(xhttp.response);
              appendContentToEditor(response);
        }
    };
}

function getCurrentDocument(xhttp){
    var apiURL = buildAPIURL();
    xhttp.open("GET", apiURL, true);
    xhttp.send();
}
