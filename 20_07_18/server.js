const express = require('express');

const app = express();

app.get('/', function (request, response){
    response.send('<a href="http://localhost:3012/second">Second page</a>');
})

app.get("/second", function(request, response){
     
    response.send("<h1>This is second page</h1>");
});

app.listen(3012, function () {
    console.log('Server started');
})


