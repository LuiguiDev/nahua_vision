import React, { useEffect, useRef, useState } from "react"
import './home.css'
import LuisCard from "../ui/luis-card/LuisCard"
import Featured from "./featured/FeaturedCard"
import { featureProps } from "./featured/featureProps"

const FEATURES = [
  {
    id: 'h-f-1',
    title: 'Planetario Azteca',
    description: 'Conoce los nombres que los aztecas dierion a los astros',
    image: {
      imgSrc: 'https://i.ibb.co/dfQnXfb/Feature-cover-Planetary-4-5.webp',
      imgAlt: 'Persona señalando un cielo estrellado, con íconos de los cuerpos celestes Meztli (Luna), Tonatiuh (Sol) y Xolotl (Venus) flotando en el espacio.'
    },
    button: 'Ir al planetario',
    path: '/app'
  },
  {
    id: 'h-f-2',
    title: 'Quiz de astronomía Azteca',
    description: 'Prueba tus conocimientos sobre la cultura mexicana',
    image: {
      imgSrc:'https://i.ibb.co/mvxv1zq/quiz.webp',
      imgAlt:''
    },
    button: 'Tomar quiz',
    path: '/quiz'
  },
  {
    id: 'h-f-3',
    title: 'Fondos de pantalla GRATIS',
    description: 'Descarga los fondos de pantalla diseñados en la cosmovisión prehispánica',
    image: {
      imgSrc:'https://i.ibb.co/kyzJqRH/h-f-3.webp',
      imgAlt:''
    },
    button: 'Descargar fondos',
    path: '/gallery'
  },
  {
    id: 'h-f-4',
    title: 'Descubre tu tonal',
    description: 'Tu fecha de nacimiento en el calendario Azteca',
    image: {
      imgSrc:'https://i.ibb.co/QH9HpzB/calendar-feature-cover.webp',
      imgAlt:''
    },
    button: 'Ver mi tonal',
    path: '/tonalli'
  },
  {
    id: 'h-f-5',
    title: 'Calendario lunar 2025',
    description: 'Diseñé una imagen para cada luna del año inspirandome en la cosmovisión prehispánica',
    image: {
      imgSrc:'https://i.ibb.co/LPckV0X/calendario-lunar-squarecomposition.webp',
      imgAlt:'La imagen está dividida en 4 secciones cuadrangulares, en cada una hay una imagen de la luna editada para relacionarla a un concepto de la cosmovisión mexicana, puedes aprender más al dar click al botón Ver calendario'
    },
    button: 'Ver calendario',
    path: '/tonalli'
  }
]

const ShortPitch = () => {
  return (
    <div className="w-full md:grid grid-cols-2">
      <div className="w-full mb-4">
        <p className="text-white"><strong>¿Qué es <span translate="no">nahua vision?</span></strong></p>
        <p className="text-white">Una guía para explorar el universo a través de los ojos de los antiguos mexicanos</p>
      </div>
      <LuisCard />
    </div>
  )
}

interface FeaturesSelectorProps {
  data: featureProps[]
  selectedFeature: string
  manageSelectFeature: (userSelection: string) => void
}

const FeaturesSelector: React.FC<FeaturesSelectorProps> = ({ data, selectedFeature, manageSelectFeature }) => {
  return(
    <div className="features_mini lg:flex ">
      <div className="images">
        {
          data.map(f => (
            <img
              key={`selector-${f.id}`}
              src={f.image.imgSrc}
              className={selectedFeature === f.id ? 'feature_selected' : ''}
              onClick={() => manageSelectFeature(f.id)}
            />
          ))
        }
      </div>
    </div>
  )
}


// to do: move types to an independent file
interface PresentationProps {
  closeWaiting: (newState: boolean) => void 
  goToBlog: (newState: boolean) => void
}

const Home = () => {
  const [index, setIndex] = useState(0)
  const [content, setContent] = useState<featureProps>(FEATURES[index])
  const [selectedFeature, setSelectedFeature] = useState(FEATURES[index].id)

  const intervalRef = useRef(0)

  function manageSetIndex () {
    setIndex((prevState) => {
      const maxIndex = FEATURES.length - 1
      const newIndex = prevState === maxIndex ? 0 : prevState + 1

      return newIndex
    })
  }

  function manageSelectFeature(userSelection: string) {
    const newContent = FEATURES.filter(e => e.id === userSelection)[0]

    clearInterval(intervalRef.current)
    setSelectedFeature(userSelection)   
    setContent(newContent)    
  }

  function manualSetContent(id:string) {
    const newContent = FEATURES.filter(e => e.id === id)
    console.log(newContent)
  }

  useEffect(() => {
    setSelectedFeature(FEATURES[index].id)
    setContent(FEATURES[index])
  }, [index])

  useEffect(() => {
    intervalRef.current = setInterval(manageSetIndex, 5000);
    return () => {
      clearInterval(intervalRef.current) // Limpiamos el intervalo al desmontar el componente
    }
  }, [])

  return (
    <main className="page_container">
      <ShortPitch />
      <div className="flex flex-col  lg:grid grid-cols-[1fr_200px] gap-5" >
        <Featured {...content} />
        <FeaturesSelector data={FEATURES} selectedFeature={selectedFeature} manageSelectFeature={manageSelectFeature}/>
      </div>
    </main>
  )
}

export default Home