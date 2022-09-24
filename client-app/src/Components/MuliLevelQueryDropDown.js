import Dropdown from 'react-multilevel-dropdown';
export default function MuliLevelQueryDropDown(props){
    
    let queryArray=[]
    let defaultQueries={
        Login:["I have issue with login","I forget My password","My account is hacked"],
        Register:["I have some problems with Registration","My identity can't be verified","It didn't verify my email address"],
        Post:["I am not able to do a post","I am not allowed to comment on any post"],
        Badges:["My profile does not shows any badges","When can i be eligible for a badge"],
        Report:["I want to repoted someone","Some one has reported me"]
    }
  
   
    for(const item in defaultQueries){
        //console.log(defaultQueries[item])
        queryArray.push( 
            
            <Dropdown.Item >
                {item}
                    
                    <Dropdown.Submenu position="right" >
                   
                     {defaultQueries[item].map((subQuery)=>{
                         return(<Dropdown.Item  style={{ color:"black"}} onClick={()=>{props.handleQuerySelection(subQuery)}} >
                            {subQuery}
                           </Dropdown.Item>
                           )
                        }
                    )
                    }      
                          
                </Dropdown.Submenu>
               
            </Dropdown.Item>
        )
        
    }
    return(
        <Dropdown title={props.query} position="right" style={{width:630}} id="rootDropDown">
        {queryArray}
        <Dropdown.Item onClick={props.handleOtherQuery}>
            Other
        </Dropdown.Item>
        </Dropdown>
    )
    

}