import React, { useState } from "react"
import './moon_calendar.css'

interface MoonType {
  id: string
  image: { src: string, alt: string }
  title: string
  date: string
  description: string
}

const MOONS: MoonType[] = [
  {
    id: 'wolf-moon',
    image: {
      src: '../../img/wolf_moon.jpg',
      alt: ''
    },
    title: 'Luna del coyote',
    date: '13-01-2025',
    description: 'En la cultura popular, a la primera luna llena del año se le conoce como \'Luna del lobo\', así que se me ocurrió tomar el concepto y hacer esta composición, pero en vez de un lobo el protagonista es el glifo de Nezahualcóyotl que significa \'Coyote que ayuna\'.'
  },
  {
    id: 'snow-moon',
    image: {
      src: '../../img/snow_moon.png',
      alt: ''
    },
    title: 'Luna de Iztaccíhuatl',
    date: '12-02-2025',
    description: ''
  }
]

interface MoonCardProps {
  moon: MoonType
}


const Moon: React.FC<MoonCardProps> = ({moon}) => {
  const [isExtended, setIsExtended] = useState<boolean>(false)
  const { date, description, id, image, title } = moon

  function manageSetIsExtended(newState:boolean) {
    if (!isExtended) {
      setIsExtended(newState)      
    }
  }
  
  function formatDate(dateStr: string) {
    // Divide el string de la fecha
    const [day, month, year] = dateStr.split('-');
  
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

  return (
    <div className="moon_card" onClick={() => manageSetIsExtended(true)}>
      <img src={image.src} alt={image.alt} />

      <div className="moon_about">
        <h3>{title}</h3>
        <p>{formatDate(date)}</p>

        {
          isExtended &&
          <>
            <p>{description}</p>
            <p onClick={() => setIsExtended(false)}><small>cerrar</small></p>
          </>
        }
      </div>
    </div>
  )
}

const MoonCalendar = ({  }) => {

  return (
    <div className="page_container">
      <main className="moon_calendar">
        {
          MOONS.map(moon => (
            <Moon
              key={moon.id}          
              moon={moon}
            />
          ))
        }
      </main>
    </div>
  )
}

export default MoonCalendar