import React from 'react';

const Context: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#C4C7FF] to-blue-400 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Nahua Vision</span>{' '}
                  <span className="block text-[#FF9A00] xl:inline">Reviviendo el México Prehispánico</span>
                </h1>
                <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Un proyecto dedicado a documentar la cultura del México prehispánico, haciéndola accesible y atractiva para jóvenes y extranjeros interesados en nuestra rica herencia cultural.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF9A00] hover:bg-orange-500 md:py-4 md:text-lg md:px-10"
                    >
                      Explorar Características
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-[#C4C7FF] flex items-center justify-center">
            <div className="text-8xl text-white">☀️</div>
          </div>
        </div>
      </div>

      {/* Project Objective Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#FF9A00] font-semibold tracking-wide uppercase">Propósito</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Objetivo del Proyecto
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Nahua Vision es un esfuerzo por preservar y difundir la riqueza cultural del México prehispánico, conectando el pasado con el presente a través de tecnologías modernas e interactivas.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FF9A00] text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Documentación Cultural</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Investigamos y documentamos aspectos relevantes de la cultura nahua, incluyendo astronomía, calendario, lengua y cosmovisión.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FF9A00] text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Difusión Digital</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Utilizamos tecnologías modernas como React y Three.js para crear experiencias interactivas que acerquen esta cultura a nuevas generaciones.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FF9A00] text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Educación Accesible</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Creamos contenido educativo atractivo y accesible para acercar el conocimiento prehispánico a jóvenes y extranjeros.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FF9A00] text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Preservación Lingüística</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Fomentamos el aprendizaje del náhuatl a través de herramientas interactivas, contribuyendo a preservar esta importante lengua originaria.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#FF9A00] font-semibold tracking-wide uppercase">Características</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Funcionalidades Principales
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900">Planetario Virtual</h3>
                <p className="mt-2 text-base text-gray-500">
                  Descubre los nombres aztecas de los astros y visualiza modelos 3D de glifos representativos como Meztli (Luna), Tonatiuh (Sol) y Citlalin Popoca (Cometa).
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900">Quiz de Astronomía Azteca</h3>
                <p className="mt-2 text-base text-gray-500">
                  Pon a prueba tus conocimientos sobre astronomía y cosmovisión prehispánica con preguntas interactivas diseñadas para educar de forma divertida.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900">Calendario Lunar 2025</h3>
                <p className="mt-2 text-base text-gray-500">
                  Observa cada luna del año con diseños inspirados en la cosmovisión nahua, combinando arte y astronomía en representaciones únicas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900">Descubre tu Tonalli</h3>
                <p className="mt-2 text-base text-gray-500">
                  Calcula tu fecha de nacimiento en el calendario azteca y aprende sobre su significado en la cultura prehispánica.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900">Fondos de Pantalla Exclusivos</h3>
                <p className="mt-2 text-base text-gray-500">
                  Descarga diseños basados en glifos y elementos de la cosmovisión nahua para personalizar tus dispositivos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900">Aprender Náhuatl</h3>
                <p className="mt-2 text-base text-gray-500">
                  Explora fauna en náhuatl, expresiones y toponimias. Recibe notificaciones contextuales sobre nombres de lugares en náhuatl al visitar distintas zonas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#FF9A00] font-semibold tracking-wide uppercase">Tecnología</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Stack Tecnológico
            </p>
          </div>

          <div className="mt-10 flex justify-center space-x-10">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700">React</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700">TypeScript</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700">Tailwind</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700">Vite</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700">Three.JS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="py-12 bg-[#C4C7FF] bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#FF9A00] font-semibold tracking-wide uppercase">Colaboración</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Únete al Proyecto
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Estamos buscando conectar con personas que tengan proyectos culturales relacionados para construir alianzas que amplifiquen el impacto de nuestras iniciativas.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#FF9A00] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;