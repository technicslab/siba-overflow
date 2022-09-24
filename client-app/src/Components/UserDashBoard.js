
import LatestPostDiv from './LatestPostDiv'
import {BrowserRouter as Router,Switch,Route, Link,useLocation,useHistory,useParams,useRouteMatch} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function UserDashBoard(props){
    
    const location=useLocation()
    const {path,url}=useRouteMatch()
  
    return(
        <>
         
           <LatestPostDiv />
           </>
            
    )
}