var express = require('express');
var router = express.Router();
const authLib = require('libs/auth')

router.get("/login", function(request, response, next) {
        response.render('auth/login');
    });

router.post("/login", function(request, response, next) {
    const login = request.body.login;
    const pwd = request.body.pwd;

    const result = authLib.checkAuth(login, pwd);
    response.json(result);
    });

router.get("/signup", function(request, response, next) {
        response.render('auth/signup');
    });
                    
module.exports = router;
