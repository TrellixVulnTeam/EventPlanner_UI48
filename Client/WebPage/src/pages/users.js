import axios from "axios";
import React, { Component } from 'react';



export default class Users extends Component{
    state = {
        persons: []
       }  
componentDidMount(){


    var url = 'http://localhost:9000/users';
    // var url = 'http://localhost:9000/event';
    
    
     axios.get(url, {
        headers :{
          'Content-Type' : 'application/x-www-form-urlencoded',
          Accept: 'application/json',
           'Content-Type': 'application/json',
          



          token : localStorage.getItem('token'),

        }}).then(

            res =>{
                console.log("printibfjbfhvuhdgbyhu")
              console.log(res.data.user_items);
               this.setState({
               persons: res.data.user_items
             });
            //      console.log(res);
 
            //  this.setUser(res.data);
            },
            err => {
                console.log(err)
            }
     )




    }

    
 

    render(){
        console.log("this is simple-")
      
         

        console.log(this.state.persons)
                
             
                return(  <table> <tr>
                    <th style={{color:"white"}}>First_Name</th>
                    <th style={{color:"white"}}>Last Name</th>
                    <th style={{color:"white"}}>Phone</th>
                    <th style={{color:"white"}}>Email Id</th>
                    <th style={{color:"white"}}>User_type</th>
                  </tr>{  this.state.persons
                    .map(person =>
                       <tr style={{color:"white"}} key={person._id}>
                           
                            <td>
                               {person.first_name}
                            </td>
                            <td>
                               {person.last_name}
                            </td>
                            <td>
                               {person.phone}
                            </td>
                            <td>
                               {person.email}
                            </td>
                            <td>
                               {person.user_type}
                            </td>
                           
                          
                             
                           </tr>
                    )
           
                    } </table>)
    
                   
    
                 

    }

}