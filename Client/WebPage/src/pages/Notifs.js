import axios from "axios";
import React , {Component}from "react";

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
// import { Label } from "reactstrap";



export default class Notifs extends Component  {

    state={
        type: "sale",
        message: ""
    }
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		
		
     
		axios
			.post('/admin/notifs', this.state.message,{
				headers :{
					'Content-Type' : 'application/x-www-form-urlencoded',
					Accept: 'application/json',
					 'Content-Type': 'application/json',
					token : localStorage.getItem('token'),
			}}).then(response => {
                 console.log("yippee")
                console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
            this.setState({
                
                // User_type:'',
                type: "sale",
                message: ""
                });
            }
    render(){
        const { message } = this.state;
        const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
        let buttons1;
        if(this.state.type == "sale"){

            

             buttons1 = (  <Grid>
                 
                         <Paper elevation={20} style={paperStyle}>
                         <Grid align='center'>
                    
                           < Typography variant='caption' gutterBottom>Please messages for notification !</Typography>
                         </Grid>
                         <form onSubmit={this.submitHandler}>
                      <TextField style={{color:"white"}} fullWidth label='Enter messsage for notification' placeholder="Enter messsage for notification" type="text"
							name="message"
							value={message}
							onChange={this.changeHandler} />
            
                      <Button type='submit' variant='contained' color='primary' style={{marginTop: "15px",marginLeft:"90px"}}>Post noitification</Button>
                            </form>
                            </Paper>
                            </Grid>
                         )
                    }
            else{
                      buttons1=(   <h1 style={{color:"white"}}>{this.state.type}</h1>)
                 }
    

    return(

                    <div >
                        <h3 style={{color:"white"}}>Select type of event :   </h3>
                        <select value={this.state.type} onChange={(e) =>{
                             
                             this.setState({ type:  e.target.value });
                             
                        }}> 
                        
                        <option value = "sale">SALE</option>
                        
                        
                        </select>
                       
                        {buttons1}
                    </div>
                )

}}
// function Notifs(){
       


//        const [type,setType] = useState("sale");
    
//         let buttons1 ;

//         if(type == "sale"){
//              buttons1 = (

//                 // <TextField fullWidth label='text for notifications' placeholder="Enter your text" type='password' 
//                 //              name="Password"
//                 //             value={	Password}
//                 //         onChange={this.changeHandler}/>

//                 <h1 style={{color:"white"}}>{type}</h1>

//              )
//         }
//         else{
//             <h1 style={{color:"white"}}>{type}</h1>
//         }

//         return(

//             <div >
//                 <select value={type} onChange={(e) =>{
//                      const selected = e.target.value;
//                      setType(selected);
                     
//                 }}> 
                
//                 <option value = "sale">SALE</option>
//                 <option value ="event_attended"> event_attended</option>
                
//                 </select>

//                 {buttons1}
//             </div>
//         )


// }

// export default Notifs;
