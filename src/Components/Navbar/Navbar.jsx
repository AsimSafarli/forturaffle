import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     <header>
        <div><img src='Assets/Logo.png' className='w-16'/></div>
        <nav className='font-bold'>
            <NavLink to='/' >AnaSeyfe </NavLink>
            <NavLink to='/categories' >Kateqoriya </NavLink>
            <NavLink to='/win' >Qazananlar</NavLink>
            <NavLink to='/about' >Haqqimizda</NavLink>
            <NavLink to='/faq' >Suallar</NavLink>
            <NavLink to='/contact'>Elaqe</NavLink>
        </nav>
        <div></div>
     </header>
     </div>
  )
}

export default Navbar