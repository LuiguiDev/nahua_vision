import { Route, Routes, useLocation } from "react-router-dom"

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
import { MoonFullPage } from "../components/pages/moon calendar/MoonCalendar.tsx"
import { useEffect } from "react"

function Router () {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith('/app');

  useEffect(() => {
    if (document.startViewTransition) {
      document.querySelectorAll('div[data-transition]').forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const url = link.getAttribute('href');
          
          console.log({link, url})

          document.startViewTransition(() => {
            window.location.href = url;
          });
        });
      });
    } else {
      console.log("View Transitions API no soportada en este navegador.");
    }  
  }, [])
  
  return(
    <>
      {!isAppRoute && <Header />}
        <Routes>
          {
            routesConfig.map(({path, element}) => (
              <Route path={path} element={element} key={path}/>
            ))
          }

          <Route path="/ad" element={<Ad placement={placement} />} />

          <Route path={DEVELOPMENT_ROUTES.GALLERY} element={<Gallery />} />


          <Route path="/moon-calendar/:moonId" element={<MoonFullPage />}/>
        </Routes>
      {!isAppRoute && <Footer extended={false}/>}
    </>
  )
}

export default Router