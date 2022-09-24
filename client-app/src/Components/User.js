import UserDashboardNav from './UserDashboardNav'
import LatestPostDiv from './LatestPostDiv'
import Footer from './Footer'
import {BrowserRouter as Router,Switch,Route, Link,useLocation,useHistory,useParams,useRouteMatch} from 'react-router-dom'
import { useState, useEffect } from 'react'
import UserProfile from './UserProfile'
import Analytics from './Analytics'
import NewPostPage from './NewPostPage'
import  UserDashBoard from './UserDashBoard'
import Introduction from './Introduction'
import ServicesDiv from './ServicesDiv'
import ExploreDiv from './ExploreDiv'
import PromotionArea from './PromotionArea'
import LatestUpdateDiv from './LatestUpdateDiv'
import SelectedPost from './SelectedPost'

export default function User(){
     
    const {path,url}=useRouteMatch()
    //const [userData, setUserData]=useState({})
    let location=useLocation()
    useEffect(() => {
           
          //setUserData(location.state.r)
       
          // if(location.state === undefined){

          //     setUserData( JSON.parse(localStorage.getItem('userData')))
          //     localStorage.clear('userData');

          // }else if(location.state !== undefined){
              
          //      setUserData(location.state.r)
              
          // }

          return(
               function(){
                    localStorage.setItem('userData', JSON.stringify( localStorage.state !== undefined && location.state.r ))
                   // alert('in user ')
               }
          )
            //setUserData(JSON.parse(localStorage.getItem('userData')))
           //console.log("from user.js "+location.state.r.first_name  + " : " + typeof location.state.r)
     },[])
     
    return(
        
            <Router>
                   
                 <UserDashboardNav Data={ location.state !== undefined ? location.state.r : JSON.parse(localStorage.getItem('userData')) }   />

                  
                 <Switch >
                     
                    <Route path={`${path}/DashBoard`} exact>
                         < UserDashBoard   />
                    </Route>
                    <Route path={`${path}`} exact>
                    {
                         localStorage.getItem('isLogin') !== null &&
                         <>
                         <ServicesDiv />
                         <ExploreDiv />
                         <PromotionArea />
                         <LatestUpdateDiv/>
                         </>
                    }
                    </Route>
                    <Route path={`${path}/Profile`} exact>
                         <UserProfile  Data={ location.state !== undefined ? location.state.r : JSON.parse(localStorage.getItem('userData')) } />
                    </Route>
                    <Route path={`${path}/NewPost`} exact>
                         <NewPostPage />
                    </Route>
                    <Route path={`${path}/Analytics`} exact>
                         <Analytics />
                    </Route>

                    <Route path={`${path}/Post`} exact>
                         <SelectedPost />
                    </Route>

                 </Switch>
           
                 <Footer />

            </Router>
    )
}