import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export function FPV ({ cameraRef, movement }) {
  const { camera, gl } = useThree()

  useThree(({camera}) => {
    camera.rotation.set(-(movement.y), -(movement.x), 0)
  })

  return (
    <PointerLockControls args={[camera, gl]} />
  )
}