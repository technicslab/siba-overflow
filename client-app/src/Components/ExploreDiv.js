import './ExploreDiv.css'
import { useHistory } from 'react-router'
export default function ExploreDiv(){
    const history=useHistory()
    function handleExplore(){
        history.push('/Login')
    }
    return (
        
        <div className="container-fluid">

        <div className="row mt-5">
            <div className="col col-md-10 offset-1 exploreArea mt-5">

                <div className="row">
                    <div className="col col-md-2 mt-5">
                        <div>
                            <img src="./Images/box_1.png" />
                        </div>
                        
                    </div>
                    <div className="col col-md-6 offset-1 mt-5">
                        <p className="exploreParaTitle">Exchange your <span className="Knowlegde"> Knowlegde</span></p>
                
                    </div>
                    <div className="col col-md-1 offset-1  mt-5">
                        <div >
                            <img src="./Images/box_2.png" className="box" />
                        </div>
                        
                    </div>
                </div>
                <div className ="row">
                    <div className="col col-md-6 offset-3 mt-3">
                        <p className="explorePara">Explore technical topics and other disciplines across 170+ Q&A communities</p>
                
                    </div>

                </div>
                
                <button className="d-inline btn exploreBtn text-light rounded-pill px-5" onClick={handleExplore}>Explore the Place</button>
            </div>
        </div>
     </div>
    )
}