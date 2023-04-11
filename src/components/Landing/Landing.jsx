import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Header/Navbar'
import "./Landing.css"
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Landing = () => {
  return (
    <Box
    sx={{
        height: '100vh',
        scrollSnapAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',

        '@media screen and (max-width: 768px)': {
          height: '200vh',
          scrollSnapAlign:'none',
        },

      }}>
        <Navbar/>
        <Container sx={{
          display:'flex',
          justifyContent:'space-between',
          scrollSnapAlign:'center',
          height:'100%',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'column',
            alignItems:'center',
            justifyContent:'center',
            gap:'10px',
            scrollSnapAlign:'none',
          },
  
        }}>

          <Box sx={{
            flex:'2',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            gap:'20px',

            '@media screen and (max-width: 768px)': {
              flex: '1',
              alignItems:'center',
            },
    
          }}>

            <Typography variant='h1' sx={{
              fontSize:'74px'
            }}>
              Think. Make. Solve.
            </Typography>
            <Box sx={{
              display:'flex',
              alignItem:'center',
              gap:'20px',
            }}>
              
              <Typography variant='h5'
              sx={{
                color:'#da4ea2',
                verticalAlign:'middle'
              }}>
                <Box component="img"
              src="./img/line.png"
              sx={{
                height:'5px',
                verticalAlign:'middle'

              }}
              >
              </Box>
                What we Do?
              </Typography>
            </Box>
            <Typography variant='body1' sx={{
              fontSize:'24px',
              color:'lightgrey',
            }}>
              We enjoy creating delightful, human-centered digital experiences.
            </Typography>
            <Button variant='contained' disableElevation disableRipple sx={{
                backgroundColor:'#da4ea2',
                fontWeight:'500',
                width:'100px',
                padding:'10px',
                color:'white',
                "&:hover": {backgroundColor: "#da4ea2",},
                borderRadius:'5px'
            }}>
              Learn More
            </Button>
          </Box>
          <Box sx={{
            flex:'3',
            position:'relative',
            '@media screen and (max-width: 768px)': {
              flex: '1',
              alignItems:'center',
              width:'100%'
            },
          }}>
            <Canvas>
              <OrbitControls autoRotate enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1,100,200]} scale={3} >
                <MeshDistortMaterial 
                  color="#3d1c56" attach="material"
                  distort={0.5} speed={2}
                />
              </Sphere>
            </Canvas>
            <Box component='img'
            src="./img/moon.png"
            sx={{
              widht:'800px',
              height:'600px',
              objectFit:'contain',
              position:'absolute',
              top:'0',
              bottom:'0',
              left:'0',
              right:'0',
              margin:'auto',
              animation: 'animate 2s infinite ease alternate',
            
              '@media screen and (max-width: 768px)': {
                width:'300px',
                height:'300px',
              },
            }}
            ></Box>
          </Box>
        </Container>
    </Box>
  )
}

export default Landing