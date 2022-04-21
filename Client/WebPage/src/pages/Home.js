import { compose } from "@mui/system";
import axios from "axios";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/image.jpeg";
import "../styles/Home.css";
import Events from "./Events";

export default class Home extends Component{


   
    // state = {
    //    persons: [ ]
    //   }
  
    // componentDidMount(){
    //     var url1 = 'http://localhost:9000/event';
        
    //      axios.get(url1, {
    //         headers :{
    //           'Content-Type' : 'application/x-www-form-urlencoded',
    //           Accept: 'application/json',
    //            'Content-Type': 'application/json',
    //           token : localStorage.getItem('token'),
  
    //         }}).then(

    //            res =>{

    //            this.setState({ persons: res.data.user_items });
                  
    //                 // var atom = res.data.user_items;
    //                 // console.log(atom);             
    //            },
    //            err => {
    //                //console.log(err)
    //            }
    //     )
    // }

      render(){

        console.log("printing");
        console.log(this.props.user);
        if(this.props.user!="" ){
            return (
                <>
                <div className= "home" style={
                    {backgroundImage: `url(${BannerImage})`,
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                     width: "100vw",
                     heigth: "100vh"
                    }}>
                     
        
                    <div className="headerContainer">
                            
                        
                            <p>Greetings {this.props.user.first_name} Plan new Events or Discover something more!</p>
                            <Link to ="/about">
                            <button>Discover!</button>
                            </Link> 
                        </div>

                        {/* <div className="headerContainer">
                            
                        
                            <p>Greetings {this.props.user.first_name} Plan new Events or Discover something more!</p>
                            <Link to ="/about">
                            <button>Discover!</button>
                            </Link> 
                        </div> */}


                </div>
                <div className="about event">
        <h1>About Us</h1>
        <p>Hello, wishes from Event Planners</p>
        <h3>Frontend Developer : Jenil and Diskha </h3>
        <h3>Backend Developer : Rahul and Simran </h3>
     
        <p>
          Event Planner is a buying and selling platform for events and venues in the state of Florida.<br/>
            We are a team of event planners that are passionate about Enjoying our time through meeting other people during events.
        </p>
        
        <p>
          Event Planner website is great for people who want to plan events and venues for their friends and family.
         <br/> Participation in Events and Venues is a great way to meet new people  and enjoy the time and this website makes hassle free of these work
        </p>
       
      
        <h3>Contact for more details or query through contact Page</h3>
        <br />
        
         
      </div>
                </>
            )
        }

        // console.log(this.state.persons )
        // if(this.state.persons.length !=0 ){
        //     return(  <div className= "home" style={{background: `url(${BannerImage})`}}> {   this.state.persons
        //         .map(person =>
        //             <h4 key={person._id}>{person.date} {person.event_name} {person.location}</h4>
        //         )
       
        //         } </div>)

        //        }

               
       
     return(
         <>
        <div className= "home" style={
            {backgroundImage: `url(${BannerImage})`,
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
             width: "100vw",
             heigth: "100vh"
            }}>
             

            <div className="headerContainer">
                   
                
                    <p>Plan new Events or Discover something more!</p>
                    <Link to ="/about">
                    <button>Discover !</button>
                    </Link> 
                </div>
                      
        </div>

        <div className="about event">
        <h1>About Us</h1>
        <p>Hello, wishes from Event Planners</p>
        <h3>Frontend Developer : Jenil and Diskha </h3>
        <h3>Backend Developer : Rahul and Simran </h3>
     
        <p>
          Event Planner is a buying and selling platform for events and venues in the state of Florida.<br/>
            We are a team of event planners that are passionate about Enjoying our time through meeting other people during events.
        </p>
        
        <p>
          Event Planner website is great for people who want to plan events and venues for their friends and family.
         <br/> Participation in Events and Venues is a great way to meet new people  and enjoy the time and this website makes hassle free of these work
        </p>
       
      
        <h3>Contact for more details or query through contact Page</h3>
        <br />
        
         
      </div>


    
        

                    
        </>
        
    );
}
}
     
    // let auth =  localStorage.getItem('user_token');
    // return fetch(url, {
    //  method: 'GET',
    //  headers:{
    //    Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': "Bearer " + auth,
    //     },
    // constructor(){
    //     super()
    // }
    // componentDidMount(){


    //     var url = 'http://localhost:9000/users/' + localStorage.getItem('token1');
    //     // var url = 'http://localhost:9000/event';
        
        
    //      axios.get(url, {
    //         headers :{
    //           'Content-Type' : 'application/x-www-form-urlencoded',
    //           Accept: 'application/json',
    //            'Content-Type': 'application/json',
              



    //           token : localStorage.getItem('token'),
  
    //         }}).then(

    //            res =>{
    //                 console.log(res);
    //            },
    //            err => {
    //                console.log(err)
    //            }
    //     )
    // }
