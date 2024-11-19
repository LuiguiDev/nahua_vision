import React, { Suspense } from "react"
import './planetary.css'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { FPV } from './cameras/FPV'
import { useCallback, useRef, useState } from 'react'
import { Loader } from '../ui/loader/Loader'
import { GTFLModel } from './three-loaders/GLFTModel'
import { Explorer } from './explorer/Explorer'
import { useAstros } from '../../hooks/useAstros'
import { AppHeader } from "../layout/app header/AppHeader"

function App () {
  const [touchStart, setTouchStart] = useState({x:0, y:0})
  const [movement, setMovement] = useState({x:0, y:0})
  const [loading, setLoading] = useState(true)
  const [debuggin, setDebugging] = useState(true)
  const cameraRef = useRef(null)
  const [lookAt, setLookAt] = useState([0, 0, 0])
  const { data } = useAstros()
  
  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStart(
      {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }
    )
  }
  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const newX = e.touches[0].clientX
    const newY = e.touches[0].clientY

    const deltaX = newX - touchStart.x
    const deltaY = newY - touchStart.y

    const newState = structuredClone(movement)
    newState.x += deltaX * 0.01
    newState.y += deltaY * 0.01

    setMovement(newState)
    setTouchStart({x: newX, y: newY})
  }

  function manageSetLookAt(position: [number, number, number]) {
    setLookAt(position)
  }


  const closeLoader = useCallback(
    () => {
      setLoading(false)
    }, [loading]
  )
  
  return(
    <div className="app">
      <AppHeader />
      <Suspense fallback={<Loader/>}>
          <Explorer manageSetLookAt={manageSetLookAt} />
        <Canvas
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
        >
          <FPV cameraRef={cameraRef} movement={movement} lookAt={lookAt} />
          <Environment 
            files={'.././img/tetl 2k.hdr'}
            background={true}
            blur={0.02}
          />
          <Physics>
            {
              debuggin &&
              <>
                {data.map(element => (
                  <GTFLModel
                    data={element}
                    closeLoader={closeLoader}
                    key={crypto.randomUUID()}
                  />
                ))}
              </>
            }
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App