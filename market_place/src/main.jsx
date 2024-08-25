import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Components/Home/Home.jsx'
import { Navbar } from './Components/Navbar/navbar.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Navbar />
    <Home/>
  </StrictMode>,
  </BrowserRouter>
)
