import './Navbar.css'
import {Link} from 'react-router-dom'

export default function AdminDashBoardNav(){
    return(
        <div>
           
        <nav className=" navbar navbar-expand-lg topNavBar ">
            <div className="Logo mx-5 mt-2">
                <p className="siteTitle"><Link to="./">SIBA OverFlow</Link></p>
            </div>
            <button className="d-inline btn loginBtn text-light rounded-pill px-3 mx-2">Admin</button>
                        
             <ul className="navbar-nav mx-5" >
                <li className="nav-item"><Link className="nav-link" to="./AdminDashBoard">Dashboard</Link></li>
                <li className="nav-item"><a className="nav-link" href="#">Notification</a></li>
                <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-tools"></i></a></li>
             </ul>
            
        </nav>

    </div>
    )
}
