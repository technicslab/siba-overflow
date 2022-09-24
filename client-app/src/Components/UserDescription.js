import { useEffect, useState } from 'react'
import './userDescription.css'

export default function UserDescription(props){

    const[des,setDes]=useState("your description here..")
    const[userData,setUserData]=useState({})
    useEffect(()=>{

       // setUserData(JSON.parse(localStorage.getItem('userData')))
       setUserData(props.Data)
       setDes(userData.description)
       return(
        function(){
             localStorage.setItem('userData', JSON.stringify(props.Data))
             //alert('in user ')
        }
   )
       
    },[userData])

    async function sendDescription(data){
         let res= await  fetch(`http://localhost:9000/Update/Description`, {
            method: 'POST',
             headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
          })
    }
  function handleDescription(event){
        event.preventDefault()
        document.getElementById('description').disabled=false;
        document.getElementById('updatebtn').disabled=false;
    }

   async function handleUpdateDescription(event){
      // alert(des)
      let res=await sendDescription({description:des,user_id:JSON.parse(localStorage.getItem('currUser'))})
    
    }
    return(
        <div className="container mt-5 mb-5" >
        <div className="row mt-5">
            <div className="col col-md-3 offset-1">
                <div className="card">
                    <div className="card-body">
                    
                        <div className="text-center">
                            <img className="card-img  userImgSize rounded-circle mx-1" src="https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                            <label className="d-block mt-3 " id="user_Name"> {userData.first_name + ' '+ userData.last_name}</label>
                            <div className="userRating">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>

                            <table className="table table-borderless">
                                <tbody>
                                    <tr scope="row"> 
                                        <td>Role</td>
                                        <td>{userData.role}</td>
                                    </tr>
                                    <tr scope="row"> 
                                        <td>Cms Id</td>
                                        <td>{userData.cms_id}</td>
                                    </tr>
                                    
                                    <tr scope="row"> 
                                        <td>Department</td>
                                        <td>{userData.department}</td>
                                    </tr>
                                    <tr scope="row"> 
                                        <td>Semester</td>
                                        <td>{userData.semester}</td>
                                    </tr>
                                   
                                    
                                </tbody>
                                <hr />
                            </table>
                            

                        </div>
                    </div>
                </div>
            </div>
            <div className=" col col-md-6 offset-1 rounded-2 bg-light">
                <form className="form mt-5">
                    
                    <h4 className="text-center">Description
                       
                    </h4>  
                    <a href="#" className="float-end"><i className="fas fa-edit" onClick={handleDescription}></i></a>
                    <textarea  onChange={(event)=>setDes(event.target.value)} value={des} style={{height:"100px"}} className="d-block form-control text-lg-start border-0 bg-light mt-2 " id="description" disabled>
                        
                           </textarea >
                     <button onClick={handleUpdateDescription} className="btn btn-primary mt-2 mx-1 " id="updatebtn" disabled>update</button>
                </form>
            </div>
        </div>
        
     </div>
    )
}