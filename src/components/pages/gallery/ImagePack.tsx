import React from "react";
import './gallery.css'

interface ImagePackProps {
  title: string
  cover: string
}

const ImagePack: React.FC <ImagePackProps> = ({ title, cover }) => {
  return(
    <div className="image_pack_container">
      <p>{title}</p>
      <img src={ cover } className="pack_cover"/>
      <button className="action_button">Descargar pack</button>
    </div>
  )
}

export default ImagePack