import { Route, Routes, useLocation } from "react-router-dom"

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
import { AztecAstronomyQuiz } from "./components/quizzes/AztecAstronomyQuiz.tsx"

// footer and header state

function Router () {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith('/app');
  
  return(
    <div className="global">
      {!isAppRoute && <Header />}
        <Routes>
          <Route path="/quiz" element={<AztecAstronomyQuiz />} />
          <Route path="/app" element={<App />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/eclipse-solar" element={<EclipseSolar />}/>
          <Route path="/blog/lluvia-de-estrellas" element={<MeteorShower />} />
        </Routes>
      {!isAppRoute && <Footer extended={false}/>}
    </div>
  )
}

export default Router