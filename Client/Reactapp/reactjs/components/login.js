// import React from 'react'
// import { Grid,Paper } from '@mui/material'

// const Login=()=>{
//     const paperStyle = {padding :20}
//     return( 
//        <Grid>
//            <Paper elevation={10} style={paperStyle}>
//                sign in
//            </Paper>
//        </Grid>
//     )
// }
// export default Login

import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
// import LockOutlinedIcon from '@mui/icons-material';
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

// import FormControlLabel from '@mui/material';
import { FormControlLabel } from '@mui/material';
// import Checkbox from '@mui/material';
import { Checkbox } from '@mui/material';
const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}>JJ</Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login