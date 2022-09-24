const { json } = require("express");
var express = require("express");
var router = express.Router();
// database connection object
var db = require('../Database/Connection');
require('localstorage-polyfill')

// example to try
// router.get("/", function(req, res, next) {
//     res.status(200).send("you are on login page");
// });


// when some one wants to login 
router.post("/",function(req,res){
    
    let cms_id=req.body.cms_id;
    let password=req.body.password;
  console.log(" ----"+ cms_id + password)
    db.query(`Select * from users where cms_id = '${cms_id}' and password = '${password}'`,
    function(err,row, field){
       // console.log("outside "+ field[0][0])
          if(err) throw err
          if(row.length >=1){
               //console.log("in if"+ row[0])
                res.send(row[0])
          }
        
          else{
              //console.log('in else')
              res.send(JSON.stringify('notFound'))
          }
         
          
    })

})



module.exports = router;