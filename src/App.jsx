import './styles/app.css'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'
import { Model } from './components/Model'
import { Venus } from './components/Venus'
import { useState } from 'react'

function App () {
  const [hidden, setHidden] = useState(true)
  function showName() {
    console.log('showed')
    setHidden(!hidden)
  }

  return(
    <>
      <div className='display' style={{display: hidden ? 'none' : 'inline'}}>Planet name: <span>Xolotl (Venus)</span></div>
      <Canvas>
        <Sky sunPosition={[1, 0, 0]} />
        <ambientLight intensity={0.5} />
        <directionalLight color={"white"} position={[10, 10, 0]} />
        <FPV />
        <Physics>
          <Venus  showName={showName} />
          <Model url={"./src/3D_models/TemploMayor.stl"} />
          <Ground />
        </Physics>
      </Canvas>
    </>
  )
}

export default App