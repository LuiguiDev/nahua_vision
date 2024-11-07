import React from 'react'
import '../styles/luis_card.css'

const LuisCard = () => {
  return (
    <div className="luis_card">
      <img src="../img/portrait.webp" alt="" className="luis_card_img" />
      <div className="luis_card_caption">
        <p>Una iniciativa de</p>
        <h3>Luis Rodríguez</h3>
      </div>
    </div>
  )
}

export default LuisCard