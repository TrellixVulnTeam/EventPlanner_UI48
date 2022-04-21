import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
// import FormControlLabel from '@mui/material';
//  import {FormControl} from '@mui/material';
import { FormControl } from '@mui/material';
 import { FormControlLabel } from '@mui/material';
 import { FormLabel } from '@mui/material';
 //import {Checkbox} from '@material-ui/core/Checkbox';
 import { Checkbox } from '@mui/material';
 class Contact extends Component {
	constructor(props) {
		super(props)

		this.state = {
			First_name: "",
			
			
			
			Message:'',
			
			
			Email:'',
			
			
		}
	}
   
   


    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		
		
		axios
			.post('/query ', this.state,{
				headers :{
				  'Content-Type' : 'application/x-www-form-urlencoded',
                  token : localStorage.getItem('token'),
	  
				}
			})
			.then(response => {
				console.log(response)
                
			})
			.catch(error => {
				console.log(error)
			})
            this.setState({
                First_name: "",
		
			
			Message:'',
			
			
			Email:'',
			
            });
	}
    render() {
   const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    
    const { First_name, Email, Message} = this.state;
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                  
                    <Typography variant='caption' gutterBottom>Please Fill Contact Page</Typography>
                </Grid>
                
                <form onSubmit={this.submitHandler}>
                    <TextField fullWidth label='First Name' placeholder="Enter your first name" type="text"
							name="First_name"
							value={First_name}
							onChange={this.changeHandler} required/>
                    
                    <TextField fullWidth label='Email' placeholder="Enter your email" type="email"
							name="Email"
							value={Email}
							onChange={this.changeHandler} required />
                 
                   
                    
                    <TextField fullWidth label='Message' placeholder="Enter your Message" type="text"
							name="Message"
							value={Message}
							onChange={this.changeHandler} required/>
                  
                   
                   
                    <Button type='submit' variant='contained' color='primary' style={{marginTop: "15px",marginLeft:"90px"}}>Submit</Button>

                          
                            
                </form>
            </Paper>
        </Grid>
    )
}}

export default Contact;
