var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    response.send('Product page');
});

router.get("/:id", function (request, response) {
response.send(`Product id is ${request.params.id}`);
}); 

module.exports = router;
