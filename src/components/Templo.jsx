import { useState } from "react"
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export const Templo = ({ showName }) => {
  const [hovered, setHovered] = useState(false)
  const model = useLoader(FBXLoader, './src/3D_models/Templo.fbx')

  function setHover (newState) {
    setHovered(newState)
  }

  return (
    <mesh
      scale={0.05}
      position={[0, -10, -500]}
      rotation={[0, 0, 0]}
      onPointerDown={showName}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive object={model}/>
    </mesh>
  )
}