import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Event_name: "",
			Date: '',
			
			
			Location:'',
			Time:'',
			Organizer: '',
			
			
			
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		
		
		axios
			.post('http://localhost:9000/event ', this.state,{
				headers :{
				  'Content-Type' : 'application/x-www-form-urlencoded',
	  
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
				
			
            });
	}

	render() {
		const { Event_name,Date,Location,Time, Organizer} = this.state;
		return (
			<div>
				<form onSubmit={this.submitHandler} style={{textAlign:"center"}}>
				<div>
						<label><b>Enter Events you want to show</b> </label>
						
					</div>
						<div  style={{marginRight:"90px"}}>
						<label>Enter Event_name</label>
						<input
							type="text"
							name="Event_name"
							value={Event_name}
							onChange={this.changeHandler}
							style={{marginLeft:"20px"}}
						/>
					</div>
					<div>
					<label>Enter Date </label>
						<input
							type="text"
							name="Date"
							value={Date}
							onChange={this.changeHandler}
							style={{marginLeft:"20px"}}
						/>
					</div>
					
				
					<div>
					<label>Enter Location </label>
						<input
							type="text"
							name="Location"
							value={Location}
							onChange={this.changeHandler}
							style={{marginLeft:"20px"}}
						/>
					</div>
					<div>
					<label>Enter Time </label>
						<input
							type="text"
							name="Time"
							value={	Time}
							onChange={this.changeHandler}
							style={{marginLeft:"20px"}}
						/>
					</div>
					<div>
					<label>Enter Organizer </label>
						<input
							type="text"
							name="Organizer"
							value={	Organizer}
							onChange={this.changeHandler}
							style={{marginLeft:"20px"}}
						/>
					</div>
					
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm
