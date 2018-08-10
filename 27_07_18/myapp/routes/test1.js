var express = require('express');
var router = express.Router();
const got = require('got');


router.get('/', (req, res)=>{
    got('https://swapi.co/api/people/1/')
    .then((data)=>{
        let file = JSON.parse(data.body)
        res.render('test1', {
            name: file.name
        })
    });
  })


//Promise Chain
// const data = [12, 26, 34];
// let chain = Promise.resolve();
// for (let id of data){
//     chain = chain.then(()=>{
//         return got(`/${id}`);
//     });
// }

// chain.then(()=>{...});


module.exports = router;
