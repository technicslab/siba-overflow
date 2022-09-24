import MuliLevelQueryDropDown from './MuliLevelQueryDropDown'
import {useState} from 'react'
export default function HelpForm(){
    
    const [query,setQuery]=useState("Select your query")
    
    let handleQuerySelection=(subQuery)=>{
        
        setQuery(subQuery)
        document.getElementById('rootDropDown').click();
        document.getElementById('otherReason').style.display="none"

        }
   let  handleOtherQuery= ()=>{

    document.getElementById('otherReason').style.display="inline"
    document.getElementById('rootDropDown').click();
    setQuery("other")

    }
    return(
        <div className="container" style={{marginTop:"10%",marginBottom:"5%"}}>

            <div className="row ">
             <div className ="col col-md-6 offset-3 shadow">
                 <h2 className="text-center mt-4"> Submit your query </h2>
                 <div className="form mt-4 mb-5">
                     <input type="text" className="form-control mb-3 mt-3" placeholder="Email" />
                     {/* react multilevel drop down */}
                    
                        <MuliLevelQueryDropDown query={query} handleQuerySelection={handleQuerySelection} handleOtherQuery={handleOtherQuery} />

                     <input type="text" className="form-control mb-3 mt-3" placeholder="Reason" style={{display:"none"}} id="otherReason" />
                     <textarea type="text" className="form-control mb-3 mt-3" style={{height:200}}/>
                     <img  src="https://image.flaticon.com/icons/png/128/285/285705.png"  style={{height:20, width:20}} />
                     <button className="float-end px-5 d-block" style={{backgroundColor:"#ea6645", color:"white"}}>Submit</button>
                </div>   
               
             </div>    
            </div>
        </div>
    )
}

