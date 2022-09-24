import './Navbar.css'
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route, Link,useLocation,useHistory,useParams} from 'react-router-dom'

export default function Navbar(){

    const history=useHistory();
   


    function handleRegisterClick(event){
        event.preventDefault();
        history.push('./Register')
    
        
    }
    function handleLoginClick(event){
        event.preventDefault();
       
        history.push('/Login')
    }

    return(
        <div>
           {/*userData && <Redirect to ={{
               pathname:'/UserDashBoard',
               state:userData
           }
           } />*/}
            <nav className=" navbar navbar-expand-lg topNavBar fixed-top  ">
                <div className="Logo mx-5 mt-2">
                    <p className="siteTitle"><Link className="nav-link" to="/">SIBA OverFlow</Link></p>
                </div>
                 <ul className="navbar-nav " >
                    <li className="nav-item">
                         <Link className="nav-link" to="/">Home</Link>
                        </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Know more about us">
                        <Link className="nav-link" to="/About">About</Link></li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Join our Teams">
                        <Link className="nav-link" to="/Teams">Teams</Link></li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="need help ?">
                        <Link className="nav-link" to="/Help"><i className="fa fa-question"></i></Link></li>
                 </ul>
                 <div className="flex-column col-7 mx-5">
                    <form>
                        <input className="d-inline searchInput"  placeholder="search" />
                        <button className="d-inline btn loginBtn text-light rounded-pill px-5 mx-3" data-toggle="tooltip" data-placement="bottom" title="Login" 
                        onClick={handleLoginClick}>Login</button>
                        <button className="d-inline btn  registerBtn rounded-pill px-5 " data-toggle="tooltip" data-placement="bottom" title="Register" 
                        onClick={handleRegisterClick}>Register</button>
                    </form>
                 </div>
            </nav>


           
        </div>
    )
}