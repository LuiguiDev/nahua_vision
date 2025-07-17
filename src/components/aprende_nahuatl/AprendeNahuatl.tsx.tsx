import React, { useEffect, useState } from "react"
import { useAnimals } from "./hooks/useAnimals"
import { Link } from "react-router-dom"
import WODD from "./WODD"
import Nature from "./Nature"
import { shareWord } from "./services/shareWord"

interface WordType {
  nahuatl: string
  spanish: string
  image: string
  slug: string
}
interface WordOfTheDay {
  nahuatl: string;
  spanish: string;
  pronunciation: string;
  category: string;
  example?: string;
  exampleTranslation?: string;
}

const WordOfTheDay: React.FC<WordType> = (word) => {
  return(
    <section className="bg-[#494b5d57] p-10 flex flex-col gap-6">
      <div className="flex justify-between align-middle">
        <p className="text-[#C4C7FF] text-xl">Palabra del día</p>
        <div className="w-8">
          <img src="../public/img/favicon.png" />
        </div>
        
{/*         <div onClick={() => shareWord(word)}>    
          <i className="fa-solid fa-arrow-up-from-bracket text-xl" style={{color: "#FF9A00"}}></i>
        </div>
 */}

    </div>
      <h2 className="text-3xl text-[#C4C7FF] font-extrabold">{word.nahuatl}</h2>
      <p className="text-[#C4C7FF] text-xl">Significa {word.spanish}</p>
{/*       <p className="text-sm text-secondary">
        <Link to={`/nahuatl/${word.slug}`}>
          Leer artículo
        </Link>
      </p>
 */}    </section>
  )
}

const AprendeNahuatl = () => {
  const {animals} = useAnimals()
  const [word, setWord] = useState<WordOfTheDay | null>(null)

  const words: WordOfTheDay[] = [
    {
      nahuatl: 'Yolotl',
      spanish: 'Corazón',
      pronunciation: 'yo-lotl',
      category: 'Cuerpo',
      example: 'Niyoltlachixtoc motechpa',
      exampleTranslation: 'Mi corazón espera por ti'
    },
    {
      nahuatl: 'Xōchitl',
      spanish: 'Flor',
      pronunciation: 'sho-chitl',
      category: 'Naturaleza',
      example: 'Tlazohcamati pampa ni xōchitl',
      exampleTranslation: 'Gracias por esta flor'
    },
    {
      nahuatl: 'Atl',
      spanish: 'Agua',
      pronunciation: 'atl',
      category: 'Naturaleza',
      example: 'Atl quipia miyac chicahualiztli',
      exampleTranslation: 'El agua tiene mucha fuerza'
    },
    {
      nahuatl: 'Tlalli',
      spanish: 'Tierra',
      pronunciation: 'tla-lli',
      category: 'Naturaleza',
      example: 'In tlalli tech palehuia',
      exampleTranslation: 'La tierra nos ayuda'
    },
    {
      nahuatl: 'Tonatiuh',
      spanish: 'Sol',
      pronunciation: 'to-na-ti-uh',
      category: 'Astronomía',
      example: 'Tonatiuh tech tlahuilia',
      exampleTranslation: 'El sol nos ilumina'
    },
    {
      nahuatl: 'Cihuateteo',
      spanish: 'Mujeres divinas',
      pronunciation: 'to-na-ti-uh',
      category: 'Astronomía',
      example: 'Tonatiuh tech tlahuilia',
      exampleTranslation: 'El sol nos ilumina'
    }
  ];

  function fetchWordOfTheDay(words: WordOfTheDay[]) {
    const today = new Date()
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))

    const index = dayOfYear % words.length

    return words[index]
  }

  useEffect(() => {

  }, [])

  return (
    <main className="page_container flex flex-col gap-8">
      {/* <WordOfTheDay image="" nahuatl='CIHUATETEO' spanish="mujeres divinas" slug=""/> */}
      <WordOfTheDay image="" nahuatl='In xochitl, in cuicatl' spanish='“poesía” ó “el canto es como una flor”' slug=""/>
      <Nature />
      
      <button className="bg-white/80 text-black p-3 rounded-md">
        Curso básico de nahuatl GRATIS
      </button>
    </main>
  )
}

export default AprendeNahuatl