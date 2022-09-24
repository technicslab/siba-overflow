export default function DefaultQueries(){

    let defaultQueries={
        Login:["I have issue with login","I forget My password","My account is hacked"],
        Register:["I have some problems with Registration","My identity can't be verified","It didn't verify my email address"],
        Post:["I am not able to do a post","I am not allowed to comment on any post"],
        Badges:["My profile does not shows any badges","When can i be eligible for a badge"],
        Report:["I want to repoted someone","Some one has reported me"]
    }
    let a=[1,2,3,4,5,6,7,8,9]
    let b=[]
    for(const item in defaultQueries){
        b.push(<li className="dropdown-item">{item}</li>);
        
    }
    return(
        <div>
          <ul class="dropdown-menu" aria-labelledby="allQueries">
           {b}
        </ul>
                
        </div>
    )
}