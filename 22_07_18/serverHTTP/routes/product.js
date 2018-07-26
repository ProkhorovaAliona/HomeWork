var express = require('express');
var router = express.Router();

router.get("/", function(request, response, next) {
        response.send('Product page');
    });
// router.get("/:id", function (request, response) {
//             response.send(`Product id is ${request.params.id}`);
//             }); 
router.get("/ab*cd", function(request, response, next) {
        response.send('regular');
    });
                    
module.exports = router;
