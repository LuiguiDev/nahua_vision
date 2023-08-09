import './styles/app.css'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'
import { Model } from './components/Model'
import { Venus } from './components/Venus'
import { useRef, useState } from 'react'
import { Meztli } from './components/Meztli'
import { Tonatiuh } from './components/Tonatiuh'
import { Templo } from './components/Templo'


function App () {
  const [hidden, setHidden] = useState(true)
  const [touchStart, setTouchStart] = useState({x:0, y:0})
  const [movement, setMovement] = useState({x:0, y:0})
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


  return(
    <>
      <div className='display' style={{display: hidden ? 'none' : 'inline'}}>Planet name: <span>Xolotl (Venus)</span></div>
      <div className="pointer">+</div>
      <Canvas
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
      >
        <Sky sunPosition={[1, 0, 0]} />
        <ambientLight intensity={0.5} />
        <directionalLight color={"white"} position={[10, 10, 0]} />
        <FPV cameraRef={cameraRef} movement={movement} />
        <Physics>
          <Venus showName={showName} />
          <Meztli />
          <Tonatiuh />
          <Templo />
          <Ground />
        </Physics>
      </Canvas>
    </>
  )
}

export default App