import axios from "axios";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/image.jpeg";
import "../styles/Home.css";

export default class DisplayEvent extends Component{


    state = {
       persons: [ ]
      }
  
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

               this.setState({ persons: res.data.user_items });
                  
                    // var atom = res.data.user_items;
                    // console.log(atom);             
               },
               err => {
                   //console.log(err)
               }
        )
    }

    render(){
        
        console.log(this.state.persons )
        if(this.state.persons.length !=0 ){
            return(  <div className= "home" > {   this.state.persons
                .map(person =>
                    <h4 key={person._id}>{person.date} {person.event_name} {person.location}</h4>
                )
       
                } </div>)

               }



        return(
            <><h1>Login to see Events</h1></>
        )

    }
}
