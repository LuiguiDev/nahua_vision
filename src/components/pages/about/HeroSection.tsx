// HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-12 border-b border-[#C4C7FF]/20">
      <h1 className="text-4xl font-bold mb-4">
        <span className="text-[#C4C7FF]">Nahua</span>{' '}
        <span className="text-[#FF9A00]">Vision</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xl mb-6">
            Una guía para explorar el universo a través de los ojos de los antiguos mexicanos
          </p>
          <p className="mb-6">
            Nahua Vision es un proyecto personal dedicado a documentar y preservar la cultura del 
            México prehispánico, haciéndola accesible y atractiva para audiencias jóvenes e 
            internacionales interesadas en la cosmovisión nahua.
          </p>
          <div className="p-4 bg-[#C4C7FF]/10 rounded-lg border border-[#C4C7FF]/20">
            <h3 className="text-lg font-medium mb-2">Objetivo principal</h3>
            <p>
              Crear una experiencia interactiva y educativa que revitalice el interés 
              en la astronomía, mitología y lenguaje náhuatl, buscando alianzas con 
              proyectos culturales afines que amplifiquen nuestro impacto colectivo.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-[#1d1d1b] rounded-lg overflow-hidden border border-[#C4C7FF]/20">
            <img 
              src="/images/planetario-preview.jpg" 
              alt="Planetario Azteca" 
              className="w-full h-full object-cover opacity-80 aspect-square"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1d1d1b] p-4">
              <p className="text-lg font-medium">Planetario Azteca</p>
              <p className="text-sm text-[#C4C7FF]">Descubre los nombres que los aztecas dieron a los astros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
