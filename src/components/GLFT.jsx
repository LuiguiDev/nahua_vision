import { useLoader } from "@react-three/fiber"
import { useCallback, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export const GTFL = ({data, closeLoader}) => {
  const {nameNa, position, rotation, scale} = data
  const model = useLoader(GLTFLoader, `./src/3D_models/${nameNa}.gltf`)

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