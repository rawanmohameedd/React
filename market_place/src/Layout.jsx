import React from 'react'
import { Navbar } from './Components/Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
export default function Layout  ()  {
  return (
    <div style={{"display":'flex', "flexDirection":"column", "height":"100vh"}}>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
