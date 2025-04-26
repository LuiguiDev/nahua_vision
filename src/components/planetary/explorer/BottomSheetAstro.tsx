import React from 'react';
import { astro } from './types';

interface BSAtypes {
  astro: astro
  isOpen: boolean
  onClose: () => void
}

const BottomSheetAstro: React.FC<BSAtypes> = ({ astro, isOpen, onClose }) => {
  const { nameNa, nameEs, description, images } = astro || {};
  const checkDescription = description?.length > 0 ? description : 'Missing info about this glyph';

  if (!astro) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full bg-zinc-900 rounded-t-xl z-10 transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex justify-center pt-2 pb-1">
        <div className="w-10 h-1 bg-gray-500 rounded-full"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-white text-xl font-bold">{nameNa}</h2>
            <h3 className="text-gray-400">{nameEs}</h3>
          </div>
          <div 
            className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-lg" 
            style={{
              backgroundImage: `url(${images?.thumbnail?.src})`
            }}
          />
        </div>
        
        <button
          onClick={onClose}
          className="px-4 py-2 mb-6 border border-white rounded-md text-white bg-transparent"
        >
          Back
        </button>
        
        <div className="overflow-y-auto max-h-64 text-white whitespace-pre-line">
          {checkDescription}
        </div>
      </div>
    </div>
  );
};

export default BottomSheetAstro;