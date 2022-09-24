
import UserDescription from './UserDescription'
import Footer from './Footer'
import { useEffect, useState } from 'react'
export default function UserProfile(props){
    const [userData,setUserData]=useState({})
    useEffect(()=>{
        
        setUserData(props.Data)
    
    },[userData])
    return(
        <div>
    
        <UserDescription  Data={userData}/>
       
        </div>
    )
}