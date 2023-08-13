import React, { useCallback, useEffect, useRef, useState } from "react"
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const FBX = ({ modelURL, position, rotation, scale, showName, closeLoader }) => {
  const model = useLoader(FBXLoader, `./src/3D_models/${modelURL}`)
  const modelRef = useRef().current = null
  const loader = new FBXLoader()

  const manageCloseLoader = useCallback(closeLoader(), [])

  useEffect(() => {
    manageCloseLoader
  }, [])


  return (
    <mesh
      ref={modelRef}
      scale={scale}
      position={position}
      rotation={rotation}
      onPointerDown={showName}
    >
      <primitive object={model}/>
    </mesh>
  )
}

export default React.memo(FBX)