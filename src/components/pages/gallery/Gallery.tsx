import React, { useState } from 'react';

interface Wallpaper {
  id: number;
  name: string;
  preview: string;
  fullRes: string;
  description: string;
}

const Gallery: React.FC = () => {
  const wallpapers: Wallpaper[] = [
    {
      id: 1,
      name: 'Tonatiuh',
      preview: 'https://i.ibb.co/fz0VdN6q/Tonatiuh-labeled.webp',
      fullRes: '/img/tonatiuh_labeled.png',
      description: 'Sol azteca con glifos y elementos cosmológicos'
    },
    {
      id: 2,
      name: 'Venus',
      preview: 'https://i.ibb.co/QFGFRghx/Venus-labeled.webp',
      fullRes: '/img/venus_labeled.png',
      description: 'Representación de Venus en la cosmovisión nahua'
    },
    {
      id: 3,
      name: 'Meztli',
      preview: 'https://i.ibb.co/KcK1k5TP/Meztli-labeled.webp',
      fullRes: '/img/meztli_labeled.png',
      description: 'Luna con simbolismo y glifos nahuas'
    }
  ];

  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

  const handleDownload = (wallpaper: Wallpaper) => {
    const link = document.createElement('a');
    link.href = wallpaper.fullRes;
    link.download = `${wallpaper.name}_NahuaVision_Wallpaper.png`;
    link.click();
  };

  return (
    <section className="py-12 bg-[#1d1d1b] text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-[#C4C7FF]">Fondos de Pantalla</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {wallpapers.map((wallpaper) => (
            <div 
              key={wallpaper.id}
              className="bg-[#C4C7FF]/10 rounded-lg overflow-hidden border border-[#C4C7FF]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative">
                <img 
                  src={wallpaper.preview} 
                  alt={wallpaper.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1d1d1b]/80 to-transparent p-4">
                  <h3 className="text-lg font-medium text-white">{wallpaper.name}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-gray-300 mb-4">{wallpaper.description}</p>
                
                <button 
                  onClick={() => handleDownload(wallpaper)}
                  className="w-full bg-[#FF9A00] text-white py-2 rounded-md hover:bg-[#FF9A00]/90 transition-colors flex items-center justify-center"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar Fondo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;