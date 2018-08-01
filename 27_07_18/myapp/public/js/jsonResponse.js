const btn = document.querySelector('#getJSON');
const xhr = new XMLHttpRequest();
let req = xhr.open('GET', '/jsonResponse', true);
req.onprogress = function(e) {
    let complete = (e.position / e.totalSize)*100;
    console.log(`${complete}`)
}
req.onload = function(data) {
    let responseBody = xhz.responseText;
    let data = JSON.parse(responseBody);
}

req.onerror = function(err){
    console.warn(Error);
}

xhr.setRequestHeader('Content-Type','application/json');
req.send();

    



