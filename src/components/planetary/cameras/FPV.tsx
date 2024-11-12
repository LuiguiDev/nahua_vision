// FPV goes for First Person View

import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Quaternion, Vector3 } from "three";
import React from "react";

export function FPV ({ movement, lookAt }) {
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
      const x = lookAt[0]
      const y = lookAt[1]
      const z = lookAt[2]
      camera.lookAt(x, y, z)
    },
    [lookAt]
  )

  return (
    <PointerLockControls args={[camera, gl]} />
  )
}