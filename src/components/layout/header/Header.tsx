import React, { useState } from "react"
import './header.css'
import { Link } from "react-router-dom"
import routesConfig from "../../../router/routesConfig"

interface MenuProps {
  isMenuOpen: boolean
  manageCloseMenu: () => void
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, manageCloseMenu }) => {
  return(
    <nav className={isMenuOpen ? 'active' : ''}>
      <ul className="header_nav_ul">
        {
          routesConfig.map(route => (
            <li key={`${route.path}`} onClick={manageCloseMenu}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  function manageCloseMenu() {
    setMenuOpen(false)
  }

  return (
    <header>
      <Link to={'/'}>
        <img src="https://i.ibb.co/HY4Jgph/favicon.png" alt="nahua vision logo" className="logo" />
      </Link>
      <h1 translate="no">Nahua vision</h1>
      <i 
        className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        style={{color: '#ffffff'}}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
      </i>

      <Menu isMenuOpen={isMenuOpen} manageCloseMenu={manageCloseMenu} />
    </header>
  )
}