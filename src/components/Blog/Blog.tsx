import React from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import '../../styles/blog.css'


interface BlogProps {
  article_path: string
}

const articles = [
  {
    title: 'Presenciar las Gemínidas: Un Espectáculo Celestial Inolvidable',
    caption: 'Las Gemínidas, la lluvia de meteoros más impresionante del año, llegarán con su magnífico despliegue los días 13 y 14 de diciembre de 2023. Este fenómeno astronómico, que ocurre anualmente, ofrece a los observadores del cielo un espectáculo de estrellas fugaces con una intensidad notable.',
    image: 'https://i.ibb.co/5L7CMYG/diciembre-lluvia-de-estrellas.webp',
    path: 'lluvia-de-estrellas'
  },
  {
    title: 'Explorando el Misterio Cósmico: Eclipses Solares y su Magia Inigualable',
    caption: 'Los eclipses solares, esos momentos mágicos en los que la Luna cubre momentáneamente al Sol, son eventos celestiales que han capturado la imaginación de la humanidad a lo largo de la historia. ¿Qué es lo que hace que estos fenómenos sean tan fascinantes y cómo han sido interpretados a lo largo del tiempo en México?',
    image: 'https://i.ibb.co/W2qKTD4/meztli-cualo-gpt.webp',
    path: 'eclipse-solar'
  }
]

const Blog: React.FC<BlogProps> = ({article_path}) => {
  return(
    <>
      <main style={{display: "flex"}}>
        

        <ul className="articles_list">
          {
          articles.map((a, i) => (
              <Link to={`${a.path}`} className="blog_card" key={i}>
                <div className="img_container">
                  <img src={a.image} className="card_img" />
                </div>
                <div className="card_text">
                  <h5 className="card_text_headline">{a.title}</h5>
                  <p><small className="ct_caption">{a.caption}</small></p>
                </div>
              </Link>
          ))
          }
        </ul>
      </main>
    </>
  )
}

export default Blog