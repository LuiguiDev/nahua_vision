import React from "react"
import { useLoader } from "@react-three/fiber"
import { useCallback, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { astro } from "../types"

interface Props {
  data: astro
  closeLoader: Function
}

export const GTFLModel: React.FC<Props> = ({data, closeLoader}) => {
  const {nameNa, position, rotation, scale, modelName} = data
  const model = useLoader(GLTFLoader, `./src/3D_models/${modelName}.gltf`)

  const spotLightPositions = {
    Meztli: [40, 10, -5],
    Tonatiuh: [-5, 10, 5],
    Tlahuizcalpantecuhtli: [-10, -10, 0]
  }

  const manageCloseLoader = useCallback(closeLoader(), [])

  useEffect(() => {
    if(model){
      manageCloseLoader
    }
  }, [model])


  return (
    <>
      <mesh
        scale={scale}
        position={position}
        rotation={rotation}
      >
        <primitive object={model.scene} />
      </mesh>
    </>
  )
}