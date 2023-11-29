import React from "react";

const EclipseSolar = () => {
  return(
    <article className="blog_article">
      <header className="blog_title">
        <img src="https://i.ibb.co/W2qKTD4/meztli-cualo-gpt.webp" alt="" className="blog_header_image" />
        <h2 className="title">
          Explorando el Misterio Cósmico: Eclipses Solares y su Magia Inigualable
        </h2>
        <p className="caption">
          Los eclipses solares, esos momentos mágicos en los que la Luna cubre momentáneamente al Sol, son eventos celestiales que han capturado la imaginación de la humanidad a lo largo de la historia. ¿Qué es lo que hace que estos fenómenos sean tan fascinantes y cómo han sido interpretados a lo largo del tiempo en México?
        </p>
      </header>

      <main className="article_content">
        <section>
          <p><span>¿Qué es un eclipse solar</span></p>
          <p>
            Un eclipse solar ocurre cuando la Luna se interpone entre la Tierra y el Sol, bloqueando total o parcialmente la luz solar. Este baile celestial crea un espectáculo impresionante, sumiendo temporalmente en la penumbra a aquellos que se encuentran en la trayectoria del eclipse.
          </p>
          <div className="image_container">
            <img src="./src/images/news/solar_eclipse.png" alt="Ilustration describing what happend during a solar eclipse, from right to the left, there is the sun, the moon and the earth, and we can see the moon's shadow projecting to the earth" />
            <p>
              <small>Ilustración de un eclipse solar</small>
            </p>
          </div>
        </section>

        <section>
        <p>
          <span>Eclipses en la Cosmovisión Prehispánica</span>
        </p>

        Para las antiguas civilizaciones mesoamericanas, los eclipses solares eran interpretados como eventos cósmicos que conectaban el mundo de los dioses con el de los mortales. Se creía que durante un eclipse, los dioses realizaban un ritual para renovar el Sol, manteniendo así el equilibrio en el universo.
        </section>
      </main>

    </article>
  )
}

export default EclipseSolar