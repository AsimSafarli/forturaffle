import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GrFavorite} from 'react-icons/gr'
function Navbar() {
  return (
    <div className='p-4 '>
     <header className='flex items-center justify-between'>
        <div><Link to='/'><img src='Assets/Logo.png' className='w-16'/></Link></div>
        <nav className='font-bold flex flex-row gap-x-4 text-[#224453]'>
            <NavLink to='/' >AnaSeyfe </NavLink>
            <NavLink to='/categories' >Kateqoriya </NavLink>
            <NavLink to='/win' >Qazananlar</NavLink>
            <NavLink to='/about' >Haqqimizda</NavLink>
            <NavLink to='/faq' >Suallar</NavLink>
            <NavLink to='/contact'>Elaqe</NavLink>
        </nav>
        <div className='flex flex-row items-center gap-x-7 font-bold '>
            <div><GrFavorite className='text-2xl'/></div>
            <div><AiOutlineShoppingCart className='text-2xl'/></div>
            <div><NavLink to='/login' className='bg-[#224453] p-2 rounded-md text-white hover:text-[#224453] hover:border hover:border-[#224453] hover:bg-transparent'>Login</NavLink></div>
            <div><NavLink to='/login' className='bg-[#ED5C01] p-2 rounded-md text-white hover:text-[#ED5C01] hover:border hover:border-[#ED5C01] hover:bg-transparent'>Register</NavLink></div>
        </div>
     </header>
     </div>
  )
}

export default Navbar