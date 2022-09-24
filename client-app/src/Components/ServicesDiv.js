import './ServicesDiv.css'
import { useHistory } from 'react-router'
export default function ServicesDiv(){

    const history= useHistory()
    function handleTeam(){
        history.push('./Teams')
    }
    function handleQuiz(){
        alert('Coming Soon!!')
    }
    function askQueries(){
        history.push('./Help')
    }
    function handleBadges(){
        alert('Coming Soon!!')
    }
    return (
        <div className="container-fluid">
            <div className="row">
               
                <div className="col col-md-2 offset-1 mt-5">
                    
                    <img src="./Images/collection.jpg" />
                </div>
                
                <div className="col col-md-3 mt-5 ">
                    <p className="mt-5 serviceMessage">Getting free tutor has never been easier</p>

                </div>
                <div className="col col-md-5 mt-5">
                    <button className="d-inline btn joinTeam shadow" onClick={handleTeam}>Join Teams</button>
                    <button className="d-inline btn attemptQuiz shadow" onClick={handleQuiz}>Attemp Quiz</button>     
                    <button className="d-inline btn askQueries shadow" onClick={askQueries}>Ask Queries</button>
                    <button className="d-inline btn earnBadges shadow" onClick={handleBadges}>Earn Badges</button>   
                </div>
            </div>
            
         </div>
    )
}