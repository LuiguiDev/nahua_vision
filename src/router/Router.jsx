import { Route, Routes, useLocation } from "react-router-dom"

// Blog imports
import Blog from "../components/blog/Blog.tsx"
import MeteorShower from "../components/blog/Articles/MeteorShower"
import EclipseSolar from "../components/blog/Articles/EclipseSolar"

// Layout imports
import { Header } from "../components/layout/header/Header"
import { Footer } from "../components/layout/footer/Footer"


// gallery
import Gallery from '../components/pages/gallery/Gallery.tsx'
import { DEVELOPMENT_ROUTES, SUPPORTED_ROUTES } from "../constants/suported_routes.ts"

// test
import { Ad } from '../services/components/Ad.tsx'

const PLACEMENTS = ['tonalli', 'gallery', 'planetary']
const placement = PLACEMENTS[Math.floor(Math.random() * PLACEMENTS.length)]

import routesConfig from './routesConfig.tsx'

function Router () {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith('/app');
  
  return(
    <div className="global">
      {!isAppRoute && <Header />}
        <Routes>
          {
            routesConfig.map(({path, element}) => (
              <Route path={path} element={element} key={path}/>
            ))
          }

          <Route path="/ad" element={<Ad placement={placement} />} />

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