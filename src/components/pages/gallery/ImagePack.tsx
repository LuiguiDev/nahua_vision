import React from "react";
import './gallery.css'

interface ImagePackProps {
  title: string
  cover: string
}

const ImagePack: React.FC <ImagePackProps> = ({ title, cover }) => {
  return(
    <div className="image_pack_container">
      <h3>{title}</h3>
      <img src={ cover } />
      <button>Descargar</button>
    </div>
  )
}

export default ImagePack