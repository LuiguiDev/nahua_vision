export const data = [
  {
    id: crypto.randomUUID(),
    modelName: 'meztli_blender_v1',
    nameNa: 'Meztli',
    nameEs: 'Luna',
    description: 'El glifo de Meztli, nuestra Luna 🌙\nLa U representa el corte frontal de una vasija llena de pulque. 🏺\nEl circulo azul marino rodeado de puntos representa la noche estrellada. ✨',
    position: [0, 10, 30],
    rotation: [Math.PI / 2, 0, Math.PI / 1],
    scale: 1.5,
    images: {
      thumbnail: {
        src: 'https://i.ibb.co/S56L0Pw/Meztli-labeled.webp',
        alt: ''
      }
    }
  },
  {
    id: crypto.randomUUID(),
    modelName: 'tonatiuh_blender_v1',
    nameNa: 'Tonatiuh',
    nameEs: 'Sol',
    description: 
    '🔴 El circulo rojo del interior representa a Tonatiuh, el sol.\n🔵 El anillo azul representa el cielo.\n🟢 El anillo verde representa el jade, la belleza.\n⚪ El último anillo está dividido en 20 segmentos que representan los 20 días del mes nahua.\n🧭 Las 4 flechas solares representan los 4 rumbos del universo.\n🔆 Los círculos pequeños del exterior representan a los 4 soles, las 4 eras antes de Tonatiuh.\n🟡 Todo sobre un fondo amarillo que representa la luz del sol.',
    position: [0, 10, -30],
    rotation: [Math.PI / 2, 0, 0],
    scale: 4,
    images: {
      thumbnail: {
        src: 'https://i.ibb.co/zhtK0WZ/Tonatiuh-labeled.webp'
      }
    }
  },
  {
    id: crypto.randomUUID(),
    modelName: 'xipe_blender_v1',
    nameNa: 'Xolotl',
    nameEs: 'Venus',
    description: 'Las representaciones iconográficas de Venus son diversas; incluso, en el Templo Rojo de Cacaxtla se representó de forma humanizada, y en la lámina 58 del Códice Dresde la cabeza de la deidad descendente se plasmó por medio de una cruz o estrella.\n Si deseas saber más sobre la compleja iconografía de Venus te invito a leer el siguiente artículo: Representaciones de venus en el méxico prehispanico',
    position: [-10, 30, 5],
    rotation: [Math.PI / 2, 0, - Math.PI / 2],
    scale: 1.5,
    images: {
      thumbnail: {
        src: 'https://i.ibb.co/6XyjWWb/Xolotl-labeled.webp'
      }
    }
  },
  {
    id: crypto.randomUUID(),
    modelName: 'citlalin_popoca_blender_v1',
    nameNa: 'Citlalin popoca',
    nameEs: 'Cometa',
    description: 'Citlalin popoca significa literalmente "estrella que humea", aquí está representa con el glifo de citlali que en conjugación con unas bolutas de humo alude a la idea de un cometa',
    position: [0, 10, 0],
    rotation: [0, 0, 0],
    scale: 1,
    images: {
      thumbnail: {
        src: 'https://i.ibb.co/k9YKfsH/Citlalin-popoca-labeled.webp'
      }
    }
  },
  {
    id: crypto.randomUUID(),
    modelName: 'citlalin_tlamina_blender_v1',
    nameNa: 'Citlalin tlamina',
    nameEs: 'Citlalin tlamina significa literalmente "estrella fugaz", aquí se representa con el glifo de citlali que en conjugación del glifo tlamina "flecha" alude a la idea de una estrella fugaz',
    description: '',
    position: [0, 10, 5],
    rotation: [0, 0, 0],
    scale: 1,
    images: {
      thumbnail: {
        src: 'https://i.ibb.co/yfLCpwP/Citlalin-tlamina-labeled.webp'
      }
    }
  },
  {
    id: crypto.randomUUID(),
    modelName: 'yohualli_blender_v1',
    nameNa: 'Yohualli',
    nameEs: 'La noche',
    description: '',
    position: [10, 3, 5],
    rotation: [Math.PI / 2, 0, Math.PI / 2],
    scale: 0.5,
    images: {
      thumbnail: {
        src: 'https://i.ibb.co/wgDDxvX/Yohualli-labeled.webp'
      }
    }
  },
  {
    id: crypto.randomUUID(),
    modelName: 'tonatiuh_cualo_blender_v1',
    nameNa: 'Tonatiuh qualo',
    nameEs: 'Eclipse solar',
    description: '',
    position: [-10, 0, 1],
    rotation: [Math.PI / 2, 0, - Math.PI / 2],
    scale: 1,
    images: {
      thumbnail: {
        src: ''
      }
    }
  },
  {
    id: crypto.randomUUID(),
    modelName: 'meztli_cualo_blender_v1',
    nameNa: 'Meztli cualo',
    nameEs: 'Eclipse lunar',
    description: 'Este glifo está compuesto por dos pictogramas: Yohualli "la noche" (parte izq.) y Meztli "la luna" (parte derecha) pues la traducción interpretada de "Meztli cualo" es "La oscuridad devoró a la luna".',
    position: [-10, 0, 9],
    rotation: [Math.PI / 2, 0, - Math.PI / 2],
    scale: 1,
    images: {
        thumbnail: {
        src: 'https://i.ibb.co/p4638ST/meztli-cualo-iluminated.webp'
      }
    }
  }
  /*{
    id: crypto.randomUUID(),
    nameNa: 'Hueyteocalli',
    nameEs: 'Templo mayor',
    description: 'Basamento piramidal con dos templos en la cima, uno dedicado a Tlaloc y otro a Huitzilopochtli',
    position: [0, -10, -500],
    rotation: [0, 0, 0],
    scale: 0.05
  }
 */]