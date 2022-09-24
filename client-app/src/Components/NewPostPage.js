import './NewPostPage.css'
import { useState,useEffect } from 'react'


export default function NewPostPage(){
    const [title,setTitle]=useState('')
    const [question,setQuestion]=useState('')
    const [description,  setDescription]=useState('');
    let cmsId='';
    useEffect(()=>{

        cmsId=JSON.parse(localStorage.getItem('userData')).cms_id;
        
    })
    function handleTitleChange({target}){
    
        setTitle(target.value)
        

    }
    function handleQuesChange({target}){
        setQuestion(target.value)
    }
    function handleDescrpChange({target}){
        setDescription(target.value)
    }
    async function Addpost(PostData){

        let res= await fetch('http://localhost:9000/AddPost', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(PostData)
          })
        let data = await res.json();
        return data;  
    }

     async function handlePost(event){
        event.preventDefault();
        const PostData={
            cmsId,
            question,
            title,
            description
        }
        let data= await Addpost(PostData);
        alert(data)
        clearAll()
        
    }

    function clearAll(){
        setTitle('');
        setDescription('');
        setQuestion('');
    }

    return(
        <>
        
            <div className="row mt-5 mb-5">
                <div className="col-lg-6 offset-3">
                    <div className="card">
                        <div className="body p-1">
                            {/* <nav> */}
                            <form>
                            <div className="btn-group col-lg-12">
                                <button className="btn form-control">Post</button>
                                <button className="btn form-control">Image</button>
                                <button className="btn form-control">Link</button>
                            </div>
                            </form>
                            
                            <input type="text" value={title}  placeholder='Title' className="form-control" onChange={handleTitleChange}></input>
                            <textarea type="text" value={question}  placeholder='Question' className="form-control mt-3" onChange={handleQuesChange} ></textarea>
                            <form>
                                <div>
                                    <button className="btn fs-5">B</button>
                                    <button className="btn fs-5 fst-italic">i</button>
                                    <button className="btn fs-5">A^</button>
                                    <button className="btn fs-5 myFont"><span className="myFont">T</span>T</button>
                                    <button className="btn fs-5"><i className="fa fa-list-ul"></i></button>
                                    <button className="btn fs-5"><i className="fa fa-list-ol"></i></button>
                                </div>
                                <textarea value={description} className="form-control " placeholder="Description" rows="8" onChange={handleDescrpChange}></textarea>
                            </form>
                           <button className="btn postButton rounded-pill offset-lg-10 px-5 my-2 "  onClick={handlePost}>Post</button> 
                        </div>
                    </div>
                </div>
                
            </div>
            
       
        </>
    )
}