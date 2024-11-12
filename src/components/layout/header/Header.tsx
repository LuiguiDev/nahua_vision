import React from "react"
import './header.css'
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <img src="https://i.ibb.co/HY4Jgph/favicon.png" alt="nahua vision logo" className="logo" />
      </Link>
      <h2>Nahua vision</h2>
      <i className="fa-solid fa-bars" style={{color: '#ffffff'}}></i>
    </header>
  )
}