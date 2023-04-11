import { Container, AppBar, Typography, IconButton, Link, Box, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <AppBar elevation={0}  sx={{
        display:'block',
        backgroundColor:'transparent',
        position:'relative',

        '@media screen and (max-width: 768px)': {
            width: '100%',
          },
    }}
    >
        <Container
        sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'10px 0px',

            '@media screen and (max-width: 768px)': {
                width: '100%',
                padding: '10px',
              },
        }}>
            <Box sx={{
                display:'flex',
                gap:'20px'
            }}>
                <Typography variant="h4" fontFamily="monospace">
                    Yash Agarwal
                </Typography>
                <Link  color="inherit" href="#" underline="none" className='nav-link'>
                    Hello!
                </Link>
                <Link  color="inherit" href="#About" underline="none" className='nav-link'>
                    About
                </Link>
                <Link  color="inherit" href="#Projects" underline="none" className='nav-link'>
                    Projects
                </Link>
                <Link  color="inherit" href="#Contact" underline="none" className='nav-link'>
                    Contact
                </Link>
            </Box>
            <Box>
            <IconButton size="large" aria-label="search" color="inherit" sx={{
                cursor:"pointer"
            }}>
                <SearchIcon />
            </IconButton>
            <Button size="small" variant="contained" disableRipple disableElevation 
            disableFocusRipple
            sx={{
                
                backgroundColor:'#da4ea2',
                width:'100px',
                padding:'5px',
                color:'white',
                "&:hover": {backgroundColor: "#da4ea2",},
                borderRadius:'5px'
            }}>
                Hire Me!
            </Button>
          </Box>    
            
        </Container>
    </AppBar>
  )
}

export default Navbar