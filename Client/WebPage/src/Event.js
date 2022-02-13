import  Axios  from "axios";
import React,{useState} from "react";




function Event (){
    const url = ""   // rahul api link

    const [data , setData] = useState({
       

        Event_name: "",
        Date: "",
        Location:"",
        Time:"",
        Organizer:""


    })

    function handle(e){


        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    function submit(e){
          e.preventDefault();
          Axios.post(url, {
              
            
        Event_name: data.Event_name,
        Date: data.Date,
        Location:data.Location,
        Time: data.Time,
        Organizer: data.Organizer


          })
          .then( res=>{
                console.log(res.data);

              })


    
} return(
        <div>
           <form onSubmit={(e)=>submit(e)}>
               <input onChange={(e)=>handle(e)} id = "Event_name" value={data.Event_name} placeholder= "Even_name" type="text" ></input >
               <input onChange={(e)=>handle(e)} id = "Date" value={data.Date} placeholder= "Date" type="Date" ></input >
               <input onChange={(e)=>handle(e)} id = "Location" value={data.Location} placeholder= "Location" type="text" ></input >
               <input onChange={(e)=>handle(e)} id = "Time" value={data.Time} placeholder= "Time" type="text" ></input >
               <input onChange={(e)=>handle(e)} id = "Organizer" value={data.Organizer} placeholder= "Organizer" type="text" ></input >
                  <button>        submit                          </button>
                        </form>


        </div>
)


}

export default Event;
