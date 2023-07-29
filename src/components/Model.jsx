import {useLoader} from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

export const Model = ({url}) => {
  const geom = useLoader(STLLoader, url)
  const meshRef = useRef()
  return (
    <mesh 
      ref={meshRef}
      scale={0.5}
      position={[0, -0.5, -50]}
      rotation={[- Math.PI / 2, 0, 0]}
    >
      <primitive object={geom} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  )
}