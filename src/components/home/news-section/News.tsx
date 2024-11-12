import React from "react";
// types
import { newsProps, notificationProps } from "./notification_types";
import { Link } from "react-router-dom";

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
        {
          notification !== null && (
            <button 
              className="news_btn"
              onClick={() => createNotification(notification)}
            >
              <i className="fa-solid fa-bell notification" style={{color: '#ffffff'}}></i>  Notificarme
            </button>
          )
        }
      </div>
    </article>
  )
}

export default News