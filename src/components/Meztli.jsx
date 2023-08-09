import { useState } from "react"
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export const Meztli = ({ showName }) => {
  const [hovered, setHovered] = useState(false)
  const model = useLoader(FBXLoader, './src/3D_models/meztli.fbx')

  function setHover (newState) {
    setHovered(newState)
  }

  return (
    <mesh
      scale={0.3}
      position={[-500, 300, -500]}
      rotation={[Math.PI / 2, 0, 0]}
      onPointerDown={showName}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive object={model}/>
    </mesh>
  )
}