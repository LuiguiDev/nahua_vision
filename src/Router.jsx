import { Route, Routes, useLocation } from "react-router-dom"

// Blog imports
import Blog from "./components/blog/Blog.tsx"
import MeteorShower from "./components/blog/Articles/MeteorShower"
import EclipseSolar from "./components/blog/Articles/EclipseSolar"

// Layout imports
import { Header } from "./components/layout/header/Header"
import { Footer } from "./components/layout/footer/Footer"

// home page imports
import Home from './components/home/Home'

// Planetary imports
import App from "./components/planetary/Planetary"

// Quiz imports
import { AztecAstronomyQuiz } from "./components/quizzes/AztecAstronomyQuiz.tsx"

// gallery
import Gallery from './components/pages/gallery/Gallery.tsx'
import { Explorer } from "./components/planetary/explorer/Explorer.tsx"
import { Loader } from "./components/ui/loader/Loader.tsx"
import { DEVELOPMENT_ROUTES, SUPPORTED_ROUTES } from "./constants/suported_routes.ts"

function Router () {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith('/app');
  
  return(
    <div className="global">
      {!isAppRoute && <Header />}
        <Routes>
          <Route path={SUPPORTED_ROUTES.HOME} element={<Home />} />
          <Route path={SUPPORTED_ROUTES.PLANETARY} element={<App />} />
          <Route path={SUPPORTED_ROUTES.QUIZ} element={<AztecAstronomyQuiz />} />

          <Route path={SUPPORTED_ROUTES.BLOG} element={<Blog />} />
          <Route path="/blog/eclipse-solar" element={<EclipseSolar />}/>
          <Route path="/blog/lluvia-de-estrellas" element={<MeteorShower />} />

          <Route path={DEVELOPMENT_ROUTES.GALLERY} element={<Gallery />} />
        </Routes>
      {!isAppRoute && <Footer extended={false}/>}
    </div>
  )
}

export default Router