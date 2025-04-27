import React, { useRef, useEffect } from 'react';
import { UUIDtype, astro, astros } from "./types"

interface CardProps {
  astro: astro
  manageSetLookAt: (position: [number, number, number]) => void
  setSelectedId: (id: UUIDtype | undefined) => void
  setShowBottomSheet: (newState: boolean) => void
}

const ExploreCard: React.FC<CardProps> = ({ astro, manageSetLookAt, setSelectedId, setShowBottomSheet }) => {
  const { nameNa, nameEs, id, position, images } = astro;
  const cardRef = useRef(null);

  const scope:[number, number, number] = [...position]
  // by reducing scope[1] (y) by 15 the astro is not covered by extended info
  scope[1] = scope[1] - 15

  function handleClick() {
    manageSetLookAt(scope);
    setSelectedId(id);
    setShowBottomSheet(true);
  }

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div 
      className="bg-zinc-900 rounded-xl h-50 w-40 overflow-hidden p-5 flex flex-col gap-5 transition-all duration-1000"
      ref={cardRef}
    >
      <div className="flex flex-col h-full justify-between">
        <div 
          className="w-full h-24 bg-center bg-no-repeat bg-cover" 
          style={{
            backgroundImage: `url(${images.thumbnail.src})`
          }}
        />
        <div className="flex flex-col">
          <h3 className="text-white">{nameNa}</h3>
          <h3 className="text-gray-400">{nameEs}</h3>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;