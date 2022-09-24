const { json } = require("express");
var express = require("express");
var router = express.Router();

// database connection object
var db = require('../Database/Connection');
require('localstorage-polyfill')


router.post("/",function(req,res){
   
    let cms_id=req.body.cmsId;
    //console.log("--------------------------"+cms_id)
    let question= req.body.question;
    let title=req.body.title;
    let description= req.body.description;

  
    db.query(`Insert into post (user_id,title,question,description) values( '${cms_id}','${title}','${question}','${description}')`,
    function(err,result){
       
          if(err) throw err
          else console.log('added')
          
   })
    res.send(JSON.stringify('Post Added for Admin Approval'))
    console.log(req.body)
})



module.exports = router;