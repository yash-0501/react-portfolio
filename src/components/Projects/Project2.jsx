import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { ReactlogoDraco } from '../ReactlogoDraco'
import { Box, Typography } from '@mui/material'

function Project2() {
  return (
      <Box
      sx={{
        height: "100vh",
        width:"100%",
        position:'relative',
      }}
    >
      <Box sx={{
        width:'100%',
        height:'100%',

        '@media screen and (max-width: 768px)': {
          width:'100%',
          height:'45%',
          position:"absolute",
          top:'15%',
        },
      }}>
        <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls autoRotate autoRotateSpeed={10} enableZoom={false} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
            <ReactlogoDraco />
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

export default Project2