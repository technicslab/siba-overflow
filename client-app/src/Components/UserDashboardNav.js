import './Navbar.css'
import {BrowserRouter as Router,Switch,Route, Link,useLocation,useHistory,useParams,useRouteMatch} from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function UserDashboardNav(props){
  
   // const [userData,setUserData]=useState(JSON.parse(localStorage.getItem('userData')))
    
    const [userData,setUserData] = useState({})
    useEffect(()=>{

            setUserData(props.Data) 
           // alert('in user dashboard navbar')
            return(
                function(){
                     localStorage.setItem('userData', JSON.stringify(props.Data))
                    // alert('in user ')
                }
           )  
      
    },[userData])

    const history=useHistory()

    function handleLogOut(){
        
        setTimeout(()=>localStorage.clear(),3000)
        
        history.push('/')
    }

    function handleGoToHomePage(){
        
            history.push({
                pathname:'/User',
                state:{r:userData}
            }); 
            // window.location.reload()
        
        
    }
    
    return(
     <div>   
                 <nav className=" navbar navbar-expand-lg topNavBar ">
                    <div className="Logo mx-5 mt-2">
                        <p className="siteTitle"> <Link  onClick={handleGoToHomePage}>SIBA OverFlow</Link></p>
                    </div>
                    <img className="userPic rounded-circle mx-1" src="https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                    <button className="d-inline btn loginBtn text-light rounded-pill px-3 mx-2">{userData.first_name + ' '+ userData.last_name}</button>
                                
                    <ul className="navbar-nav mx-5" >
                        <li className="nav-item"><Link className="nav-link" to="/User/DashBoard">Dashboard</Link></li>
                        <li className="nav-item "><Link className="nav-link" to={`/User/Profile`}>Profile</Link></li>
                        <li className="nav-item"><a className="nav-link" href="#">Notification</a></li>
                        <li className="nav-item"><a className="nav-link" href={`/User/NewPost`}>New Post</a></li>
                        <li className="nav-item"><Link className="nav-link" to={`/User/Analytics`}>Analytics</Link></li>
                        <li className="nav-item"><a className="nav-link" href="#">Badges</a></li>
                        <li className="nav-item mx-3">
                            <div className="dropdown">
                            <div className="dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-tools"></i>
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Dark Mode</a></li>
                                <li onClick={handleLogOut}><a className="dropdown-item" href="#">Log Out</a></li>
                    
                            </ul>
                            </div>
                        </li>

                        
                    </ul>
                    
                 </nav>
                  
                  
       
    </div>
    )
}
