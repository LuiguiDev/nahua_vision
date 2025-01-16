import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
