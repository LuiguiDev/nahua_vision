import { Route, Routes } from "react-router-dom"

// Blog imports
import Blog from "./components/Blog/Blog"
import MeteorShower from "./components/Blog/Articles/MeteorShower"
import EclipseSolar from "./components/Blog/Articles/EclipseSolar"

// Layout imports
import { Header } from "./components/layout/header/Header"
import { Footer } from "./components/layout/footer/Footer"

// home page imports
import Home from './components/home/Home'

// Planetary imports
import App from "./components/planetary/Planetary"

// Quiz imports
import AztecAstronomyQuiz from "./components/quizzes/AztecAstronomyQuiz"


function Router () {
  return(
    <div className="global">
      <Header />
        <Routes>
          <Route path="/quizz" element={<AztecAstronomyQuiz />} />
          <Route path="/app" element={<App />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/eclipse-solar" element={<EclipseSolar />}/>
          <Route path="/blog/lluvia-de-estrellas" element={<MeteorShower />} />
        </Routes>
      <Footer extended={false}/>
    </div>
  )
}

export default Router