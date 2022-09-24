import {Line} from 'react-chartjs-2';
import {useState ,useEffect} from 'react';

export default function UserStatesGraph(){

    
    let currentGraph='Posts'
    var Days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    var Posts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,7,8,8,9,9,9,10,11,14,14,15];

    var Comments=[5,6,7,8,9,10,11,12,13,14,15,16,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   
    let initialState = {
        labels: Days,
        datasets: [
            {
            label:"Posts",
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#ea6645',
            borderColor: '#212529',
            borderWidth: 2,
            data: Posts
            }
        ]
        }
        let initialState2 = {
            labels: Days,
            datasets: [
                {
                label:"Comments",
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#ea6645',
                borderColor: '#212529',
                borderWidth: 2,
                data: Comments
                }
            ]
            }
      const [graphState, setGraphState]=useState(initialState)
      let handleChange=({target})=>{

      
         console.log( target.value)
         setGraphState(() =>
              target.value === "Comments" ? initialState2 : initialState)

       }
      
       return(
           <div className="container-fluid">
               <div className="row">
                   <div className ="col col-md-10 offset-1">
                       <div className ="row">
                           <div className="col col-md-10  mt-5 mb-2 offset-1">
                           <div onChange={handleChange}>
                               <input type="radio" value="Posts" name="states" /> Posts
                               <input type="radio" value="Comments" name="states" /> Comments
                           </div>
                       </div>
                       <div className="row">
                       <div className="col col-md-10 offset-1 mb-5 shadow">
                       <Line
                            data={graphState}
                            options={{
                                title:{
                                display:true,
                                text:'Average Post In 30 Days',
                                fontSize:80
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                        />
                     </div>
                       </div>
                   </div>
                   
               </div>
           </div>
           </div>
       )
   
}

