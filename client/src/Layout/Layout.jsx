import React from 'react'
import Navbar from '../Components/Layout/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/Layout/Footer/Footer'
import Home from '../Page/Home/Home';

function Layout() {
  const location = useLocation();  

  return (
    <div className='container mx-auto'>
    <Navbar/>
    {location.pathname === "/" && <Home/>} 
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout