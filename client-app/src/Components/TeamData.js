export default function TeamData(){
    // teams array that will store data about individual teams
    let teams=[
        {
            name:'CodeDevelopers',
            createdOn:'12-june-2020',
            totalMembers:50,
            Admin:'Nageeta',
            adminPhoto: "https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff", 
            lastPost:'2',
            coverphoto:"https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            privacy:"Private"
        },{
            name:'WebDevelopers',
            createdOn:'12-may-2020',
            totalMembers:60,
            Admin:'Usama',
            adminPhoto: "https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff", 
            lastPost:'3',
            coverphoto:"https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            privacy:"Public"
        },{
            name:'CodeDevelopers',
            createdOn:'12-june-2020',
            totalMembers:50,
            Admin:'Nageeta',
            adminPhoto: "https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff", 
           
            lastPost:'2',
            coverphoto:"https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            privacy:"Private"
        },{
            name:'WebDevelopers',
            createdOn:'12-may-2020',
            totalMembers:60,
            Admin:'Usama',
            adminPhoto: "https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff", 
           
            lastPost:'3',
            coverphoto:"https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            privacy:"Public"
        },{
            name:'CodeDevelopers',
            createdOn:'12-june-2020',
            totalMembers:50,
            Admin:'Nageeta',
            adminPhoto: "https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff", 
           
            lastPost:'2',
            coverphoto:"https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            privacy:"Private"
        },{
            name:'WebDevelopers',
            createdOn:'12-may-2020',
            totalMembers:60,
            adminPhoto: "https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff", 
           
            Admin:'Usama',
            lastPost:'3',
            coverphoto:"https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            privacy:"Public"
        }
    ]
    return(
        <>
        {teams.map((item)=>(
                <div className="col col-md-3 offset-1 mt-5">
                <div className="card mt-3 shadow mb-5">
                    <img  src={item.coverphoto} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title fontTwentyBold text-center">{item.name}</h5>
                    <hr />
                    <div className="mt-2 mb-3">
                        <a href="#"><img src={item.adminPhoto}  className="rounded-circle d-inline "/></a>
                        
                        <span className="mx-3 mt-2">
                        {item.Admin}
                        </span>
                       
                    </div>
                   
                    <div className="row">
                    <div className="col col-md-6">
                        <p>{item.totalMembers} Members</p>
                        
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-primary form-control">Join</button>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col col-md-9">
                        <span>Last Posted: {item.lastPost} days ago</span>
                      
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
                </div>
        ))}
       
        </>
    )
}