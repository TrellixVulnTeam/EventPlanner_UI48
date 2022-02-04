import React from 'react'

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
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
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
                    
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;
