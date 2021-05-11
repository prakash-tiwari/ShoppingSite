import  { useState } from 'react'

import  Grid  from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router-dom";

const Login=() =>{

    const [mailId, setMailId] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorValue, setErrorValue] = useState(false);
    const [helperTextVal, setHelperTextVal] = useState("");
    
    const paperStyle={padding :20, alignment:"center",  height:'70vh',width:500, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e', margin: "auto"}
    const btnstyle={margin:'8px 0'}
    let history = useHistory();

    const AboutPage = () =>
    {
        if(mailId==="prakash" && pwd ==="prakash")
        {             
            history.push('/main');
        }
        else
         {  
             setErrorValue(true)
           setHelperTextVal("Incorrect credentils")
         }
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                     <br />
                    <h2 style={avatarStyle}>Sign In</h2>
                </Grid>
                <br />
                <TextField 
                    label='Username' 
                    error = {errorValue}
                    helperText = {helperTextVal}
                    placeholder='Enter username' 
                    fullWidth 
                    required
                    onChange =  {(e) => setMailId(e.target.value)}
                />
                <TextField 
                    label='Password'   
                    error = {errorValue}
                    helperText = {helperTextVal}
                    placeholder='Enter password' 
                    type='password' 
                    fullWidth 
                    required
                    onChange =  {(e) => setPwd(e.target.value)}
                    />

                   <br /> 
                   <br /> 
                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth
                    onClick={AboutPage}
                >
                Sign in
                </Button>
        
            </Paper>
        </Grid>
    )
}

export default Login;