import React from "react"
import '../styles/header.css'

export const Header = () => {
  return (
    <header>
      <img src="./src/images/favicon.png" alt="nahua vision logo" className="logo" />
      <h2>Nahua vision</h2>
      <i className="fa-solid fa-bars" style={{color: '#ffffff'}}></i>
    </header>
  )
}