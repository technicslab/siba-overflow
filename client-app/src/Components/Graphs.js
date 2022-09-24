
import {UserStatesGraph } from './UserStatesGraph'

export default function Graphs(){

    
    let handleChange=({target})=>{

     console.log(target.value)
     
     currentGraph=target.value;
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className ="col col-md-10 offset-1">
                    <div className ="row">
                        <div className="col col-md-10  mt-5 mb-2 offset-1">
                        <div onChange={handleChange}>
                            <input type="radio" value="postStates" name="post" /> Posts
                            <input type="radio" value="commentStates" name="comment" /> Comments
                        </div>
                    </div>
                    <div className="row">
                    <div className="col col-md-10 offset-1 mb-5 shadow">
                    <UserStatesGraph currentGraph={currentGraph}/>
                    
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

