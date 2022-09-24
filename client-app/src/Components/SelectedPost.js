import { useEffect, useState } from "react";
import { useLocation,useHistory } from "react-router"
export default function SelectedPost (props){

    const [postData,setPostData]= useState({})
    const [postComments,setPostComments]=useState([])
    const [loadedPostComments, setLoadedPostComments]=useState([])
    const [totalLoadedComments,setTotalLoadedComments]=useState(0)
    const history=useHistory();
    const location = useLocation();
    useEffect(()=>{
        console.log(location.state.selected_id)

        fetch(`http://localhost:9000/Post/getLatestPost/byId/${location.state.selected_id}`).then
        (res=>res.json()).then(data=> {setPostData(data[0]); console.log(data[0])})

        fetch(`http://localhost:9000/Post/getPostComments/byId/${location.state.selected_id}`).then
        (res=>res.json()).then(data=> {setPostComments(data);
            
            console.log(data)

            setLoadedPostComments(data.filter((item,index)=>{
                if(index == 0 || index ==1)
                  return item
             }))

             setTotalLoadedComments(2);
        })

        
       
    },[])
    function handleLike(event){

        alert(event.target.id)
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
                history.push({
                    pathname: '/User/Post',
                    state:{selected_id:location.state.selected_id}
                })
            }
          
        }

    }

    function handleLoadComments(event){
        event.preventDefault();

            setLoadedPostComments( [ ...postComments.filter((item,index)=>{
            if(index === totalLoadedComments || index === totalLoadedComments+1 || index === totalLoadedComments+2){
                setTotalLoadedComments(totalLoadedComments+1)
                return item;
            }
            })  
         ,...loadedPostComments] )
        
    
    }
    return (
        <div className="row">
            <div className="col col-md-6 offset-3 mt-5">
                <div className="card border-0 shadow-sm">
                    <div className="card-body ">
                        <div className="card-header userInfoArea">
                            <img className="userPic rounded-circle mx-1" src="https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                            <span>{postData.first_name+' '+postData.last_name }</span>
                            <hr />
                            <div className="card-title">
                              <h3>  {postData.title}</h3>
                                <i className="fa fa-arrow-right mx-1" ></i>
                               {postData.question}</div>
                        </div>
                       
                        <p className="card-text mt-5">{postData.description}</p>
                        <div>
                            
                            <div>
                                <span  className="mx-1 totalLikes" id="total_Likes">{postData.likes} Likes</span>
                                <span className="mx-1 totalComment" id="total_Comment">{postData.comments} Comments</span>
                                <span className="float-end mx-2"><i className="fa fa-download"></i> download Code</span>
                            </div>
                            <hr />
                            <div>
                                    <a href="#" className="mx-2 likeIcon" id={'like_'+postData.post_id} onClick={handleLike}>  <i className="fas fa-thumbs-up "></i> Like</a>
                                    <a href="#" className="mx-2 commentIcon" id={'comment_'+postData.post_id}  onClick={handleComment}>  <i className="fas fa-comment"></i> Comment</a>
                                    <a href="#" className="mx-2 flagIcon" id={'flag_'+postData.post_id}>  <i className="fas fa-flag " ></i> Flag</a>
                                    

                                    <input type="text" className={"form-control mt-5 rounded-pill d-none  "+postData.post_id+""}
                                     id={'commentBox_'+postData.post_id} 
                                     onKeyDown={(event)=>handleAddComment(event,postData.post_id)} />

                                <div>
                                    <hr />
                                    <div >

                                        {
                                        loadedPostComments.map(item=>{
                                           // alert(item);
                                           var date= new Date(item.comment_date);
                                        
                                          return  (
                                            <div className="row mt-3">
                                                <div className="col col-md-1">
                                                    <img className="userPic rounded-circle mx-1" src="https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                          
                                                </div>
                                                <div className="col col-md-11">
                                                     <div class="card">
                                                        
                                                        <div class="card-header ">
                                                           <span className="text-muted"> {item.first_name +' '+ item.last_name}</span>
                                                           <span className="text-muted float-end">{date.getDate()}</span>
                                                            <p class="card-text mt-1">{item.comment_text}</p>
                                                        </div>
                                                     </div>
                                                </div>
                                            </div>
                                          )
                                          
                                       
                                        })}

                            {totalLoadedComments < postComments.length && <a href="#" className="mx-2 float-end mt-2" onClick={handleLoadComments} >Load More comments</a>
                           }
                                    </div>
                            </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}