export default function AdminToDoList(){

    let pendingPostArray=[{
        owner:"Nageeta" ,
        Category:"python",
        Question : "How to use lamdha experssion in Python ?", 
        postDate: "12-june 2021",
        Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iusto ullam labore nemo officia quia delectus excepturi dicta velit voluptatum. Enim voluptatem totam, corporis iusto delectus praesentium quibusdam error sapiente? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum odio totam aut. Ut, ullam d",
        totalComments:12,
        totalLikes:55,
        img: [
            "img1","img2"
        ],
        files:[

        ] 
    },
    {
        owner:"usama" ,
        Category:"cpp",
        Question : "How to use lamdha experssion in cpp ?", 
        postDate: "12-june 2020",
        Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iusto ullam labore nemo officia quia delectus excepturi dicta velit voluptatum. Enim voluptatem totam, corporis iusto delectus praesentium quibusdam error sapiente? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum odio totam aut. Ut, ullam d",
        totalComments:11,
        totalLikes:100,
        img: [
            "img1","img2"
        ],
        files:[

        ] 
    }]

    return(<>
        {  pendingPostArray.map((item) => (
          <div className="row ">
             <div className="col col-md-8 offset-2 mt-5">
                 <div className="card">
                     <div className="card-body ">
                         <div className="card-header userInfoArea">
                             <img className="userPic rounded-circle mx-1" src="https://images.unsplash.com/profile-1608304075873-ec3f3b553896image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                             <span>{item.owner}</span>
                             <hr />
                             <div className="card-title">
                               <h3>  {item.Category}</h3>
                                 <i className="fa fa-arrow-right mx-1" ></i>
                                {item.Question}</div>
                         </div>
                        
                         <p className="card-text">{item.Description}</p>
                         <div>
                             
                             <hr />
                                 <div>
                                     <button className="btn btn-success mx-2 px-4">Accept</button>
                                     <button className="btn btn-danger px-4">Reject</button>
                                 <div>
                             </div>
                             </div>
                          </div>
                     </div>
                 </div>
             </div>
         </div>
        ))
        }
                 
   </> )
}