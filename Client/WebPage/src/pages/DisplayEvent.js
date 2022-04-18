import axios from "axios";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/image.jpeg";
import "../styles/Home.css";
// import download from 'C:/Users/Dell/Desktop/testing/EventPlanner/Client/WebPage/src/assests/download.jpg';
// import gatornights from 'C:/Users/Dell/Desktop/testing/EventPlanner/Client/WebPage/src/assests/gatornights.jpg';
import image2 from 'C:/Users/Dell/Desktop/testing/EventPlanner/Client/WebPage/src/assests/image2.jpg';
// import { Navigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'

export default class DisplayEvent extends Component{
    constructor() {
        super();
        this.state = {
            persons: [ ],
             quantity: "",
             user_id: "",
             event_id: "",
             linksf:"",
           }

          
      }
    
     
    componentDidMount(){
        var url1 = '/event';
        
         axios.get(url1, {
            headers :{
              'Content-Type' : 'application/json',
              Accept: 'application/json',
              token : localStorage.getItem('token'),
  
            }}).then(

               res =>{

               this.setState({ persons: res.data[0].user_items ,
                               event_id: res.data[0].user_items._id,
                               user_id : this.props.user.ID});
                  // var atom = res.data.user_items;
                console.log("i am jenil bharat jain and ")
                console.log(this.state.user_id)

               },
               err => {
                   console.log(err)
               }
        )
    }
    
    submitHandler = e => {
		
        console.log("inside submit handler")
		
		
        console.log("herehheheheheheherehbher")
        console.log(this.state)
       
     
		axios.post('/payment ',{quantity:this.state.quantity,
        user_id:this.state.user_id,event_id:this.state.event_id},{
				headers :{
				  'Content-Type' : 'application/x-www-form-urlencoded',
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                 token : localStorage.getItem('token'),
	  
				}
			})
			.then(response => {
                 
                console.log(response.data.data);
                //  if(response.data.data){
                //     alert("Payment Successful")
                //     this.props.history.push("/payment")
                //  }
                
               this.setState({linksf: response.data.data})
                
			})
			.catch(error => {
				console.log(error)
			})
       

	}
    changeHandler = e => {
        console.log("inside change handler")
        console.log(e.target.name)
		this.setState({ [e.target.name]: e.target.value },() => { console.log(this.state)})
      
	}

    increment = async person=> {
        console.log("inside increment")
        
        await this.setState({event_id : person,
                               
        }, () => { this.submitHandler()});
       console.log(this.state.quantity)
    };


    // increment(e,person){
        
    //     this.setState({event_id : person,
    //                    });
        
        

    //     console.log("inside increment")
    //     console.log(this.state.event_id)
    //   };
  
    //   changeHandler = e => {
	// 	this.setState({ [e.target.name]: e.target.value })
    //     console.log("inside change handler")
    //     console.log(this.state.event_id)
	// }
    render(){


       if(this.state.linksf!==""){
        return window.location.replace(this.state.linksf,"_blank") ;
       }

       
        

        // let ans = [gatornights , download];
        console.log("hele")
        console.log(this.state.persons )
        console.log(this.props.user);
        const { quantity } = this.state;
        if(this.state.persons.length !=0 ){
            return(
           
            <div className="container"  >  {   this.state.persons
                .map(person =>
                   <div className="event" key={person._id}>
                        <div>
                            <p>Organizer : {person.organizer}</p>
                            <p>Time : {person.time}</p>
                        </div>
                        <div style={{color:"white",paddingLeft:"5px"}}>
                            <img src={image2}/>
                        </div>

                        <div>
                            <span>{person.event_name} 
                            <br/>Date: {person.date}</span>
                            <h3>{person.location}</h3>

                           
                            <button   onClick={ 
                                
                             e => { 
                                
                                 this.increment(person._id);
                                 
                            }
                              
                             }
                             >  BUY Tickets  </button>
                             <form onSubmit={this.submitHandler}>
                                <input className="form-field" fullWidth label='quantity' placeholder="Enter your quantity" type='text' 
							name="quantity" 
							onChange={this.changeHandler} />
                            </form>
                        </div>

                        
                     
                            </div>
                       
                         
                       
                )
       
                } </div>
                )

               }



        return(
            <><h1 style={{color:"white"}}>Login to see Events</h1></>
        )

    }
}




     // return(  <div className="container"  > 
            //           <div className="event">
            //             <div>
            //             <p>Organizer : {this.state.persons[0].organizer}</p>
            //             <p>Time : {this.state.persons[0].time}</p>
            //             </div>
            //             <div style={{color:"white",paddingLeft:"5px"}}>
            //                 <img src={ans[0]}/>
            //             {this.state.persons[0].date}
            //             </div>

            //             <div>
            //              <span>{this.state.persons[0].event_name}</span>
            //             <h3>{this.state.persons[0].location}</h3>
            //             </div>
                         
            //            </div>

            //            <div className="event">
            //             <div>
            //             <p>Organizer : {this.state.persons[1].organizer}</p>
            //             <p>Time : {this.state.persons[1].time}</p>
            //             </div>
            //             <div style={{color:"white",paddingLeft:"5px"}}>
            //                 <img src={ans[1]}/>
            //             {this.state.persons[1].date}
            //             </div>

            //             <div>
            //              <span>{this.state.persons[1].event_name}</span>
            //             <h3>{this.state.persons[1].location}</h3>
            //             </div>
                         
            //            </div>


                       
            //            <div className="event">
            //             <div>
            //             <p>Organizer : {this.state.persons[2].organizer}</p>
            //             <p>Time : {this.state.persons[2].time}</p>
            //             </div>
            //             <div style={{color:"white",paddingLeft:"5px"}}>
            //                 <img src={ans[1]}/>
            //             {this.state.persons[2].date}
            //             </div>

            //             <div>
            //              <span>{this.state.persons[2].event_name}</span>
            //             <h3>{this.state.persons[2].location} : Price For 1 Ticket :{this.state.persons[2].Price}$
            //             </h3>
            //             <button  
							
			// 				onClick={() => this.handleClick(this.state.persons[2]._id)}>BUY</button>
            //             </div>
                        
                        
                         
            //            </div>
                
       
            //     </div>




            // if(response.data.token){
                //     alert("logged in successfull")
                // }

            //     localStorage.setItem('token', response.data.token);
            //      localStorage.setItem('token1', response.data.user_id);
			// 	this.setState({
			// 		LoggedIn: true
			// 	});

			//   this.props.setUser(response.data);
			// 	console.log("RESPONES")
            //     console.log(response.data);

				// console.log(response.data.token)



                     // this.setState({
                
			// // User_type:'',
			// Password: '',
			// Email:'',
			
            // });
            
