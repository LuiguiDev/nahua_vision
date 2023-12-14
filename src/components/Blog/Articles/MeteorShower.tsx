import React from "react"
import '../../../styles/blog.css'
import { Link } from "react-router-dom"

interface BlogProps {
  blog: boolean
  goToBlog: (newState: boolean) => void
}

const MeteorShower: React.FC<BlogProps> = () => {
  return (
    <article className="blog_article">  
      <div className="blog_content">
        <div className="blog_title">
          <img src="https://i.ibb.co/5L7CMYG/diciembre-lluvia-de-estrellas.webp" className="blog_header_image" />
          <h2 className="title">Presenciar las Gemínidas: Un Espectáculo Celestial Inolvidable</h2>
          <p className="caption">Las Gemínidas, la lluvia de meteoros más impresionante del año, llegarán con su magnífico despliegue los días 13 y 14 de diciembre de 2023. Este fenómeno astronómico, que ocurre anualmente, ofrece a los observadores del cielo un espectáculo de estrellas fugaces con una intensidad notable.</p>
        </div>
        
        <main className="article_main_content">
          <section>
            <p><span>¿Qué son las Gemínidas?</span></p>
            <p>Las Gemínidas, a diferencia de la mayoría de las lluvias de meteoros que son causadas por restos de cometas, provienen del asteroide 3200 Faetón. Estas brillantes y lentas estrellas fugaces parecen emerger de la constelación de Géminis, de ahí su nombre.</p>
          </section>

          <section>
            <p>
              <span>La cosmovisión prehispánica de México y los eventos estelares</span>
            </p>
            <p>
              En la antigua cultura mexicana, los fenómenos astronómicos como las lluvias de estrellas eran interpretados de manera sagrada y simbólica. Para las civilizaciones prehispánicas, estos eventos celestiales estaban estrechamente vinculados con sus dioses y su visión del mundo.
            </p>

            <blockquote>
              <p>
                "Los cometas que tenían cola eran llamados citlalmina, que significa 'estrella que lanza una flecha'. Se creía que cada vez que esa flecha golpeaba a algún ser vivo, ya fuera liebre, conejo u otro animal, en el lugar del impacto nacía luego un gusano, lo que hacía que el animal ya no fuera apto para el consumo. Por esta razón, estas personas procuraban resguardarse durante la noche para evitar ser alcanzadas por la descarga del cometa."
              </p>
              <footer className="quote_footer">- Fray Bernardino de Sahagún</footer>
            </blockquote>

            <div className="image_container">
              <img src="https://i.ibb.co/yfLCpwP/Citlalin-tlamina-labeled.webp" width={'100%'}/>
              <p className="image_caption">
                <small>Representación moderna de Citlalmina o Citlalin Tlamina "estrella que lanza una flecha"</small>
              </p>
            </div>
          </section>

          <section>
            <p>
              <span>Apreciando las Gemínidas en la actualidad</span>
            </p>
            <p>
              Las Gemínidas nos invitan a reflexionar sobre la relación entre la humanidad y el universo, permitiéndonos disfrutar de un espectáculo que trasciende fronteras, culturas y épocas. Por lo tanto, no pierdas la oportunidad de contemplar esta lluvia de estrellas y conectar con el legado ancestral que sigue vivo en el firmamento.
            </p>
          </section>
        </main>
        <button style={{margin: '20px', padding: '5px', borderRadius: '5px'}}>
          <Link to={'/'}>Regresar al menú principal</Link>
        </button>
      </div>
    </article>
  )
}

export default MeteorShower