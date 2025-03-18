import React, { useEffect } from "react"
import { useAnimals } from "./hooks/useAnimals"
import { Link } from "react-router-dom"

interface WordObjType {
  word: string
  image: string
}

const WordOfTheDay: React.FC<WordObjType> = (wordObj) => {
  function shareWord () {
    
  }

  return(
    <section className="bg-[#c4c7ff3b] p-10 flex flex-col gap-6">
      <div className="flex justify-between">
        <p className="text-[#C4C7FF] font-bold">Palabra del día</p>
        
        <button onClick={shareWord}>    
          <i className="fa-solid fa-arrow-up-from-bracket" style={{color: "#C4C7FF"}}></i>
        </button>
      </div>
      <h2 className="text-4xl text-[#C4C7FF] font-extrabold">CIHUATETEO</h2>
      <p className="text-[#C4C7FF] font-bold">Significa "mujeres divinas"</p>
      <p className="text-sm text-[#C4C7FF]">
        <Link to={'/nahuatl/cihuateteo'}>
          Leer artículo
        </Link>
      </p>
    </section>
  )
}

const Nahuatl = () => {
  const {animals} = useAnimals()

  useEffect(() => {
    console.log(animals)
  }, [])

  return (
    <main className="flex flex-col gap-8">
      <WordOfTheDay />
      <section className="grid grid-cols-2 gap-6 ">
        <img className="aspect-square" />
        <div>
          <h2 className="">Náhuatl y naturaleza</h2>
          <p></p>
        </div>
      </section>
    </main>
  )
}

export default Nahuatl