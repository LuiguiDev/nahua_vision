import './styles/app.css'
import { Canvas } from '@react-three/fiber'
import { Box, Environment, Gltf, Loader, Sky, useEnvironment } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'
import { useCallback, useRef, useState } from 'react'
import FBX from './components/FBX'
import {  Loading } from './components/Loading'
import { Display } from './components/Display'
import { data } from './data'
import { HemisphereLight, Scene } from 'three'
import { GTFL } from './components/GLFT'


function App () {
  const [displayState, setDisplayState] = useState(
    {
      hidden: true,
      title: '',
      description: '',
    }
  )
  const [touchStart, setTouchStart] = useState({x:0, y:0})
  const [movement, setMovement] = useState({x:0, y:0})
  const [loading, setLoading] = useState(true)
  const [debuggin, setDebugging] = useState(true)
  const cameraRef = useRef(null)

  
  function handleTouchStart(e) {
    setTouchStart(
      {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }
    )
  }
  function handleTouchMove(e) {
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
  function showDisplay() {
    setHidden(!hidden)
  }

  const closeLoader = useCallback(
    () => {
      setLoading(false)
    }, [loading]
  )

  const envMap = useEnvironment({files: './src/images/Tetl_HDRI.hdr'})


  return(
    <>
      {loading && <Loading />}   
      <Display options={displayState} setDisplayState={setDisplayState} />
      {loading === false && <div className="pointer">+</div>}
      <Canvas
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
      >
        <FPV cameraRef={cameraRef} movement={movement} />
        <Environment files={'./src/images/Tetl_HDRI.hdr'} background={true}  />
        <Physics>
          {
            debuggin &&
            <>
              {data.map(element => (
                <GTFL
                  data={element}
                  closeLoader={closeLoader}
                  key={crypto.randomUUID()}
                />
              ))}
            </>
          }
        </Physics>
      </Canvas>
    </>
  )
}

export default App