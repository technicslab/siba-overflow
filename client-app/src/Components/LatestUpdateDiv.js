import './latestUpdateDiv.css'
import {Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useHistory } from 'react-router';

export default function LatestUpdateDiv(){

    const [postArray,setPostArray]=useState([]);
    const [latestPost,setLatestPost]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:9000/Post/getLatestPost").then(res => res.json()).then(data => {
          setPostArray(data)
          setLatestPost(data.filter((item,index) => { 
              if(index == 0 || index == 1){
                  return item;
              }
           }))
        })
        console.log(latestPost)
      },[])

      let history = useHistory()

      function handleReply(event){

            if(JSON.parse(localStorage.getItem('isLogin'))=== null){
                
                history.push('/Login')
            }else{
                
                history.push({
                    pathname: '/User/Post',
                    state:{selected_id:event.target.id}
                })
            
            }
      }
    return(
        <div className="container mt-5 bg-light ">
            <div className="row">

                <div className="col col-md-10 offset-1">
                    <div className="row">
                        <div className="col col-md-10 offset-1 mt-5 mb-5">
                            <h1 className="text-center latestPost">Latest Posts</h1>
                        </div>
                    </div>
                    <div className="row mb-5">
                        {latestPost.map(item=>(
                             
                             <div className="col col-md-6">
                             <div className="card">
                                
                                 <div className="card-body">
                                   <h5 className="card-title"><i className="fa fa-user mx-2 fa-2x"></i>{item.first_name + ' '+ item.last_name}</h5>
                                   <h5 className="mt-4">{item.question}</h5>
                                   <p className="card-text mt-3">
                                        {item.description}
                                   </p>
                                   
                                  <p>Replies
                                     <i className="fa fa-reply mx-2"><span className="mx-1">{item.comments}</span></i>
                                  </p> 
                                  <button to="/" className="btn btnSeePost px-5" id={item.post_id} onClick={handleReply}>Reply</button>
                                 </div>
                               </div>
                         </div>

                          ))}
                      
                    </div>
                </div>
                
            </div>

        </div>
    )
}