import React from "react"
import './home.css'
import { useNews } from "../../hooks/useNews"
import { Link } from "react-router-dom"
import LuisCard from "../ui/luis-card/LuisCard"
import News from "./news-section/News"

const {news} = useNews()

// to do: move types to an independent file
interface PresentationProps {
  closeWaiting: (newState: boolean) => void 
  goToBlog: (newState: boolean) => void
}

const Home: React.FC<PresentationProps> = ({}) => {
  return (
    <main className="page_container">
      <div className="header_text">
        <p><span>¿Qué es nahua vision?</span></p>
        <p>Una guía para explorar el universo a través de los ojos de los antiguos mexicanos</p>
        <LuisCard />
      </div>

      <News
        headline={news[2].headline}
        image={news[2].image}
        date={news[2].date}
        notification={news[2].notification}
      />

      <button className="start_btn">
        <Link to={'./app'}>
          Ir al planetario
        </Link>
      </button>
    </main>
  )
}

export default Home