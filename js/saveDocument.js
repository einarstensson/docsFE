function buildDocumentParameters(title, content){
    return {'data': { 'attributes': {'title': title, 'content': content}}};
}

function catchKeyPress(keyCount){
    keyCount += 1;
    if(keyCount > 3){
      saveDocument();
      keyCount = 0;
    }

    return keyCount;
}

function getEditorTitle(){
    return "How to live long and prosper";
}

function getEditorContent(){
    return document.getElementById('document').value;
}

function keyEventListener(){
    var keyCount = 0;
    document.getElementById("document").onkeypress = function(){
      keyCount = catchKeyPress(keyCount);
    }
}

function saveDocument(){
    var content = getEditorContent();
    var title = getEditorTitle();
    var params = buildDocumentParameters(title, content);

    var xhttp = buildAjaxRequest();
    putEditorContentToDocument(xhttp, params);
}
