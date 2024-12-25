import React from "react"
import './home.css'
import { useNews } from "../../hooks/useNews"
import { Link } from "react-router-dom"
import LuisCard from "../ui/luis-card/LuisCard"
import News from "./news-section/News"
import FeatureCard from "./news-section/News"

const {news} = useNews()

const FEATURES = [
  {
    title: 'Planetario Azteca',
    description: 'Conoce los nombres que los aztecas dierion a los astros',
    image: {
      imgSrc: 'https://i.ibb.co/41YMZQt/Feature-cover-Planetary.webp',
      imgAlt: ''
    },
    button: 'Ir al planetario'
  },
  {
    title: 'Quiz de astronomía Azteca',
    description: 'Prueba tus conocimientos sobre la cultura mexicana',
    image: {imgSrc:'https://i.ibb.co/McdKvSF/quiz-portada-dalle.webp', imgAlt:''},
    button: 'Tomar quiz'
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

const Featured = ({ data }) => {
  return (
    <div className="featured_container">
      <div className="fature_slider">
        {
          data.map(feature => (
            <FeatureCard
              headline={feature.title}
              description={feature.description}
              image={feature.image}
              button={feature.button}
            />  
          ))
        }
      </div>

      <div className="features_mini">
        <div 
          className="images"
          style={{display: 'grid', gridTemplateColumns: '50px 50px', gap:'15px'}}
        >
          <img src={FEATURES[0].image.imgSrc} style={{width: '100%', aspectRatio: '1/1', objectFit:'cover'}}/>
          <img src={FEATURES[1].image.imgSrc} style={{width: '100%'}}/>
        </div>
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
  return (
    <main className="page_container">
      <ShortPitch />
      <Featured data={FEATURES} />
    </main>
  )
}

export default Home