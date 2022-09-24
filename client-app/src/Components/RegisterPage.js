import Navbar from './Navbar'
import Footer from './Footer'
import './RegisterPage.css'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
export default function RegisterPage(){

    const [firstName, setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [gender,setGender]=useState('');
    const [cmsId,setCmsId]= useState('');
    const [birthDate,setBirthDate]= useState('');
    const [birthMonth,setBirthMonth]= useState('');
    const [birthYear,setBirthYear]= useState('');
    const [password,setPassword]= useState('');

    const [years,setYears]=useState([])
    const [days,setDays]=useState([])

    let tempYears=[]
    let tempDays=[]
    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']
    
    useEffect(()=>{
        for(let i=2021; i>1990 ; i--){
            tempYears.push(i);
        }
        setYears(tempYears)

        for(let i=1; i<=31; i++){
            tempDays.push(i)
        }
        setDays(tempDays)
    },[])
    

    const history= useHistory();

    async function submitForm(newUserData){

        let res= await fetch('http://localhost:9000/Register',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newUserData)
        })
        let data= await res.json()
        return data;
        
    }

    function checkConstraint(data){

        let is_fN = data.firstName === "" ? false : true;
        let is_cms = data.cmsId === "" ? false : true;
        let is_gender = data.gender === "" ? false : true;
        let is_birthdate = data.birthDate === "" ? false : true;
        let is_password = data.password === "" ? false : true;
    
        if( is_fN && is_cms && is_gender && is_birthdate && is_password){
            return false;
        }
        return true;
    }
    async function handleSignUp(event){
        //event.preventDefaultEvent();
        let month=months.indexOf(birthMonth);
        console.log(month)
        let birthdate= birthYear+'-'+(month+1)+'-'+birthDate;
        let data={
            cmsId,
            firstName,
            lastName,
            password,
            gender,
            birthdate
        }
        let is_reject= await checkConstraint(data);
        if(is_reject === true){
            alert('fill complete details')
        }else{
            let response= await submitForm(data)
            setTimeout(()=>alert(response),3000); 
            history.push('/Login')
        }
        //console.log('data = '+ data.firstName)
       
        
    }

    return(
        <> 
        <Navbar />
       <div className="continer Margin">
        {/* <!-- to set cards on a row --> */}
        <div className="row">
            
                {/* <!-- card --> */}
            <div className="card shadow px-2 col-lg-4 offset-lg-4">
                <div className="card-body">
                    <h4 className="card-title text-center">
                        Create your free account
                    </h4>
                
                    <form action="" className="text-center px-5">
                        <input type="text" className="form-control mt-4" placeholder="First name" value={firstName}  onChange={({target})=>{setFirstName(target.value)}}/>
                        <input type="text" className="form-control mt-4" placeholder="Last name" value={lastName} onChange={({target})=>{setLastName(target.value)}} />
                        <input type="text" className="form-control mt-4 " placeholder="Cms Id" value={cmsId} onChange={({target})=>{setCmsId(target.value)}} />
                        <input type="password" className="form-control mt-4" placeholder="Password" value={password} onChange={({target})=>{setPassword(target.value)}} />
                    </form>

                    <h3 className="text-muted offset-lg-1 mt-4">Birthday</h3>
                    {/* <!-- div row for select options --> */}
                    <div className="row mb-3">
                        {/* <!-- for years --> */}
                        <div className="col-lg-3 offset-lg-1">
                            <select className="form-select" aria-label="Default" onChange={({target})=>setBirthYear(target.value)}>
                           
                                {years.map(item=> <option value={item}>{item}</option>)}

                        </select>
                        </div>
                        {/* <!-- for days --> */}
                        <div className="col-lg-3">
                            <select className="form-select" aria-label="Default" onChange={({target})=>setBirthDate(target.value)}>
                                {days.map(item=><option value={item}>{item}</option>)}
                            </select>
                        </div>
                        {/* <!-- for months --> */}
                        <div className="col-lg-4">
                            <select name="" id="" className="form-select" aria-label="Default" onChange={({target})=>setBirthMonth(target.value)}>
                                
                                {months.map(item=><option value={item}>{item}</option>)}
                            </select>
                        </div>
                    </div> 
                    {/* <!--select row div ended --> */}


                    <h3 className="text-muted offset-lg-1">Gender</h3>

                    <form action="" className="form-check offset-lg-1" onChange={({target})=>{setGender(target.id)}}>
                        <div className="from-check d-inline-block me-2">
                            
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="male" />
                                <label for="maleRadio">Male</label>
                            
                        </div>
                        <div className="form-check d-inline-block me-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="female" />
                            <label for="femaleRadio">Female</label>
                        </div>
                        <div className="form-check d-inline-block">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="other" />
                            <label for="otherRadio">Other</label>
                        </div>
                 </form> 
                {/* <!-- radio button form --> */}
                <p className="offset-lg-1 mt-4">By clicking Sign Up, you can use our requirements , data policy cookies policy agrees.</p>
                <button className="form-control btn btn-success mt-2 mb-5 btnStyle" onClick={handleSignUp}>Sign Up</button>
                </div>
                 {/* <!-- card body ended --> */}
            </div>
             {/* <!-- card ended --> */}
            
        </div> 
        {/* <!-- 1st/main row ended --> */}
       
    </div>
    <Footer />
    </>
    //  {/* <!-- container ended--> */}
    );
}