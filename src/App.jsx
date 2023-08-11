import './styles/app.css'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'
import { useRef, useState } from 'react'
import { FBX } from './components/FBX'
import { LoaderJSX } from './components/Loader'


function App () {
  const [hidden, setHidden] = useState(true)
  const [touchStart, setTouchStart] = useState({x:0, y:0})
  const [movement, setMovement] = useState({x:0, y:0})
  const [loading, setLoading] = useState(true)
  const [debuggin, setDebugging] = useState(false)
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

  function showName() {
    console.log('showing')
    setHidden(!hidden)
  }
  function closeLoader () {
    setLoading(false)
  }


  return(
    <>
      {
        loading && <LoaderJSX />
      }
      
      <div className='display' style={{display: hidden ? 'none' : 'inline'}}>Planet name: <span>Xolotl (Venus)</span></div>
      <div className="pointer" style={{display: 'none'}}>+</div>
      <Canvas
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
      >
        <Sky sunPosition={[1, 0, 0]} />
        <ambientLight intensity={0.2} />
        <directionalLight color={"white"} position={[60, 0, 50]} />
        <FPV cameraRef={cameraRef} movement={movement} />
        <Physics>
          {
            debuggin === false &&
            <>
            <FBX
              modelURL={'Meztli.fbx'}
              position={[-100, 190, -200]}
              rotation={[Math.PI / 1.3, 0, 0]}
              scale={0.1}
              closeLoader={() => {}}
            
            />
            <FBX
              modelURL={'Tonatiuh.fbx'}
              position={[100, 220, -200]}
              rotation={[Math.PI / 1.3, 0, 0]}
              scale={0.2}
              closeLoader={() => {}}
            />
            <FBX
              modelURL={'Venus.fbx'}
              position={[-100, 200, -50]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.2}
              closeLoader={() => {}}
              showName={showName}
            />
            <FBX
              modelURL={'Templo.fbx'}
              position={[0, -10, -500]}
              rotation={[0, 0, 0]}
              scale={0.05}
              closeLoader={closeLoader}
            />
            <Ground />
            </>
          }
        </Physics>
      </Canvas>
    </>
  )
}

export default App