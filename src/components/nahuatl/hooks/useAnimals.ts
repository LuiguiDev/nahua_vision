import { useState, useEffect } from 'react';

interface Animal {
  id: string;
  nameNahuatl: string;
  nameSpanish: string;
  scientificName: string;
  description: string;
  habitat: string;
  imageUrl?: string;
}

export const useAnimals = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        // En una implementación real, esto sería una llamada a una API
        const mockAnimals: Animal[] = [
          {
            id: '1',
            nameNahuatl: 'Ōcēlōtl',
            nameSpanish: 'Jaguar',
            scientificName: 'Panthera onca',
            description: 'Animal sagrado en la cultura náhuatl, símbolo de poder y fuerza.',
            habitat: 'Selvas tropicales de México'
          },
          {
            id: '2',
            nameNahuatl: 'Cuauhtli',
            nameSpanish: 'Águila',
            scientificName: 'Aquila chrysaetos',
            description: 'Representación del sol y los guerreros en la cosmología náhuatl.',
            habitat: 'Montañas y zonas altas de México'
          }
        ];

        setAnimals(mockAnimals);
        setLoading(false);
      } catch (err) {
        setError('No se pudieron cargar los animales');
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const getAnimalById = (id: string): Animal | undefined => {
    return animals.find(animal => animal.id === id);
  };

  return { animals, loading, error, getAnimalById };
};