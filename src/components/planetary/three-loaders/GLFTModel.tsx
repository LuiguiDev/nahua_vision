import React from "react"
import { useLoader } from "@react-three/fiber"
import { useCallback, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { astro } from "../../../types"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

interface Props {
  data: astro
  closeLoader: Function
}

export const GTFLModel: React.FC<Props> = ({data, closeLoader}) => {
  const {nameNa, position, rotation, scale, modelName} = data

  if(modelName.length === 0) return

  const model = useLoader(GLTFLoader, `../../3D_models/${modelName}.gltf`, (loader) => {
    const dracoLoader = new DRACOLoader()

    dracoLoader.setDecoderPath('/draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })

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