import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Quaternion, Vector3 } from "three";

export function FPV ({ cameraRef, movement, lookAt }) {
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

  useEffect(
    () => {
      const vector = new Vector3(lookAt[0], lookAt[1], lookAt[2])
      camera.lookAt(vector)
    },
    [lookAt]
  )

  return (
    <PointerLockControls args={[camera, gl]} />
  )
}