import { useEffect, useRef, useState } from "react"
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export const FBX = ({ modelURL, position, rotation, scale, showName, closeLoader }) => {
  const [hovered, setHovered] = useState(false)
  const model = useLoader(FBXLoader, `./src/3D_models/${modelURL}`)
  const modelRef = useRef().current = null

  function setHover (newState) {
    setHovered(newState)
  }
  useEffect(() => {
    closeLoader()
  }, [modelRef])

  return (
    <mesh
      ref={modelRef}
      scale={scale}
      position={position}
      rotation={rotation}
      onPointerDown={showName}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive object={model}/>
    </mesh>
  )
}