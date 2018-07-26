var express = require('express');
var router = express.Router();
const userLib = require('libs/user')

router.get("/age", function(request, response, next) {
        response.render('user/age');
    });

router.post("/age", function(request, response, next) {
    const userYear = request.body.date;
   
    const currentYear = new Date();
    const calcAge = currentYear.getUTCFullYear() - userYear;

    const resultAge = userLib.checkAge(calcAge);
    response.json(resultAge);
    });

router.get("/reg", function(request, response, next) {
        response.render('user/reg');
    });

router.post("/reg", function(request, response, next){
    const login = request.body.login;
    const pwd = request.body.pwd;

    const resultAuth = userLib.checkAuth(login, pwd);
    response.json(resultAuth);

});
                    
module.exports = router;
