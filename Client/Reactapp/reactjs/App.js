// import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
//import Footer from ".components/Footer";
import react ,{Component} from 'react'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Signup from "./pages/SignUp";
import {BrowserRouter as Router, Routes, Route} 
from 'react-router-dom';
import axios from 'axios'

export default class App extends Component
 {
    state = {
       user: []
      }
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
             console.log(res.data);
            this.setState({
              user: res.data
            });
                console.log(res);
           },
           err => {
               console.log(err)
           }
    )
}
   render(){
  return (
    <div className="App">

      <Router>
        <Navbar user={this.state.user}> </Navbar>
        <Routes>
          <Route path ="/" element={<Home user={this.state.user}/>}/>
          <Route path ='/event' element={<Events/>}/>
          <Route path ='/Login'  element={<Login/>}/>
          <Route path ='/Signup'  element={<Signup/>}/>
      </Routes>
      </Router>  
    
      
    </div>
      
  );
   }
}
