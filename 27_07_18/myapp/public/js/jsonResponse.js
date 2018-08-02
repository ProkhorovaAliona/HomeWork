const btn = document.querySelector('#getJSON');

btn.addEventListener('click', function(ev) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/test', true);
    xhr.send();

    xhr.onreadystatechange = ()=>{
        let responseBody = xhr.responseText;
        console.log(responseBody);

    }


  });




 



