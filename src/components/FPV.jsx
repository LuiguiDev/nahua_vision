import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Quaternion, Vector3 } from "three";

export function FPV ({ cameraRef, movement }) {
  const { camera, gl } = useThree()

  useThree(({camera}) => {
    const targetRotation = new Quaternion()
    const currentRotation = new Quaternion()
    const X = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), movement.y);
    const Y = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), movement.x);
  
    // Combina las rotaciones y aplica a la cámara
    targetRotation.multiplyQuaternions(Y, X);
    camera.quaternion.copy(targetRotation.clone());
  
    // Actualiza la rotación actual
    currentRotation.copy(camera.quaternion);
  })

  return (
    <PointerLockControls args={[camera, gl]} />
  )
}