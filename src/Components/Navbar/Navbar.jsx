import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     <header>
        <div>Logo</div>
        <nav>
            <NavLink to='/' >Home Page</NavLink>
        </nav>
        <div></div>
     </header>
     </div>
  )
}

export default Navbar