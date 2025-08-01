import React from 'react'
import './luis_card.css'

const LuisCard = () => {
  return (
    <div className="luis_card">
      <img src="https://i.ibb.co/zHjRYML7/me-and-bookshelfves-compressed.jpg" alt="" className="luis_card_img" />
      <div className="luis_card_caption">
        <p>Una iniciativa de</p>
        <h4>
          <a
            href="http://about:blank"
            className='luis_bio_link'
          >
            Luis Rodríguez
          </a>
        </h4>
      </div>
    </div>
  )
}

export default LuisCard