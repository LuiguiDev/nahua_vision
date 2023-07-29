import { useState } from "react"
import { venusTexture } from "../images/textures"

export const Venus = ({ showName }) => {
  const [hovered, setHovered] = useState(false)

  function setHover (newState) {
    setHovered(newState)
  }

  return (
    <mesh
      position={[0, 10, 0]}
      rotation={[1, 0, 0]}
      onClick={showName}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <circleGeometry args={[1, 50]} attach={"geometry"} />
      <meshBasicMaterial map={venusTexture}  />
    </mesh>
  )
}