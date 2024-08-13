import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model({...props}) {
  const { nodes, materials } = useGLTF('/Moon_1_3474.gltf')
 
  return (
    <group {...props} dispose={null}>
    <mesh
      geometry={nodes.Cube008.geometry}
      material={materials['Default OBJ.005']}
    />
  </group>
  )
}

useGLTF.preload('/Moon_1_3474.gltf')

export default Model