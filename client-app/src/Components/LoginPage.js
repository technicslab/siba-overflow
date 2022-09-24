import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect,useState} from 'react';
import './LoginPage.css'
import { LoginWarning } from './Warn'
import PropTypes from 'prop-types';

import {BrowserRouter as Router,Switch,Route, Link,useLocation,useHistory,useParams,useRouteMatch,Redirect} from 'react-router-dom'

export default function LoginPage(){
    
   
    const [cms_id, setcms_id]=useState("");
    const [password,setPassword]=useState("");
    const [warnMessage, setWarnMessage]= useState("");

    // userData is an object that store userdata fetched from server
    const [userData,setUserData]=useState(null);
    const [isWarn,setIsWarn]=useState();
    
    const history=useHistory()

    async function loginUser(credentials) {
        return fetch('http://localhost:9000/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
       }
       

    async function handleLoginClick(event){
        
        event.preventDefault();
        if(cms_id.length >0  && password.length >0){

            const res = await loginUser({
              cms_id,
              password
            });

            if(res === 'notFound'){
                //alert('not found')
                setWarnMessage("User Not Found");
                setIsWarn(true)
            }else{

                //console.log("from login page "+res)
                setUserData(res);
            
                localStorage.setItem('isLogin',true)
                localStorage.setItem('currUser',JSON.stringify(res.cms_id))

                //localStorage.setItem('cms_id',res.cms_id);
                //localStorage.setItem('userData', JSON.stringify(res))
                
                history.push({
                pathname:  '/User',
                state:{r:res}
                }
                )
                window.location.reload()
                }
          
        }else{
            setWarnMessage("Fill out complete details")
             setIsWarn(true)
           
        }
    }

    // function to reset warning message
    function closeWarning(){
        setIsWarn(false)
    }

    return(
        <>
        <Navbar />
        <div className="container margin ">
            <div className="row mb-5">
                <div className="col col-4 offset-4">
                    <div className="card shadow p-1">
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                Log in to Siba Overflow
                            </h4>
                            <form className="text-center px-5">

                                <input type="text" className="form-control mt-5" placeholder="cms_id" value={cms_id}
                                onChange={({target})=>{setcms_id(target.value)}} /> 
                                <input type="password" className="form-control mt-3" placeholder="Password" value={password}
                                onChange={({target})=>{setPassword(target.value)}} /> 
                                
                                <button className="form-control btn btn-primary mt-3 " onClick={handleLoginClick}>Login</button>
                                
                                <div id="warning">
                                        {isWarn && < LoginWarning  closeWarning={closeWarning} message={warnMessage}/>}                
                                </div>

                                <p className="mt-5">Don't have and account?</p>
                                <button className="btn  ms-1 px-5 bgColor" onClick={()=>{history.push('/Register')}}>Sign Up</button>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <Footer />
        </>
    )
}


