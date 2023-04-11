/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 reactlogoDraco.gltf --transform
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import React, { useRef } from 'react'
import { GradientTexture, useGLTF } from '@react-three/drei'

export function ReactlogoDraco(props) {
  const { nodes, materials } = useGLTF('reactlogoDraco-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.94, 18.1]} rotation={[0, 0, -Math.PI / 2]} scale={[39.17, 39.17, 52.73]} >
        {/* <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
         />
    </meshBasicMaterial> */}
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('reactlogoDraco-transformed.glb')
