import React from "react"
import '../styles/presentation.css'
import { useNews } from "../hooks/useNews"

const {news} = useNews()

interface newsProps {
  date: string
  headline: string,
  image: {
    imgSrc: string
    imgAlt: string
  }
}

const News: React.FC<newsProps> = ({headline, image, date}) => {
  const {imgSrc, imgAlt} = image
  return(
    <div className="news_container">
      <p>{date}</p>
      <h3>{headline}</h3>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  )
}

const Presentation = () => {
  return (
    <div className="presentation_container">

      <div className="header_text">
        <h2>WELCOME TO <br /> NAHUA VISION</h2>
      </div>
      <div className="presentation_news">
        <News 
          headline={news[0].headline}
          image={news[0].image}
          date={news[0].date}
        />
      </div>
      <button>Start</button>

    </div>
  )
}

export default Presentation