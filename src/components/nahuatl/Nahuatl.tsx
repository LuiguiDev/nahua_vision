import React, { useEffect } from "react"
import { useAnimals } from "./hooks/useAnimals"

const Nahuatl = () => {
  const {animals} = useAnimals()

  useEffect(() => {
    console.log(animals)
  }, [])

  return (
    <main className="flex flex-col gap-8">
      <section className="bg-[#c4c7ff3b] p-10 flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="text-[#C4C7FF] font-bold">Palabra del día</p>
          <i className="fa-solid fa-arrow-up-from-bracket" style={{color: "#C4C7FF"}}></i>
        </div>
        <h2 className="text-4xl text-[#C4C7FF] font-extrabold">CIHUATETEO</h2>
        <p className="text-[#C4C7FF] font-bold">Significa "mujeres divinas"</p>
        <p className="text-sm text-[#C4C7FF]">Leer artículo</p>
      </section>

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