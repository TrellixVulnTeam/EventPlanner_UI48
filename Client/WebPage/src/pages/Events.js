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
 class Events extends Component {
	constructor(props) {
		super(props)

		this.state = {
            Event_name: "",
			Date: '',
			
			
			Location:'',
			Time:'',
			Organizer: '',
			Price:'',
			
			
		}
	}
   
   


    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		
		
		axios
			.post('/event ', this.state,{
				headers :{
					'Content-Type' : 'application/x-www-form-urlencoded',
					Accept: 'application/json',
					 'Content-Type': 'application/json',
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
                Event_name: "",
                Date: '',
                
                
                Location:'',
                Time:'',
                Organizer: '',
                Price:"",
			
            });
	}
    render() {
   const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const { Event_name,Date,Location,Time, Organizer,Price} = this.state;
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    
                    <Typography variant='caption' gutterBottom>Please Enter Events you want to show !</Typography>
                </Grid>
                <form onSubmit={this.submitHandler}>
                    <TextField fullWidth label='Event Name' placeholder="Enter your Event name" 
							type="text"
							name="Event_name"
							value={Event_name}
							onChange={this.changeHandler} required />
                    <TextField fullWidth type="date"
							name="Date"
							value={Date}
							onChange={this.changeHandler} required/>
                    <TextField fullWidth label='Location' placeholder="Enter your Location" type="text"
							name="Location"
							value={Location}
							onChange={this.changeHandler} required />
                 
                   
                    
                    <TextField fullWidth label='Time' placeholder="Enter your time for the Event" type="time"
							name="Time"
							value={	Time}
							onChange={this.changeHandler} required />
                    <TextField fullWidth label='Organizer' placeholder="Enter your Organizer" type="text"
							name="Organizer"
							value={	Organizer}
							onChange={this.changeHandler} required/>
					<TextField fullWidth label='Price' placeholder="Enter your Price" type="number"
							name="Price"
							value={	Price }
							onChange={this.changeHandler} required/>
              
              
                   
                   
                    <Button type='submit' variant='contained' color='primary' style={{marginTop: "15px",marginLeft:"90px"}}>Submit Event</Button>
                </form>
            </Paper>
        </Grid>
    )
}}


export default Events;
