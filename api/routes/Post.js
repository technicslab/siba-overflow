const { json } = require("express");
var express = require("express");
var router = express.Router();
// database connection object
var db = require('../Database/Connection');
require('localstorage-polyfill')



router.post("/addComment/:post_id",function(req,res){
      const post_id=req.params.post_id;
      const comment = req.body.comment;
      const user_id=req.body.user_id;
      const date= new Date();
      const dateformat=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
      // console.log(post_id)
      // console.log(req.body.user_id)
      // console.log(dateformat)
      // console.log(comment)
      // inset comment in database
      db.query(`Insert into postcomments values(${post_id},'${user_id}','${dateformat}','${comment}')`,
      function(err,row, field){
          if(err) throw err
          else{

            db.query(`update post set comments = (select comments from post where post_id = ${post_id})+1 where post_id = ${post_id}`,function(err,row,field){
                  if(err){
                        throw err;
                  }
            })
            // increament comment 
            res.send(JSON.stringify('added'))
          }
          
         
    })

})

router.get("/getLatestPost",function(req,res){
    db.query(`Select users.first_name, users.last_name, post.* from users inner join post where users.cms_id = post.user_id order by post.post_date`,
    function(err,row, field){
          if(err) throw err
          if(row.length >=1){
                res.send(JSON.stringify(row))
          }
          else{
              console.log('in else')
          }
    })
  //res.send(JSON.stringify('in post'))

})

router.get("/getLatestPost/byId/:post_id",function(req,res){
      console.log('in get post by id '+ req.params.post_id)
    db.query(`Select users.first_name, users.last_name, post.* from users inner join post where users.cms_id = post.user_id and post.post_id = '${req.params.post_id}'`,
    function(err,row, field){
          if(err) throw err
          if(row.length >=1){
                res.send(JSON.stringify(row))
          }
          else{
              console.log('in else')
          }
    })
})

router.get("/getPostComments/byId/:post_id",function(req,res){

       db.query(`Select users.first_name,users.last_name, postcomments.* from postcomments inner join users on
       users.cms_id = postcomments.user_id
       where post_id = '${req.params.post_id}'`,
       function(err,row, field){
          if(err) throw err
          if(row.length >=1){
                res.send(JSON.stringify(row))
          }
          else{
              console.log('in else')
          }
      })

})
router.get('/',function(res,res){
res.send(JSON.stringify('hello'))
})

module.exports = router;