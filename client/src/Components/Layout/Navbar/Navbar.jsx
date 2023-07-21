import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <div className='flex flex-row justify-evenly p-5 '>
    <div className='flex flex-row items-center'><img src='Assets/Home/Logo.png' className='w-8 h-7'/><div className='text-[#ED5C01] text-2xl font-bold'>Forturaffle</div></div>
    <nav className='flex flex-row gap-x-8'>
      <NavLink to='/'>Ana səhifə</NavLink>
      <NavLink to='/categories'>Məhsullar</NavLink>
      <NavLink to='/win'>Son qazananlar</NavLink>
      <NavLink to='/about'>Haqqımızda</NavLink>
      <NavLink to='/faq'>FAQ</NavLink>
      <NavLink to='/contact'>
Əlaqə</NavLink>

    </nav>
    <div className='flex flex-row gap-x-8'>
   
          <div>
            <BsSearch className="text-2xl" />
          </div>
          <div>
            <AiOutlineHeart className="text-2xl" />
          </div>
          <div>
            <AiOutlineShoppingCart className="text-2xl" />
          </div>
          <div className="text-2xl">
            <FaRegUserCircle />
          </div>
      
    </div>
    </div>
  )
}

export default Navbar

