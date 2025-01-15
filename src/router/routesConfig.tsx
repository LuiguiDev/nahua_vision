import React from "react";
import Home from "../components/home/Home";
import { AztecAstronomyQuiz } from "../components/quizzes/AztecAstronomyQuiz";
import Planetary from "../components/planetary/Planetary";
import Page404 from "../components/pages/errors/404/page404";
import TermsAndConditions from "../components/pages/legal/TermsAndConditions";
import MoonCalendar from "../components/pages/moon calendar/MoonCalendar";

const routesConfig = [
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
      path: '*',
      element: <Page404 />,
      title: '404 - No Encontrado',
  },
];

export default routesConfig;
