const { json } = require("express");
var express = require("express");
var router = express.Router();
// database connection object
var db = require('../Database/Connection');
require('localstorage-polyfill')


router.post("/",function(req,res){
    
    console.log(req.body)

    db.query(`Insert into users (cms_id,first_name,last_name,password,gender,birth_date) values
    ('${req.body.cmsId}','${req.body.firstName}','${req.body.lastName}','${req.body.password}',
    '${req.body.gender}','${req.body.birthdate}')`,

    function(err,result){
       
          if(err) throw err
          else{
              res.send(JSON.stringify('Welcome to siba overflow. your registration is succesfull'))
          }
         
          
    })

})



module.exports = router;