import React, { useEffect, useRef, useState } from 'react';
import { astro } from './types';

interface BSAtypes {
  astro: astro
  isOpen: boolean
  onClose: () => void
}

const BottomSheetAstro: React.FC<BSAtypes> = ({ astro, isOpen, onClose }) => {
    const { nameNa, nameEs, description, images } = astro || {};
    const checkDescription = description?.length > 0 ? description : 'Missing info about this glyph';
    
    // Estados para controlar la posición del bottom sheet
    const [sheetState, setSheetState] = useState('default'); // 'default', 'full', 'closed'
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    
    const dragHandleRef = useRef(null);
    const sheetRef = useRef(null);
    
    // Resetea el estado cuando se cierra el bottom sheet
    useEffect(() => {
      if (!isOpen) {
        setSheetState('closed');
      } else if (isOpen && sheetState === 'closed') {
        setSheetState('default');
      }
    }, [isOpen]);
    
    // Gestión de eventos táctiles/mouse
    const handleDragStart = (e) => {
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      setStartY(clientY);
      setIsDragging(true);
    };
    
    const handleDrag = (e) => {
      if (!isDragging) return;
      
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      setCurrentY(clientY - startY);
    };
    
    const handleDragEnd = () => {
      if (!isDragging) return;
      setIsDragging(false);
      
      // Determinar acción basada en la distancia de arrastre
      if (currentY > 100) {
        // Arrastrado hacia abajo significativamente - cerrar
        onClose();
      } else if (currentY < -50) {
        // Arrastrado hacia arriba - expandir a pantalla completa
        setSheetState('full');
      } else {
        // Volver a la posición predeterminada
        setSheetState('default');
      }
      setCurrentY(0);
    };
    
    // Registrar eventos
    useEffect(() => {
      const dragHandle = dragHandleRef.current;
      
      if (dragHandle) {
        dragHandle.addEventListener('mousedown', handleDragStart);
        dragHandle.addEventListener('touchstart', handleDragStart);
        
        window.addEventListener('mousemove', handleDrag);
        window.addEventListener('touchmove', handleDrag);
        
        window.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('touchend', handleDragEnd);
      }
      
      return () => {
        if (dragHandle) {
          dragHandle.removeEventListener('mousedown', handleDragStart);
          dragHandle.removeEventListener('touchstart', handleDragStart);
          
          window.removeEventListener('mousemove', handleDrag);
          window.removeEventListener('touchmove', handleDrag);
          
          window.removeEventListener('mouseup', handleDragEnd);
          window.removeEventListener('touchend', handleDragEnd);
        }
      };
    }, [isDragging, startY]);
    
    // Calcular clases y estilos basados en el estado
    const getSheetClasses = () => {
      let baseClasses = "fixed left-0 w-full bg-zinc-900 rounded-t-xl z-10 transform transition-transform duration-500 ease-in-out";
      
      // Estado de apertura básica
      if (!isOpen) {
        return `${baseClasses} translate-y-full`;
      }
      
      // Estado basado en la posición de arrastre/configuración
      switch (sheetState) {
        case 'full':
          return `${baseClasses} inset-0 rounded-none`;
        case 'default':
          return `${baseClasses} bottom-0 max-h-[70vh]`;
        default:
          return `${baseClasses} bottom-0 max-h-[70vh]`;
      }
    };
    
    // Calcular estilo para el arrastre en tiempo real
    const getDragStyle = () => {
      if (!isDragging) return {};
      
      return {
        transform: `translateY(${currentY}px)`,
        transition: 'none'
      };
    };
  
    if (!astro) return null;
  
    return (
      <div 
        ref={sheetRef}
        className={getSheetClasses()}
        style={getDragStyle()}
      >
        <div 
          className="flex justify-center pt-2 pb-1 cursor-grab active:cursor-grabbing"
          ref={dragHandleRef}
        >
          <div className="w-10 h-1 bg-gray-500 rounded-full"></div>
        </div>
        
        <div className="p-6 overflow-y-auto" style={{ maxHeight: sheetState === 'full' ? 'calc(100vh - 50px)' : 'auto' }}>
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
          
          <div className="overflow-y-auto text-white whitespace-pre-line" style={{ 
            maxHeight: sheetState === 'full' ? 'calc(100vh - 200px)' : '64'
          }}>
            {checkDescription}
          </div>
        </div>
      </div>
    );
  };
  
  export default BottomSheetAstro;