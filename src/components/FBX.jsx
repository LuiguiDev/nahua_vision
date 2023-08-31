import React, { useCallback, useEffect, useRef, useState } from "react"
import { useEnvironment, useFBX } from "@react-three/drei";
import { DirectionalLight, Group, MeshStandardMaterial } from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const FBX = ({ data, closeLoader, setDisplayState, groupRef }) => {
  const { nameNa, position, rotation, scale, description } = data
  const model = useFBX(`./src/3D_models/${nameNa}.fbx`)
  const envMap = useEnvironment({files: './src/images/Tetl_HDRI.hdr'})
  const loader = new FBXLoader()
  
  
  function addEnvMap() {
    loader.load(`./src/3D_models/${nameNa}.fbx`, (m) => {
      const materials = m.children[0].material
      materials.envMap = envMap
    })
  }
  
  const manageCloseLoader = useCallback(closeLoader(), [])


  useEffect(() => {
    manageCloseLoader
  }, [])

  function manageModelClick() {
    setDisplayState({
      hidden: false,
      title: nameNa,
      description: description
    })
  }

  return (
    <Group ref={groupRef}>
    
      <mesh 
        scale={scale}
        position={position}
        rotation={rotation}
        onPointerDown={manageModelClick}
      >
        <primitive object={model} />
      </mesh>
    </Group>
  )
}

export default React.memo(FBX)