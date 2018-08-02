
/********* XMLHttpRequest ********/
// const btn = document.querySelector('#getJSON');

// btn.addEventListener('click', function(ev) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'test.json', true);
//     xhr.send();

//     xhr.onreadystatechange = ()=>{
//         let responseBody = xhr.responseText;
//         console.log(responseBody);

//     }
// });


/*********       Fetch       ********/
const btn = document.querySelector('#getJSON');

btn.addEventListener('click', function(ev) {
    'use strict';
    
    fetch('/test.json')
      .then(function(response) {
        console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
        console.log(response.status); // 200
    
        return response.json();
       })
      .then(function(test) {
        console.log(test.age); // iliakan
      })
      .catch( console.log );
});

 



