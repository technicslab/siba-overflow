import AdminToDoList from './AdminToDoList'
import './LatestPost.css'
export default function AdminToDoListDiv(){

    return(
        <div className="container mt-5">
            <h2 className="text-center"> Pending Posts</h2>
        <AdminToDoList />
        {/* pagnitation buttons  */}
        <div className="row">
            <div className="col col-md-2 offset-8 mt-5">
                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2" role="group" aria-label="First group">
                      <button type="button" className="btn btn-outline-secondary"><i className="fa fa-arrow-left"></i></button>
                      <button type="button" className="btn btn-outline-secondary">1</button>
                      <button type="button" className="btn btn-outline-secondary">2</button>
                      <button type="button" className="btn btn-outline-secondary">3</button>
                      <button type="button" className="btn btn-outline-secondary">4</button>
                      <button type="button" className="btn btn-outline-secondary"><i className="fa fa-arrow-right"></i></button>
                    
                    </div>
                 </div> 
            </div>
        </div>
          
     </div>
    )
}