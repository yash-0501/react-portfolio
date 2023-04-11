import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense,  useState } from 'react'
import { SmDraco } from '../SmDraco'
import { Box, Typography } from '@mui/material'
import { isMobile } from 'react-device-detect'

function Project4() {
  return (
      <Box
      sx={{
        height: "100vh",
        width:"100%",
        position:'relative',
        '@media screen and (max-width: 768px)': {
          scrollSnapAlign: "none",
        },
      }}
    >
      <Box sx={{
        width:'100%',
        height:'100%',
        position:'absolute',
        left:'-100px',
        zIndex:'10',

        '@media screen and (max-width: 768px)': {
          width:'100%',
          height:'65%',
          margin:'15px',
          left:'0',
          top:'5%'
        },
      }}>
       
      <Canvas camera={{fov:25, position:[45,15,0]}}>
      <ambientLight intensity={1} />
      <OrbitControls  autoRotateSpeed={20} enableZoom={false} autoRotate/>
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
            <SmDraco />
        </Suspense>
      </Canvas>
      </Box>
      {/* <Box component="div" sx={{
        width:'200px',
        height:'70px',
        padding:'20px',
        backgroundColor:'white',
        color:'black',
        borderRadius:'5px',
        position:'absolute',
        left:'550px',
        top:'50px',

        '@media screen and (max-width: 768px)': {
          bottom:'0px',
          top:'0px',
          left:'0px',
          right:'0px',
          margin:'0 auto',
        },
      }}>
        <Typography variant="body1">
          Lorem Ipsum.....
        </Typography>
      </Box> */}
    </Box>
  )
}

export default Project4