import { useState } from "react"
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export const Venus = ({ showName }) => {
  const [hovered, setHovered] = useState(false)
  const model = useLoader(FBXLoader, './src/3D_models/GlifodeVenus.fbx')

  function setHover (newState) {
    setHovered(newState)
  }

  return (
    <mesh
      position={[500, 800, -500]}
      rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
      onPointerDown={showName}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive object={model}/>
    </mesh>
  )
}