import React from 'react'
import { Canvas as CanvasDiv } from '@react-three/fiber'
import * as THREE from "three";
import Box from './Box';
import {OrbitControls}from '@react-three/drei';

function Canvas() {
  return (
    <CanvasDiv className="canvas"
    dpr={window.devicePixelRatio}
    camera={{ position: new THREE.Vector3(8, 5, 40) }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} />
      <gridHelper
        args={[100, 20, "#4D089A", "#4D089A"]}
        position={[0, 0, -10]}
        rotation={[0, 0, 0]}
      />
      <OrbitControls />
      <Box />
    </CanvasDiv>
  )
}

export default Canvas
