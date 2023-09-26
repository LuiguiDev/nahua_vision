import { Line, Sphere } from "@react-three/drei"
import React from "react"
import { Mesh } from "three"

interface porps {
  start: [number, number, number]
  end: [number, number, number]
}

export const ModelPointer: React.FC<porps> = ({start, end}) => {
  const pointer_color = 'black'
  return (
    <>
      <Line
      points={[start, end]}
      lineWidth={2}
      color={pointer_color}
      />
      <Sphere
        args={[1]}
        position={end}
      >
        <meshBasicMaterial attach='material' color={pointer_color} />
      </Sphere>
    </>
  )
}
