import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import Presentation from './components/Presentation'
import Blog from './components/Blog'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'

const Main = () => <h1>Hello</h1>

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
