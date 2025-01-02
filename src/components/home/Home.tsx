import React, { useEffect, useRef, useState } from "react"
import './home.css'
import { useNews } from "../../hooks/useNews"
import { Link } from "react-router-dom"
import LuisCard from "../ui/luis-card/LuisCard"
import News from "./featured/FeaturedCard"
import FeatureCard from "./featured/FeaturedCard"
import Featured from "./featured/FeaturedCard"
import { featureProps } from "./featured/notification_types"

const {news} = useNews()
const FEATURES = [
  {
    id: 'h-f-1',
    title: 'Planetario Azteca',
    description: 'Conoce los nombres que los aztecas dierion a los astros',
    image: {
      imgSrc: 'https://i.ibb.co/JcLPxrR/Feature-cover-Planetary-1.webp',
      imgAlt: 'Persona señalando un cielo estrellado, con íconos de los cuerpos celestes Meztli (Luna), Tonatiuh (Sol) y Xolotl (Venus) flotando en el espacio.'
    },
    button: 'Ir al planetario',
    path: '/app'
  },
  {
    id: 'h-f-2',
    title: 'Quiz de astronomía Azteca',
    description: 'Prueba tus conocimientos sobre la cultura mexicana',
    image: {imgSrc:'https://i.ibb.co/McdKvSF/quiz-portada-dalle.webp', imgAlt:''},
    button: 'Tomar quiz',
    path: '/quiz'
  },
  {
    id: 'h-f-3',
    title: 'Fondos de pantalla GRATIS',
    description: 'Descarga los fondos de pantalla diseñados en la cosmovisión prehispánica',
    image: {imgSrc:'https://i.ibb.co/kyzJqRH/h-f-3.webp', imgAlt:''},
    button: 'Descargar fondos',
    path: '/gallery'
  },
  {
    id: 'h-f-4',
    title: 'Descubre tu tonal',
    description: 'Tu fecha de nacimiento en el calendario Azteca',
    image: {imgSrc:'https://i.ibb.co/McdKvSF/quiz-portada-dalle.webp', imgAlt:''},
    button: 'Ver mi tonal',
    path: '/tonalli'
  }
]


const ShortPitch = () => {
  return (
    <div className="header_text">
      <p><strong>¿Qué es <span translate="no">nahua vision?</span></strong></p>
      <p>Una guía para explorar el universo a través de los ojos de los antiguos mexicanos</p>
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
    <div className="features_mini">
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

const Home: React.FC<PresentationProps> = ({}) => {
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
      <Featured {...content} />

      <FeaturesSelector data={FEATURES} selectedFeature={selectedFeature} manageSelectFeature={manageSelectFeature}/>
    </main>
  )
}

export default Home