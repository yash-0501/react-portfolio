import { Alert, Box, Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import MapChart from './Map'
import {isMobile} from 'react-device-detect';
import MobileMapChart from './MobileMap';


const Contact = () => {


const [success,setSuccess] = useState(null)
const ref = useRef()

const handleSubmit = e =>{
  alert("clicked")
  e.preventDefault();

  emailjs.sendForm('service_ysitj1d', 'template_ze7a6ym', ref.current, '_P3uf8mSqFORlIqb0')
  .then((result) => {
      console.log(result.text);
      setSuccess(true)
  }, (error) => {
      console.log(error.text);
      setSuccess(false)
  });

}

  return (
    <Box id="Contact" sx={{
      height:'100vh',
      display:'flex',
      scrollSnapAlign:'center',
      justifyContent:'center',
      gap:'50px',

      '@media screen and (max-width: 768px)': {
        height:'200vh',
        flexDirection:'column',
        scrollSnapAlign:'none',
      },
    }}>
      <Box className='left-contact'>
        
        <Box ref={ref} component="form"
        onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            width:'500px',
            display:'flex',
            flexDirection:'column',
            gap:'25px',

            '@media screen and (max-width: 768px)': {
              width:'90%',
            },
          }}
        >
          <Typography variant="h2" sx={{
          fontWeight:'200'
        }}>
          Contact Us
        </Typography>
          <TextField id="filled-basic" hiddenLabel  variant="filled"
          placeholder='Name' name="name"
            sx={{
              border:'none',
              borderRadius:'5px',
              backgroundColor:'#e8e6e6',
              "& input": {
                  color: 'black',
                  outline:'none',
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: 'black',
                border:'none',
                outline:'none'
            },
              "& .MuiFormLabel-root": {
                color: 'black'
            },
            }}
          />
          <TextField id="filled-basic" hiddenLabel  variant="filled"
          placeholder='Email' name="email"
            sx={{
              '.MuiTextField-root.Mui-focused':{
                border:'5px black solid',
                backgroundColor:'red',

              },
              border:'none',
              borderRadius:'5px',
              backgroundColor:'#e8e6e6',
              borderBottom: "none",
              "& input:focus": {
                  borderRadius:'5px',
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: 'black',
                border:'none',
                outline:'none',
                borderBottom: "none",
            },
              "& .MuiFormLabel-root": {
                color: 'black',
                borderBottom: "none",
            },
            '&:after': {
              borderBottom: 'none'
            }

            
            }}
          />
          <TextField
          name="message"
          id="filled-multiline-static"
          placeholder='Write your message!'
          hiddenLabel
          multiline
          rows={4}
          variant="filled"
          sx={{
            border:'none',
            borderRadius:'5px',
            backgroundColor:'#e8e6e6',
            "& input": {
                color: 'black',
                outline:'none',
            },
            "& .MuiFormLabel-root.Mui-focused": {
              color: 'black',
              borderBottom:'none',
              outline:'none'
          },
            "& .MuiFormLabel-root": {
              color: 'black'
          },
          }}
        />
        <Button 
        type="submit"
        variant='contained' disableElevation disableRipple sx={{
                backgroundColor:'#da4ea2',
                fontWeight:'500',
                
                padding:'10px',
                color:'white',
                "&:hover": {backgroundColor: "#da4ea2",},
                borderRadius:'5px'
            }}
            >
              Send
        </Button>
        {success && <Alert severity="success">"Your message has been sent successfully. Will get back to you soon!" </Alert>}
        
        </Box>
      </Box>
      <Box className='right-contact'>
            <Box className='map' component='div' sx={{
              '@media screen and (max-width: 768px)': {
                height:'100vh',
                width:'90%',
                padding:'5%',
              },
            }}>
              { isMobile ? <MobileMapChart /> : <MapChart  />}
            </Box>
      </Box>
    </Box>
  )
}

export default Contact