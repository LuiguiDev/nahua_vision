// src/services/useAds.ts
import { useState, useEffect } from 'react';

interface AdMetrics {
  impressions: number;
  clicks: number;
  clickThrough: number;
  sponsorClicks: number;
}

interface AdContent {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  sponsorName: string;
  sponsorUrl: string;
  imageUrl?: string;
  weight?: number; // Para dar más probabilidad a ciertos anuncios
}

interface AdAnalytics {
  [key: string]: {
    [sponsorId: string]: AdMetrics;
  };
}

// Base de datos simulada de anuncios
const adsDatabase: Record<string, AdContent[]> = {
  gallery: [
    {
      id: 'art-academy-1',
      title: "Gracias por visitar mi proyecto. Ahora es tu turno de crear algo",
      description: "Descubre el arte del dibujo tradicional mexicano con nuestros cursos especializados.",
      ctaText: "Comienza tu viaje artístico",
      ctaUrl: "https://ejemplo.com/cursos",
      sponsorName: "Academia de Arte Mexicano",
      sponsorUrl: "https://ejemplo.com",
      imageUrl: "/ruta/a/imagen.jpg",
      weight: 2
    },
    {
      id: 'art-shop-1',
      title: "Lleva el arte mexicano a tu hogar",
      description: "Obras originales inspiradas en la cultura prehispánica.",
      ctaText: "Explora nuestra colección",
      ctaUrl: "https://ejemplo.com/tienda",
      sponsorName: "Galería Mexicana",
      sponsorUrl: "https://ejemplo.com/galeria",
      weight: 1
    }
  ],
  planetary: [
    {
      id: 'music-1',
      title: "Música que conecta con nuestras raíces",
      description: "Melodías ancestrales interpretadas con instrumentos prehispánicos.",
      ctaText: "Escucha ahora",
      ctaUrl: "https://ejemplo.com/musica",
      sponsorName: "Sonidos Ancestrales",
      sponsorUrl: "https://ejemplo.com/musica"
    },
    {
      id: 'music-2',
      title: "Cuentos y Leyendas en Náhuatl",
      description: "Historias tradicionales narradas en náhuatl con música original.",
      ctaText: "Descubre las historias",
      ctaUrl: "https://ejemplo.com/leyendas",
      sponsorName: "Nahua Sounds",
      sponsorUrl: "https://ejemplo.com/nahual"
    }
  ],
  tonalli: [
    {
      id: 'reading-1',
      title: "Descubre tu destino en las estrellas",
      description: "Lectura personalizada basada en el calendario azteca y tu fecha de nacimiento.",
      ctaText: "Agenda tu lectura",
      ctaUrl: "https://ejemplo.com/lecturas",
      sponsorName: "Lecturas Ancestrales",
      sponsorUrl: "https://ejemplo.com/lecturas"
    },
    {
      id: 'reading-2',
      title: "Conexión con la Sabiduría Ancestral",
      description: "Interpretaciones profundas de tu tonalli por expertos en cosmogonía mexica.",
      ctaText: "Consulta ahora",
      ctaUrl: "https://ejemplo.com/consultas",
      sponsorName: "Saberes Antiguos",
      sponsorUrl: "https://ejemplo.com/saberes",
      weight: 2
    }
  ],
  moonCalendar : [
    {
      id: "ocelote-querido-quetzalcoatl",
      title: "Querido Quetzalcóatl",
      description: "Descubre 'Querido Quetzalcóatl', una novela que te sumergirá en una sátira fantástica sobre la cultura y tradiciones ancestrales.",
      ctaText: "Más información",
      ctaUrl: "https://ocelote.mx/producto/querido-quetzalcoatl/",
      sponsorName: "Editorial Ocelotl",
      sponsorUrl: "https://ocelote.mx/",
      imageUrl: "https://m.media-amazon.com/images/I/81uE8a16alL._SL1500_.jpg"
    }
  ]
};

export const useAds = () => {
  const [analytics, setAnalytics] = useState<AdAnalytics>({});

  // Función para seleccionar un anuncio al azar considerando los pesos
  const getRandomAd = (ads: AdContent[]): AdContent => {
    const totalWeight = ads.reduce((sum, ad) => sum + (ad.weight || 1), 0);
    let random = Math.random() * totalWeight;
    
    for (const ad of ads) {
      const weight = ad.weight || 1;
      if (random <= weight) return ad;
      random -= weight;
    }
    
    return ads[0]; // Fallback al primer anuncio
  };

  const getAdContent = (placement: string): AdContent | null => {
    const placementAds = adsDatabase[placement];
    if (!placementAds?.length) return null;
    
    return getRandomAd(placementAds);
  };

  const trackImpression = (placement: string, sponsorId: string) => {
    setAnalytics(prev => {
      const placementData = prev[placement] || {};
      const sponsorData = placementData[sponsorId] || {
        impressions: 0,
        clicks: 0,
        clickThrough: 0,
        sponsorClicks: 0
      };

      return {
        ...prev,
        [placement]: {
          ...placementData,
          [sponsorId]: {
            ...sponsorData,
            impressions: sponsorData.impressions + 1,
            clickThrough: sponsorData.clicks / (sponsorData.impressions + 1)
          }
        }
      };
    });

    sendToAnalytics({
      type: 'impression',
      placement,
      sponsorId,
      timestamp: new Date().toISOString()
    });
  };

  const trackClick = (placement: string, sponsorId: string, type: 'cta' | 'sponsor' = 'cta') => {
    setAnalytics(prev => {
      const placementData = prev[placement] || {};
      const sponsorData = placementData[sponsorId] || {
        impressions: 0,
        clicks: 0,
        clickThrough: 0,
        sponsorClicks: 0
      };

      const newSponsorData = {
        ...sponsorData,
        clicks: type === 'cta' ? sponsorData.clicks + 1 : sponsorData.clicks,
        sponsorClicks: type === 'sponsor' ? sponsorData.sponsorClicks + 1 : sponsorData.sponsorClicks
      };

      newSponsorData.clickThrough = newSponsorData.clicks / newSponsorData.impressions;

      return {
        ...prev,
        [placement]: {
          ...placementData,
          [sponsorId]: newSponsorData
        }
      };
    });

    sendToAnalytics({
      type: 'click',
      clickType: type,
      placement,
      sponsorId,
      timestamp: new Date().toISOString()
    });
  };

  const sendToAnalytics = async (data: any) => {
    try {
      // Implementar lógica de envío al backend
      console.log('Sending to analytics:', data);
    } catch (error) {
      console.error('Error sending analytics:', error);
    }
  };

  return {
    trackImpression,
    trackClick,
    getAdContent,
    analytics
  };
};