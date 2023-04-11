import { Container } from "@mui/material";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

function Hello() {
  return (
    <Container
      sx={{
        height: "100vh",
        widht: "100%",
        scrollSnapAlign: "center",

        
      }}
    >
      <Canvas camera={{fov:25, position:[5,5,5]}}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </Container>
  );
}

export default Hello;
