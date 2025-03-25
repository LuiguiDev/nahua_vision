// PendingTasks.tsx
import React, { useState } from 'react';

type Priority = 'Alta' | 'Media' | 'Baja';
type Category = 'Desarrollo' | 'Diseño' | 'Contenido' | 'Infraestructura';
interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  category: Category;
  deadline: string;
  estimatedHours: number;
}

const PendingTasks = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'Todas'>('Todas');

  function manageSetCategory(newCategory:Category) {
    setActiveFilter(newCategory)
    console.log(`New Category: ${newCategory}`)
    console.log(activeFilter)
  }
  
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Completar implementación de Three.js para modelos 3D de glifos',
      description: 'Integrar modelos 3D interactivos para Meztli, Tonatiuh y Citlalin Popoca en el planetario virtual.',
      priority: 'Alta',
      category: 'Desarrollo',
      deadline: '15/04/2025',
      estimatedHours: 40
    },
    {
      id: 2,
      title: 'Desarrollar algoritmo para cálculo de Tonalli',
      description: 'Implementar la lógica para convertir fechas gregorianas al calendario azteca y determinar el tonalli correspondiente.',
      priority: 'Alta',
      category: 'Desarrollo',
      deadline: '30/04/2025',
      estimatedHours: 25
    },
    {
      id: 3,
      title: 'Diseñar interfaces para módulo de aprendizaje de náhuatl',
      description: 'Crear maquetas para las secciones de fauna en náhuatl y expresiones/toponimias.',
      priority: 'Media',
      category: 'Diseño',
      deadline: '10/05/2025',
      estimatedHours: 20
    },
    {
      id: 4,
      title: 'Investigar y compilar base de datos de toponimias en náhuatl',
      description: 'Crear un catálogo completo de lugares en la Ciudad de México con nombres en náhuatl, incluyendo su significado y relevancia histórica.',
      priority: 'Media',
      category: 'Contenido',
      deadline: '20/05/2025',
      estimatedHours: 30
    },
    {
      id: 5,
      title: 'Implementar sistema de notificaciones basadas en ubicación',
      description: 'Desarrollar la funcionalidad para enviar notificaciones contextuales cuando el usuario pasa cerca de lugares con nombres en náhuatl.',
      priority: 'Baja',
      category: 'Desarrollo',
      deadline: '15/06/2025',
      estimatedHours: 35
    },
    {
      id: 6,
      title: 'Optimizar rendimiento en dispositivos móviles',
      description: 'Mejorar la carga y renderizado de modelos 3D en dispositivos de gama media y baja.',
      priority: 'Alta',
      category: 'Infraestructura',
      deadline: '05/04/2025',
      estimatedHours: 15
    },
    {
      id: 7,
      title: 'Diseñar ilustraciones para el Calendario Lunar 2025',
      description: 'Crear 12 ilustraciones únicas inspiradas en la cosmovisión nahua para cada luna del año.',
      priority: 'Media',
      category: 'Diseño',
      deadline: '25/04/2025',
      estimatedHours: 60
    }
  ];

  const categories: Category[] = ['Desarrollo', 'Diseño', 'Contenido', 'Infraestructura'];
  
  const filteredTasks = activeFilter === 'Todas' 
    ? tasks 
    : tasks.filter(task => task.category === activeFilter);

  const getPriorityColor = (priority: Priority) => {
    switch(priority) {
      case 'Alta': return 'bg-red-500';
      case 'Media': return 'bg-yellow-500';
      case 'Baja': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-[#C4C7FF]">Tareas Pendientes</h2>
      
      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button 
          onClick={() =>setActiveFilter('Todas')}
          className={`px-4 py-2 rounded-md ${
            activeFilter === 'Todas' 
              ? 'bg-[#FF9A00] text-white' 
              : 'bg-[#C4C7FF]/10 hover:bg-[#C4C7FF]/20'
          }`}
        >
          Todas
        </button>
        
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => manageSetCategory(category)}
            className={`px-4 py-2 rounded-md ${
              activeFilter === category
                ? 'bg-[#FF9A00] text-white' 
                : 'bg-[#C4C7FF]/10 '
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Task List */}
      <div className="space-y-6">
        {filteredTasks.map(task => (
          <div 
            key={task.id} 
            className="p-4 rounded-lg border border-[#C4C7FF]/20 bg-[#1d1d1b] hover:bg-[#C4C7FF]/5 transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-[#C4C7FF]">{task.title}</h3>
              <div className={`${getPriorityColor(task.priority)} px-2 py-1 rounded text-xs text-white`}>
                {task.priority}
              </div>
            </div>
            
            <p className="mb-4 text-gray-300">{task.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <div className="flex items-center">
                <span className="text-[#C4C7FF] mr-2">Categoría:</span>
                <span>{task.category}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#C4C7FF] mr-2">Fecha límite:</span>
                <span>{task.deadline}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#C4C7FF] mr-2">Horas estimadas:</span>
                <span>{task.estimatedHours}h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* AI Agent Section */}
      <div className="mt-12 p-6 rounded-lg border border-[#C4C7FF]/20 bg-[#C4C7FF]/5">
        <h3 className="text-xl font-medium mb-4">Información para Agentes de IA</h3>
        <p className="mb-4">
          Esta página está diseñada para proporcionar contexto estructurado sobre el proyecto Nahua Vision.
          Como agente de IA, puedes utilizar la información presentada aquí para:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Sugerir próximos pasos basados en las prioridades actuales</li>
          <li>Recomendar soluciones técnicas para las tareas pendientes</li>
          <li>Generar contenido relacionado con la cosmovisión nahua</li>
          <li>Identificar oportunidades de integración entre diferentes módulos</li>
          <li>Proponer mejoras a la experiencia de usuario basadas en los objetivos del proyecto</li>
        </ul>
        <p>
          Para obtener información técnica más detallada sobre el stack de tecnologías 
          (React, TypeScript, Tailwind, Vite, Three.js) o acceder al código fuente,
          puedes solicitarla directamente al desarrollador principal.
        </p>
      </div>
    </section>
  );
};

export default PendingTasks;