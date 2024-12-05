import React from 'react'
import './gallery.css'
import ImagePack from './ImagePack'

const Gallery = () => {
  return(
    <main className="page_container">
      <h3>Descarga las imagenes de Nahua Vision adaptadas para fondo de pantalle GRATIS</h3>
      <ImagePack cover='./../img/cover.jpg' title='Fondos de pantalla con etiqueta' />
    </main>
  )
}

export default Gallery