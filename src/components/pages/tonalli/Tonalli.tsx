import React from "react"
import { useState } from "react"

interface ResultType {
  glifo: string
  title: string
  description: string
}

interface TonalliResultProps {
  result: ResultType
}

const TonalliResult: React.FC <TonalliResultProps> = ({ result }) => {
  return (
    <div className="tonalli_result">

    </div>
  )
}

const TonalliCalculator = () => {
  const [result, setResult] = useState<ResultType>({ glifo: '', description: '', title: '' })

  return (
    <div className="tonalli_calculator">
      <form action="">
        <label htmlFor="birthday_form"></label>
        <input type="date" name="user_birthday" id="birthday_form "/>

        <TonalliResult result={result}/>
      </form>
    </div>
  )
}

const Tonalli = () => {
  return (
    <div className="page_container">
      <h2>Calcula tu fecha de nacimiento en el calendario azteca</h2>
      <TonalliCalculator />
    </div>
  )
}

export default Tonalli