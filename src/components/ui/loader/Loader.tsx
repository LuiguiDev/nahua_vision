import React from 'react'
import './loader.css'

export const Loader = () => {
  return (
    <div className="loader_container">
      <div className="spiner_container">
        <div className="spiner">
        </div>
        <img className="eye" src='https://i.ibb.co/PNXgfGW/loader-eye.webp'/>
      </div>

      <p>Cargando...</p>
    </div>
  )
}