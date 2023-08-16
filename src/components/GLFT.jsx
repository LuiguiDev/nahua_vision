import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export const GTFL = ({data}) => {
  const {nameNa, position, rotation, scale} = data
  const model = useLoader(GLTFLoader, `./src/3D_models/${nameNa}.gltf`)

  return (
    <mesh
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <primitive object={model.scene} />
    </mesh>
  )
}