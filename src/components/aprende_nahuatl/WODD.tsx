import React, { useState, useEffect } from 'react';

interface WordOfTheDay {
  nahuatl: string;
  spanish: string;
  pronunciation: string;
  category: string;
  example?: string;
  exampleTranslation?: string;
}

// Esta función simula obtener la palabra del día de una API o base de datos
const fetchWordOfTheDay = (): WordOfTheDay => {
  // Array de palabras en náhuatl para mostrar aleatoriamente
  const words: WordOfTheDay[] = [
    {
      nahuatl: 'Yolotl',
      spanish: 'Corazón',
      pronunciation: 'yo-lotl',
      category: 'Cuerpo',
      example: 'Niyoltlachixtoc motechpa',
      exampleTranslation: 'Mi corazón espera por ti'
    },
    {
      nahuatl: 'Xōchitl',
      spanish: 'Flor',
      pronunciation: 'sho-chitl',
      category: 'Naturaleza',
      example: 'Tlazohcamati pampa ni xōchitl',
      exampleTranslation: 'Gracias por esta flor'
    },
    {
      nahuatl: 'Atl',
      spanish: 'Agua',
      pronunciation: 'atl',
      category: 'Naturaleza',
      example: 'Atl quipia miyac chicahualiztli',
      exampleTranslation: 'El agua tiene mucha fuerza'
    },
    {
      nahuatl: 'Tlalli',
      spanish: 'Tierra',
      pronunciation: 'tla-lli',
      category: 'Naturaleza',
      example: 'In tlalli tech palehuia',
      exampleTranslation: 'La tierra nos ayuda'
    },
    {
      nahuatl: 'Tonatiuh',
      spanish: 'Sol',
      pronunciation: 'to-na-ti-uh',
      category: 'Astronomía',
      example: 'Tonatiuh tech tlahuilia',
      exampleTranslation: 'El sol nos ilumina'
    }
  ];
  
  // Obtener la fecha actual para generar un índice pseudo-aleatorio basado en el día
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  
  // Usar el día del año como índice para seleccionar la palabra
  const index = dayOfYear % words.length;
  
  return words[index];
};

const WODD: React.FC = () => {
  const [word, setWord] = useState<WordOfTheDay | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    // Cargar la palabra del día cuando el componente se monta
    const todaysWord = fetchWordOfTheDay();
    setWord(todaysWord);
  }, []);

  if (!word) {
    return <div className="flex justify-center items-center h-64">
      <p className="text-white">Cargando palabra del día...</p>
    </div>;
  }

  return (
    <div className="bg-[#1d1d1b] rounded-xl p-6 shadow-lg max-w-md mx-auto">
      <h2 className="text-[#FF9A00] text-xl font-bold mb-4 text-center">
        Palabra del Día
      </h2>
      
      <div className="relative">
        <div 
          className={`transform transition-all duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
          style={{ perspective: '1000px' }}
        >
          <div 
            className={`cursor-pointer bg-[#C4C7FF] bg-opacity-20 rounded-lg p-6 transition-all duration-500 ${
              isFlipped ? 'opacity-0 absolute' : 'opacity-100'
            }`}
            onClick={() => setIsFlipped(true)}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#FF9A00] text-sm font-medium px-2 py-1 rounded-full bg-[#1d1d1b]">
                {word.category}
              </span>
              <span className="text-white text-xs italic">
                Toca para ver traducción
              </span>
            </div>
            
            <h3 className="text-white text-3xl font-bold text-center mb-2">
              {word.nahuatl}
            </h3>
            
            <p className="text-[#C4C7FF] text-center mb-4">
              Pronunciación: [{word.pronunciation}]
            </p>
            
            {word.example && (
              <div className="mt-4 border-t border-[#C4C7FF] border-opacity-30 pt-3">
                <p className="text-white italic text-center">{word.example}</p>
              </div>
            )}
          </div>
          
          <div 
            className={`cursor-pointer bg-[#FF9A00] bg-opacity-20 rounded-lg p-6 transition-all duration-500 ${
              isFlipped ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            onClick={() => setIsFlipped(false)}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#FF9A00] text-sm font-medium px-2 py-1 rounded-full bg-[#1d1d1b]">
                {word.category}
              </span>
              <span className="text-white text-xs italic">
                Toca para ver original
              </span>
            </div>
            
            <div className="flex flex-col items-center mb-2">
              <p className="text-[#C4C7FF] text-sm">
                {word.nahuatl}
              </p>
              <h3 className="text-white text-3xl font-bold text-center">
                {word.spanish}
              </h3>
            </div>
            
            {word.exampleTranslation && (
              <div className="mt-4 border-t border-[#C4C7FF] border-opacity-30 pt-3">
                <p className="text-white italic text-center">{word.exampleTranslation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <button 
          className="bg-[#C4C7FF] hover:bg-[#FF9A00] text-[#1d1d1b] font-medium py-2 px-4 rounded-full transition-colors duration-300 text-sm flex items-center"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Voltear Tarjeta
        </button>
      </div>
      
      <div className="mt-4 text-center">
        <a href="#vocabulary" className="text-[#FF9A00] hover:text-[#C4C7FF] text-sm transition-colors duration-300">
          Ver más palabras en náhuatl →
        </a>
      </div>
    </div>
  );
};

export default WODD;