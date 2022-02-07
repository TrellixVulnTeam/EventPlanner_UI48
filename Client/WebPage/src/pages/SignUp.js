import React from 'react'
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
 
const SignUp = () => {
    const [post, setPost] = React.useState("null");
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const baseURL = "http://localhost:9000/users/signup"
    
    function updatePost() {
        alert("hie")
    // fetch("/users/signup")
    //   .then(res => res.json())
    //   .then(
    //     (result) => 
    //       alert(result.data)
    //       );
    // }
    axios
      .post(`${baseURL}`, {
        First_name:"mongo",
        Last_name:"Batra",
        Password:"rahul123",
        Email:"mongobatra@gmail.com",
        Phone:"3528812878",
        User_type:"ADMIN"
      },{
          headers :{
            'Content-Type' : 'application/x-www-form-urlencoded',

          }
      })
      .then((response) => {
        setPost(response.data);
        //console.log(response.data+"1")
      });
    }

  
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        hh
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='First Name' placeholder="Enter your first name" />
                    <TextField fullWidth label='Last Name' placeholder="Enter your last name " />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number"  />
                    <TextField fullWidth label='Password' placeholder="Enter your password" type='password' />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" type='password' />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit'  onClick={updatePost} variant='contained' color='primary'>Sign up</Button>
                    { <p>hey {post}</p> }
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;
