import React, { useEffect } from "react"
import { useAnimals } from "./hooks/useAnimals"

const Nahuatl = () => {
  const {animals} = useAnimals()

  useEffect(() => {
    console.log(animals)
  }, [])

  return (
    <div className="nahuatl">

    </div>
  )
}

export default Nahuatl