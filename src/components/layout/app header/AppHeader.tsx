import React from "react"
import { Link } from "react-router-dom"
import './app_header.css'

export const AppHeader = () => {
  return (
    <header className="app_header">
      <Link to={'/'} className="app_logo">
        <img src="https://i.ibb.co/HY4Jgph/favicon.png" alt="nahua vision logo" className="logo" />
      </Link>
    </header>
  )
}