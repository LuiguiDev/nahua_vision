import './styles/app.css'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'
import { useCallback, useRef, useState } from 'react'
import FBX from './components/FBX'
import { LoaderJSX } from './components/Loader'
import { Display } from './components/Display'


function App () {
  const [displayHidden, setDisplayHidden] = useState(true)
  const [touchStart, setTouchStart] = useState({x:0, y:0})
  const [movement, setMovement] = useState({x:0, y:0})
  const [loading, setLoading] = useState(true)
  const [debuggin, setDebugging] = useState(true)
  const cameraRef = useRef(null)

  const balam =[
    {
      nameNa: 'Moon',
      nameEs: 'Luna',
      description: 'El glifo de Meztli, nuestra Luna. La U representa el corte frontal de una vasija llena de pulque. El circulo azul marino rodeado de puntos representa la noche estrellada.',
      position: [-100, 190, -200],
      rotation: [Math.PI / 1.3, 0, 0],
      scale: 0.1
    },
    {
      nameNa: 'Tonatiuh',
      nameEs: 'Sol',
      description: 'El circulo rojo del interior representa a Tonatiuh, el sol. El anillo azul representa el cielo. El anillo verde representa el jade, la belleza. El último anillo está dividido en 20 segmentos que representan los 20 días del mes nahua. Las 4 flechas solares representan los 4 rumbos del universo. Los círculos pequeños del exterior representan a los 4 soles, las 4 eras antes de Tonatiuh.      Todo sobre un fondo amarillo que representa la luz del sol',
      position: [100, 220, -200],
      rotation: [Math.PI / 1.3, 0, 0],
      scale: 0.2
    },
    {
      nameNa: 'Tlahuizcalpantecuhtli',
      nameEs: 'Venus',
      description: 'Missing info about this glyph',
      position: [-100, 200, -50],
      rotation: [Math.PI / 2, -Math.PI / 2, 0],
      scale: 0.2
    },
    {
      nameNa: 'Hueyteocalli',
      nameEs: 'Templo mayor',
      description: 'Basamento piramidal con dos templos en la cima, uno dedicado a Tlaloc y otro a Huitzilopochtli',
      position: [0, -10, -500],
      rotation: [0, 0, 0],
      scale: 0.05
    }
  ]
  
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

  const closeLoader = useCallback(
    () => {
      setLoading(false)
    }, [loading]
  )


  return(
    <>
      {loading && <LoaderJSX />}      
      <Display displayHidden={displayHidden} />
      {loading === false && <div className="pointer">+</div>}
      <Canvas
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
      >
        <Sky sunPosition={[1, 0, 0]} />
        <ambientLight intensity={0.2} />
        <directionalLight color={"white"} position={[60, -10, 50]} />
        <FPV cameraRef={cameraRef} movement={movement} />
        <Physics>
        {
          debuggin &&
          <>
            {balam.map(element => (
              <FBX
                modelURL={`${element.nameNa}.fbx`}
                position={element.position}
                rotation={element.rotation}
                scale={element.scale}
                closeLoader={closeLoader}
                key={crypto.randomUUID()}
              />
            ))}
            <Ground />
          </>
        }
        </Physics>
      </Canvas>
    </>
  )
}

export default App