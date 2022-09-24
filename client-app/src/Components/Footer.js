import './footer.css'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
export default function Footer(){

  const history=useHistory()
  function handleCommingSoon(){
    alert('Comming soon!!!')
  }
    return(
      <>  
    <div className="container-fluid footerDesign mt-5" style={{backgroundColor: "#011c38"}} >

        <div className="row">
            <div className="col col-md-3 mt-5 mb-5 offset-2">
            <h5 className="footerHeadingDesign mb-3">About<p className="text-end" /></h5>
                <ul className="list-unstyled text-small  footerItems">
                    <li className="mb-3"><Link className="link-secondary text-decoration-none" to="/Teams">Team</Link></li>
                    <li className="mb-3"><a className="link-secondary text-decoration-none" href="#" onClick={handleCommingSoon}>Locations</a></li>
                    <li className="mb-3"><a className="link-secondary text-decoration-none" href="#" onClick={handleCommingSoon}>Privacy</a></li>
                    <li className="mb-3"><a className="link-secondary text-decoration-none" href="#" onClick={handleCommingSoon}>Terms</a></li>
                </ul>

            </div>
            <div className="col col-md-3 mt-5 mb-5">
            <h5 className="footerHeadingDesign mb-3">Categories<p className="text-end" /></h5>
                <ul className="list-unstyled text-small  footerItems">
                  <li className="mb-3"><Link className="link-secondary text-decoration-none" to="/Teams" >Team Lead</Link></li>
                  <li className="mb-3"><a className="link-secondary text-decoration-none" href="#" onClick={handleCommingSoon}>Online Quiz</a></li>
                  <li className="mb-3"><Link className="link-secondary text-decoration-none" to="/Help"  >Tackle Queries</Link></li>
                  <li className="mb-3"><a className="link-secondary text-decoration-none" href="#" onClick={handleCommingSoon}>Earn Badges</a></li>
                </ul>

        </div>
        <div className="col col-md-3 mt-5 mb-5">
            <h5 className="footerHeadingDesign mb-3">Contact<p className="text-end" /></h5>
                <ul className="list-unstyled text-small  footerItems">
                  <li className="mb-3"><a className="link-secondary text-decoration-none" href="#"><i className="fa fa-map-marker mx-2"></i>Airport Road Sukkur</a></li>
                  <li className="mb-3"><a className="link-secondary text-decoration-none" href="#"><i className="fa fa-envelope mx-2"></i>ict-sukk.edu.pk</a></li>
                  <li className="mb-3"><a className="link-secondary text-decoration-none" href="#"><i className="fa fa-phone f-2 mx-2"></i>Ext: 4049</a></li>
             
                </ul>
                
        </div>
            
        </div>
    </div>
   </>
    )
}