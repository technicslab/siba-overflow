import LatestPost from './LatestPost'
import './LatestPost.css'
import { useEffect,useState } from 'react'
export default function LatestPostDiv(){

    const [postArray,setPostArray]=useState([])
    const [initialPosts, setInitialPosts]=useState([])
   const [handleRecords,setHandleRecords]=useState(0)
    useEffect(()=>{
      
      fetch("http://localhost:9000/Post/getLatestPost").then(res => res.json()).then(data => {
        setPostArray(data)
        
        setInitialPosts(data.filter((item,index)=>{
           if(index == 0 || index ==1 )
             return item
        }))
        setHandleRecords(2);
        
      })
      
    },[])


    function *forward(){
     
      for(let i=2;i<postArray.length-1;i= i+2){

         yield [postArray[i],postArray[i+1]]

      }
    }

    function handleBack(event){
      event.preventDefault()
      //console.log('++++'+initialPosts)
      if(handleRecords < 2){

            setInitialPosts( postArray.filter((item,index)=>{
              if(index == 0 || index ==1 )
                return item
          }))
          setHandleRecords(2);

      }else{
        setInitialPosts( postArray.filter((item,index)=>{
          if(index === handleRecords-2 || index === handleRecords-1){
            setHandleRecords(handleRecords-1)
            return item;
          }
        })  
        )
      }
    }

    function handleNext(event){
 
    if(handleRecords > postArray.length - 2){

    }else{
      setInitialPosts( postArray.filter((item,index)=>{
        if(index === handleRecords || index === handleRecords+1){
          setHandleRecords(handleRecords+1)
          return item;
        }
      })  
      )
    }
        
    }


    return(
        <div className="container mt-5">
          
        <LatestPost postArray={initialPosts} />
        {/* pagnitation buttons  */}
    
        <div className="row">
            <div className="col col-md-2 offset-9 mt-5">
           
            <button type="button" className="btn btn-outline-secondary mx-2" onClick={handleBack}>
            <i className="fa fa-arrow-left"></i>
            </button> 
              <button type="button" className="btn btn-outline-secondary" onClick={handleNext}>
              <i className="fa fa-arrow-right"></i>
            </button>
        </div>  
        </div>
                    
     </div>
    )
}