import { compose } from "@mui/system";
import axios from "axios";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/image.jpeg";
import "../styles/Home.css";


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
                <div className= "home" style={
                    {backgroundImage: `url(${BannerImage})`,
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                     width: "100vw",
                     heigth: "100vh"
                    }}>
                     
        
                    <div className="headerContainer">
                            <h1>Plan</h1>
                        
                            <p>Greetings {this.props.user.first_name} Plan new Events or Discover something more!</p>
                            <Link to ="/Plan">
                            <button>Discover !</button>
                            </Link> 
                        </div>
                </div>

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
        <div className= "home" style={
            {backgroundImage: `url(${BannerImage})`,
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
             width: "100vw",
             heigth: "100vh"
            }}>
             

            <div className="headerContainer">
                    <h1>Plan</h1>
                
                    <p>Plan new Events or Discover something more!</p>
                    <Link to ="/Plan">
                    <button>Discover !</button>
                    </Link> 
                </div>
        </div>

        
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

