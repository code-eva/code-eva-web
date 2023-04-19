import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'





const pages = ['About','Features','Download','Support','Partners']

const SignIn = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        })
    };
    return(
        <>
        <Container component = "main" maxWidth="md">
            <CssBaseline/>
            <AppBar position="fixed" color="primary">
              <Toolbar sx = {{justifyContent : "space-between"}}>
                <Typography variant="h6" sx={{marginRight:'20px'}}>
                  Code-Eva
                </Typography>
                <Box 
                display='flex'
                justifyContent='flex-end'
                alignContent='flex-end'>
                {
                    pages.map((page)=>(
                        <Button 
                        variant = "contained"
                        color = 'secondary'
                        key = {page}
                        sx={{ mr : 2}}
                        >
                            {page}
                        </Button>
                    ))
                }
                <Button variant = 'outlined' color ='secondary' sx = {{mr:2 , color:"white"}}> Sign In</Button>
                <Button variant = 'outlined' color ='secondary' sx = {{mr:2 , color:"white"}}> Sign Up</Button>
                </Box>        
              </Toolbar>
            </AppBar>
            <Box
                sx={{
                    marginTop:8,
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                }}>
                <Typography component='h1' variant="h5" color="primary">
                    Sign In
                </Typography>
            </Box>
                      
        </Container>
        </>
        
    );
}

export default SignIn;
