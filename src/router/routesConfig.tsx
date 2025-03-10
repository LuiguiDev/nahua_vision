import React, { JSXElementConstructor } from "react";
import Home from "../components/home/Home";
import { AztecAstronomyQuiz } from "../components/quizzes/AztecAstronomyQuiz";
import Planetary from "../components/planetary/Planetary";
import Page404 from "../components/pages/errors/404/page404";
import TermsAndConditions from "../components/pages/legal/TermsAndConditions";
import MoonCalendar from "../components/pages/moon calendar/MoonCalendar";
import Tonalli from "../components/pages/tonalli/Tonalli";
import MDXBlogPost from "../components/blog/MDXBlogPost";
import MDXBlog from "../components/blog/MDXBlog";
import Nahuatl from "../components/nahuatl/Nahuatl";


interface RouteType {
  path: string
  element: React.JSX.Element
  title: string
}

const routesConfig: RouteType[] = [
  {
    path: '*',
    element: <Page404 />,
    title: '404 - No Encontrado',
  },
  {
      path: '/',
      element: <Home />,
      title: 'Inicio',
  },
  {
      path: '/app',
      element: <Planetary />,
      title: 'Planetario Azteca',
  },
  {
      path: '/quiz',
      element: <AztecAstronomyQuiz />,
      title: 'Quiz de Astronomía',
  },
  {
    title: 'Terminos y condiciones',
    path: '/terminos-y-condiciones',
    element: <TermsAndConditions />,
  },
  {
    title: 'Calendario lunar 2025',
    path: '/moon-calendar',
    element: <MoonCalendar />
  },
  {
    title: 'Conversor de fechas',
    path: '/tonalli',
    element: <Tonalli />
  },
  {
    title: 'Blog',
    element: <MDXBlog />,
    path: '/blog'
  },
  {
    title: 'Blog Post',
    element: <MDXBlogPost />,
    path: '/blog/:slug'
  },
  {
    title: 'Aprende nahuatl',
    path: '/nahuatl',
    element: <Nahuatl />
  },
  {
    title: 'Palabra del día',
    path: '/nahuatl/:slug',
    element: <h1>Palabra del día</h1>
  }
];

export default routesConfig;
