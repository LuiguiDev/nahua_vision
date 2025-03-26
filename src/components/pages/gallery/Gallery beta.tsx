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

const GalleryBeta = () => {
  return(
    <>
      <main className="page_container">

        <p className='text-[#C4C7FF]'>Descarga las imagenes de Nahua Vision adaptadas para fondo de pantalle GRATIS</p>

        <button>
          <a href="/img/meztli_labeled.png" download="meztli_labeled.png">
            Descargar meztli_labeled
          </a>
        </button>

{/*         <div className="options">
          <TrashButton />
          <DownloadButton numArticles={1} />
        </div>
 */}
      </main>
    </>
  )
}

export default GalleryBeta