// 2. Creamos un componente para el layout del post
// components/pages/blog/PostLayout.tsx
import React from 'react';
import { PostMetadata } from '../../types/blog';

interface PostLayoutProps {
  children: React.ReactNode;
  metadata: PostMetadata;
}

export const PostLayout: React.FC<PostLayoutProps> = ({ children, metadata }) => {
  console.log({children, metadata});
  

  function formatDate(dateStr: string) {
    // Divide el string de la fecha
    const [year, month, day] = dateStr.split('-');
  
    // Define un array con los nombres de los meses
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
  
    // Obtén el nombre del mes a partir del índice
    const monthName = months[parseInt(month, 10) - 1]; // Resta 1 porque los índices empiezan desde 0
  
    // Retorna la fecha en el formato deseado
    return `${parseInt(day, 10)} de ${monthName} de ${year}`;
  }

  const formatedDate = formatDate(metadata.date)

  return (
    <article className='flex flex-col gap-8'>
      <div>
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <div className="text-gray-300 mb-4">{formatedDate}</div>
        {metadata.tags && (
          <div className="flex gap-2 mb-4">
            {metadata.tags.map(tag => (
              <span 
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-xl text-gray-700">{metadata.excerpt}</p>
      </div>
      <div className="prose lg:prose-xl">
        {children}
      </div>
    </article>
  );
};