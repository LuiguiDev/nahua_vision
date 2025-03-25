// ProjectStatus.tsx
import React from 'react';

const ProjectStatus = () => {
  const completedFeatures = [
    {
      name: 'Planetario Virtual',
      progress: 75,
      details: 'Implementación de visualización de los astros principales: Meztli (Luna), Tonatiuh (Sol), y Xolotl (Venus). Pendiente: Añadir más astros y mejorar las animaciones 3D.'
    },
    {
      name: 'Diseño de UI/UX',
      progress: 90,
      details: 'Interfaz principal, paleta de colores y sistema de navegación implementados. Pendiente: Optimización para dispositivos móviles.'
    },
    {
      name: 'Calendario Lunar 2025',
      progress: 60,
      details: 'Estructura básica implementada. Pendiente: Diseños únicos para cada luna y descripción de su significado.'
    },
    {
      name: 'Quiz de Astronomía Azteca',
      progress: 40,
      details: 'Base de preguntas creada. Pendiente: Sistema de puntuación e interfaz interactiva.'
    }
  ];

  const currentMilestones = [
    'Lanzamiento de versión beta del Planetario Virtual (Abril 2025)',
    'Implementación del sistema de cálculo de Tonalli (Mayo 2025)',
    'Desarrollo de módulos de aprendizaje de náhuatl (Junio 2025)',
    'Integración de notificaciones basadas en ubicación (Julio 2025)'
  ];

  return (
    <section className="py-12 border-b border-[#C4C7FF]/20">
      <h2 className="text-3xl font-bold mb-8 text-[#C4C7FF]">Estado Actual del Proyecto</h2>
      
      {/* Progress Bars */}
      <div className="mb-12">
        <h3 className="text-xl font-medium mb-4">Características en Desarrollo</h3>
        <div className="space-y-6">
          {completedFeatures.map((feature, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span>{feature.name}</span>
                <span>{feature.progress}%</span>
              </div>
              <div className="w-full bg-[#1d1d1b] rounded-full h-2.5 border border-[#C4C7FF]/20">
                <div 
                  className="bg-[#FF9A00] h-2.5 rounded-full" 
                  style={{ width: `${feature.progress}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-gray-300">{feature.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Milestones */}
      <div>
        <h3 className="text-xl font-medium mb-4">Hitos Actuales</h3>
        <ul className="space-y-3 list-disc list-inside ml-4">
          {currentMilestones.map((milestone, index) => (
            <li key={index} className="text-[#C4C7FF]">
              <span className="text-white">{milestone}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectStatus;