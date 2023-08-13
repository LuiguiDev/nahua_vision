import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export function FPV ({ cameraRef, movement }) {
  const { camera, gl } = useThree()

  useThree(({camera}) => {
    const x = movement.x
    const y = movement.y

    camera.rotation.set(y, x, 0)
  })

  return (
    <PointerLockControls args={[camera, gl]} />
  )
}