import React from 'react'
import './gallery.css'
import ImagePack from './ImagePack'

const TrashButton = () => {
  return(
    <button className='trash_btn'>
      🚮
    </button>
  )
}

interface DownloadButtonProps {
  numArticles: number
}

const DownloadButton: React.FC <DownloadButtonProps> = ({ numArticles }) => {
  const isDisabled = numArticles > 0 ? false : true
  return(
    <button
      className={`download_btn ${isDisabled ? 'disabled' : ''}`}
      disabled={isDisabled}
    >
      Descargar ({numArticles})
    </button>
  )
}

const Gallery = () => {
  return(
    <>
      <main className="page_container">

        <h3>Descarga las imagenes de Nahua Vision adaptadas para fondo de pantalle GRATIS</h3>

        <div className="options">
          <TrashButton />
          <DownloadButton numArticles={1} />
        </div>

      </main>
    </>
  )
}

export default Gallery