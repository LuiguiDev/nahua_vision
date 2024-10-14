import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import MeteorShower from "./components/Blog/Articles/MeteorShower"
import EclipseSolar from "./components/Blog/Articles/EclipseSolar"
import Presentation from './components/Presentation'
import App from "./App"
import Blog from "./components/Blog/Blog"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import AztecAstronomyQuiz from "./components/AztecAstronomyQuiz"


function Router () {
  return(
    <div className="global">
      <Header />
        <Routes>
          <Route path="/quizz" element={<AztecAstronomyQuiz />} />
          <Route path="/app" element={<App />} />
          <Route path="/" element={<Presentation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/eclipse-solar" element={<EclipseSolar />}/>
          <Route path="/blog/lluvia-de-estrellas" element={<MeteorShower />} />
        </Routes>
      <Footer extended={false}/>
    </div>
  )
}

export default Router