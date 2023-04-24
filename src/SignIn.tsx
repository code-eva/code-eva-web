import * as React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';



const pages = ['About','Features','Download','Support','Partners'];

interface TabPanelProps {
    children? : React.ReactNode;
    index : number;
    value : number;
}

const TabPanel = (props :TabPanelProps) => {
    const { children, value, index, ...other} = props;

    return(
        <div
        role = 'tabpanel'
        hidden = {value !== index}
        id = {`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    )
}

const a11yprops = (index: number) => {
    return{
        id:`simple-tab-${index}`,
        'aria-controls' :  `simple-tabpanel-${index}`,
    };
}

const SignIn = () => {
    const [value,setValue] = React.useState(0);

    const handleChange = (event : React.SyntheticEvent , newValue : number)=>{
        setValue(newValue);
    }


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
                    <Box>
                        <Tabs value = {value} onChange={handleChange} aria-label="sign in & sign up">
                            <Tab label='Sign In' {...a11yprops(0)}></Tab>
                            <Tab label='Sign Up'{...a11yprops(1)}></Tab>
                        </Tabs>
                    </Box>
                    <Box>
                        <TabPanel value = {value} index = {0}>
                            <TextField id="outlined-basic" label="User Name" variant="outlined" /><br />
                            <TextField id="outlined-basic" label="Password" variant="outlined" /><br/>
                            <Button> Sign In</Button>
                        </TabPanel>  
                        <TabPanel value = {value} index = {1}>
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" /><br />
                            <TextField id="outlined-basic" label="New Password" variant="outlined" /><br/>
                            <Button> Sign Up</Button>
                        </TabPanel>  
                    </Box>
                
                </Box>
                        
            </Container>
        </>
        
    );
}

export default SignIn;
