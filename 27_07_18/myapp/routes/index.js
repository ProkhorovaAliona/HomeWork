var express = require('express');
var router = express.Router();
const got = require('got');

/* GET home page. */

router.get('/', function(request, response, next){
  response.render('index', {title: 'get json'})
});

router.get('/meta', (req, res)=>{
  got('http://procode.com.ua')
  .then((result)=>{console.log(result)});
  res.end();
});

module.exports = router;
