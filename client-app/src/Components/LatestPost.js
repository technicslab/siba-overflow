import { useEffect,useState } from "react"
import { useHistory } from "react-router"
export default function LatestPost(props){

     const [postArray,setPostArray]=useState([])
    // useEffect(()=>{
    //   fetch("http://localhost:9000/Post/getLatestPost").then(res => res.json()).then(data => {
    //     setPostArray(data)
    //   })
    // },[])

    
    useEffect(()=>{
       setPostArray(props.postArray)
    },[props.postArray])


    const history=useHistory()


   function handleViewPost(event){
    event.preventDefault();
    history.push({
        pathname: '/User/Post',
        state:{selected_id:event.target.id}
    })


   }
    function handleLike(event){
        event.preventDefault()
        document.getElementById(event.target.id).style.color="Blue"
        

    }
    function handleComment(event){

       event.preventDefault()
        if(document.getElementById(event.target.id).parentNode.getElementsByTagName('input')[0].classList.contains('d-none')){
            document.getElementById(event.target.id).parentNode.getElementsByTagName('input')[0].classList.remove("d-none")
        }else{
            document.getElementById(event.target.id).parentNode.getElementsByTagName('input')[0].classList.add("d-none")
        }
        
        
    }
    async function addComment(post_id,comment_text){
        console.log(comment_text)
        fetch(`http://localhost:9000/Post/addComment/${post_id}`, {
            method: 'POST',
             headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(comment_text)
          })
            .then(data => console.log(data))
    }

    async function handleAddComment(event,post_id){
        
        if (event.key === 'Enter') {
            if(event.target.value.length == 0){
                alert('Please add some text in comment')
            }else{
                let data= await addComment(post_id,{comment:event.target.value,user_id:JSON.parse(localStorage.getItem('currUser'))});
                document.getElementById("comment_"+post_id).click();
              
            }
          
        }

    }
    return(<>
       { 
         postArray.map((item) => (
         <div className="row">
            <div className="col col-md-8 offset-2 mt-5">
                <div className="card">
                    <div className="card-body ">
                        <div className="card-header userInfoArea">
                            <img className="userPic rounded-circle mx-1" src="https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                            <span>{item.first_name+' '+item.last_name }</span>
                            <hr />
                            <div className="card-title">
                              <h3 onClick={()=>console.log(postArray)}>  {item.title}</h3>
                                <i className="fa fa-arrow-right mx-1" ></i>
                               {item.question}</div>
                        </div>
                       
                        <p className="card-text">{item.description}</p>
                        <div>
                            
                            <div>
                                <span  className="mx-1 totalLikes" id="total_Likes">{item.likes} Likes</span>
                                <span className="mx-1 totalComment" id="total_Comment">{item.comments} Comments</span>
                                <span className="float-end mx-2"><i className="fa fa-download"></i> download Code</span>
                            </div>
                            <hr />
                                <div>
                                    <a href="#" className="mx-2 likeIcon" id={'like_'+item.post_id} onClick={handleLike}>  <i className="fas fa-thumbs-up "></i> Like</a>
                                    <a href="#" className="mx-2 commentIcon" id={'comment_'+item.post_id}  onClick={handleComment}>  <i className="fas fa-comment"></i> Comment</a>
                                    <a href="#" className="mx-2 flagIcon" id={'flag_'+item.post_id}>  <i className="fas fa-flag " ></i> Flag</a>
                                    <a href="#" className="mx-2 float-end" id={item.post_id} onClick={handleViewPost}>  View Post</a>

                                    <input type="text" className={"form-control mt-5 rounded-pill d-none  "+item.post_id+""}
                                     id={'commentBox_'+item.post_id} 
                                     onKeyDown={(event)=>handleAddComment(event,item.post_id)} />
                                <div>
                                    
                            </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
       ))
       }
  
                </>
 )
            
        
        
}