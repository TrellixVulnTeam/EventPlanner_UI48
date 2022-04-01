import axios from "axios";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/image.jpeg";

export default class Ticket extends Component {
    componentDidMount(){
        var url1 = 'http://localhost:9000/event';
        
         axios.get(url1, {
            headers :{
              'Content-Type' : 'application/x-www-form-urlencoded',
              Accept: 'application/json',
               'Content-Type': 'application/json',
              token : localStorage.getItem('token'),
  
            }}).then(

               res =>{

               this.setState({ persons: res.data[0].user_items });        
               },
               err => {
                   //console.log(err)
               }
        )
    }
    render(){
        console.log("hele")
        console.log(this.state.persons )
        if(this.state.persons.length !=0 ){
            return(  <div className="container"  >  {   this.state.persons
                .map(person =>
                   <div className="event" key={person._id}>
                        <div>
                        <p>Organizer : {person.organizer}</p>
                        <p>Time : {person.time}</p>
                        </div>
                        <div style={{color:"white",paddingLeft:"5px"}}>
                        {person.date}
                        </div>

                        <div>
                         <span>{person.event_name}</span>
                        <h3>{person.location}</h3>
                        </div>
                         
                       </div>
                )
       
                } </div>)

}
}
}
