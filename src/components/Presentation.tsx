import React from "react"
import '../styles/presentation.css'
import { useNews } from "../hooks/useNews"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Link } from "react-router-dom"
import LuisCard from "./LuisCard"

const {news} = useNews()

interface newsProps {
  date: string
  headline: string,
  image: {
    imgSrc: string
    imgAlt: string
  }
  notification: notificationProps
}

type notificationProps = {
  date: string
  title: string
  body: string
}

function createNotification(notification:notificationProps) {
  const {date, title, body} = notification
  const scheduleDate = new Date(date)
  const currentDate = Date.now()
  const timeRemaning = scheduleDate.getTime() - currentDate

  if(Notification.permission === "granted") {
    if(timeRemaning > 0) {
      setTimeout(() => {
        new Notification(title, {
          body
        })
      }, timeRemaning);
    }else {
      console.log('This event is over')
    }
  }else {
    if('Notification' in window) {
      Notification.requestPermission()
        .then((permission) => {
          if(permission === "granted") {
            createNotification(notification)
          }
        })
    } else {
      console.error("Permission denied")
    }
  }
}


const News: React.FC<newsProps> = ({headline, image, notification}) => {
  const {imgSrc, imgAlt} = image
  return(
    <article className="news_container">
      <div className="news_header">
        <p>Próximos eventos astronómicos</p>
        <h3>{headline}</h3>
      </div>
      <img src={imgSrc} alt={imgAlt} />
      <div className="news_buttons">
        <button className="news_btn">
          <Link to={'./blog'}>Leer artículo</Link>
        </button>
        <button 
          className="news_btn"
          onClick={() => createNotification(notification)}
        >
          <i className="fa-solid fa-bell notification" style={{color: '#ffffff'}}></i>  Notificarme
        </button>
      </div>
    </article>
  )
}

interface PresentationProps {
  closeWaiting: (newState: boolean) => void 
  goToBlog: (newState: boolean) => void
}

const Presentation: React.FC<PresentationProps> = ({}) => {
  return (
    <div className="content">
      <div className="header_text">
        {/* <h2>WELCOME TO <br /> NAHUA VISION</h2> */}
        <p>¿Qué es nahua vision?</p>
        <p>Una guía para explorar el universo a través de los ojos de los antiguos mexicanos</p>
        <LuisCard />
      </div>

      <News
        headline={news[1].headline}
        image={news[1].image}
        date={news[1].date}
        notification={news[1].notification}
      />

      <button className="start_btn">
        <Link to={'./app'}>
          Go to the app
        </Link>
      </button>
    </div>
  )
}

export default Presentation