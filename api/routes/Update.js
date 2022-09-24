const { json } = require("express");
var express = require("express");
var router = express.Router();
// database connection object
var db = require('../Database/Connection');
require('localstorage-polyfill')


router.post("/Description",function(req,res){
    
    let user_id=req.body.user_id;
    let description=req.body.description;
  
    console.log(user_id+description)
    db.query(`update users set description= '${description}' where cms_id = '${user_id}'`,
      function(err,row, field){
          if(err) throw err
          else{
            res.send(JSON.stringify('added'))
          }
          
         
    })

})



module.exports = router;