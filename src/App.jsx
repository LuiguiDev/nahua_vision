import './styles/app.css'
import { Canvas } from '@react-three/fiber'
import { Box, Environment, Gltf, Loader, Sky, useEnvironment } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'
import { useCallback, useEffect, useRef, useState } from 'react'
import {  Loading } from './components/Loading'
import { Display } from './components/Display'
import { HemisphereLight, Scene } from 'three'
import { GTFL } from './components/GLFT'
import { Explorer } from './components/Explorer'
import { useAstros } from './hooks/useAstros'


const ExplorerHanlder = ({manageCloseExplorer, explorer}) => {
  const className = explorer ? 'top' : 'bottom'
  const text = explorer ? 'Close explorer' : 'Show explorer'

  return (
    <button
      onClick={manageCloseExplorer}
      className={`explorer_hanlder ${className}`}
    >
      {text}
    </button>
  )
}


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
  const [lookAt, setLookAt] = useState([0, 0, 0])
  const [explorer, setExplorer] = useState(true)
  const { data } = useAstros()
  
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
  function showDisplay(position) {
    setHidden(!hidden)
  }
  function manageSetLookAt(position) {
    setLookAt(position)
  }
  function manageCloseExplorer() {
    setExplorer(!explorer)
  }  

  const closeLoader = useCallback(
    () => {
      setLoading(false)
    }, [loading]
  )

  return(
    <>
      {loading && <Loading />}   
      <Display options={displayState} setDisplayState={setDisplayState} />
      {loading === false && 
        <> 
        <ExplorerHanlder explorer={explorer} manageCloseExplorer={manageCloseExplorer} />
        {
          explorer &&
          <Explorer
            manageSetLookAt={manageSetLookAt}
            closeExplorer={manageCloseExplorer}
          />
          
        }
          <div className="pointer">+</div>
        </>
      }
      <Canvas
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
      >
        <FPV cameraRef={cameraRef} movement={movement} lookAt={lookAt} />
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