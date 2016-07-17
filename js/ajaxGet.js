function appendContentToEditor(response){
    document.getElementById("document").value = response['data']['attributes']['content'];
}

function appendTitleToEditor(response){
    document.getElementById("title").value = response['data']['attributes']['title'];
}

function buildGetResponse(xhttp){
    xhttp.onreadystatechange = function(){
          if(xhttp.readyState == 4 && xhttp.status == 200){
              var response = JSON.parse(xhttp.response);
              appendContentToEditor(response);
              appendTitleToEditor(response);
        }
    };
}

function getCurrentDocument(xhttp){
    var apiURL = buildAPIURL();
    xhttp.open("GET", apiURL, true);
    xhttp.send();
}
