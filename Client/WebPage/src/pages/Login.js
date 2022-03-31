
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
 import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
 class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
			// User_type:'',
			Password: '',
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
			.post('http://localhost:9000/users/login ', this.state,{
				headers :{
				  'Content-Type' : 'application/x-www-form-urlencoded',
                   
	  
				}
			})
			.then(response => {


                // if(response.data.token){
                //     alert("logged in successfull")
                // }

                localStorage.setItem('token', response.data.token);
                 localStorage.setItem('token1', response.data.user_id);
				this.setState({
					LoggedIn: true
				});

			  this.props.setUser(response.data);
				console.log("RESPONES")
                console.log(response.data);

				// console.log(response.data.token)
			})
			.catch(error => {
				
			})
            this.setState({
                
			// User_type:'',
			Password: '',
			Email:'',
			
            });
            

	}
    render() {

		if(this.state.LoggedIn){
			return <Navigate to={"/"}/>
		}
   const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const { Password , Email, } = this.state;
    
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        hh
                    </Avatar>
                    <h2 style={headerStyle}>Login</h2>
                    <Typography variant='caption' gutterBottom>Please Login here</Typography>
                </Grid>
                <form onSubmit={this.submitHandler}>
                  
                    <TextField fullWidth label='Email' placeholder="Enter your email" type="email"
							name="Email"
							value={Email}
							onChange={this.changeHandler} />
                
                    <TextField fullWidth label='Password' placeholder="Enter your password" type='password' 
							name="Password"
							value={	Password}
							onChange={this.changeHandler}/>
{/*               
                    <TextField fullWidth label='USERTYPE' type='text' placeholder="enter your user_type" type="text"
							name="User_type"
							value={	User_type}
							onChange={this.changeHandler}/> */}
                   
                    <Button type='submit' variant='contained' color='primary' style={{marginTop: "15px",marginLeft:"90px"}}>Login</Button>
		    <a href="http://localhost:3000/Signup">
			<Button id="signup" variant='contained' color='primary' style={{marginTop: "15px",marginLeft:"90px"}} to ="/Signup">SignUp</Button>
		    </a>
			
                </form>
            </Paper>
        </Grid>
    )
}}

export default Login

