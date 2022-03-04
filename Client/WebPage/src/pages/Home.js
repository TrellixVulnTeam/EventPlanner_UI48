import { compose } from "@mui/system";
import axios from "axios";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/image.jpeg";
import "../styles/Home.css";



export default class Home extends Component{

    // state = {
    //    persons: [],
    //   }

      
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
    componentDidMount(){


        var url = 'http://localhost:9000/users/' + localStorage.getItem('token1');
        // var url = 'http://localhost:9000/event';
        
        
         axios.get(url, {
            headers :{
              'Content-Type' : 'application/x-www-form-urlencoded',
              Accept: 'application/json',
               'Content-Type': 'application/json',
              



              token : localStorage.getItem('token'),
  
            }}).then(

               res =>{
                    console.log(res);
               },
               err => {
                   console.log(err)
               }
        )
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

                // this.setState({ persons: res.date });
                    console.log(res.data);
               },
               err => {
                   console.log(err)
               }
        )
    }

      render(){
       
         return(
        <div className= "home" style={{background: `url(${BannerImage})`}}>
            
                 
                      {/* {   this.state.persons
                             .map(person =>
                                 <h2 key={person.id}>{person.date}</h2>
                             )
                    
                             } */}


            <div className="headerContainer">
                <h1>Travel</h1>
               
                <p>Travel anywhere you want</p>
                <Link to ="/Plan">
                <button> Plan now</button>
                </Link> 
            </div>
        </div>

        
    );
}
}
