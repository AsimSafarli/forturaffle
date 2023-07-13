import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="p-5">
      <header className=" header ">
        <div className="loqo">
          <Link to="/">
            <img src="Assets/navbar/Logo.png" />
          </Link>
          <h1>Forturaffle</h1>
        </div>
        <nav className="nav">
          <NavLink to="/">Ana səhifə </NavLink>
          <NavLink to="/categories">Məhsullar</NavLink>
          <NavLink to="/win"> Son qazananlar</NavLink>
          <NavLink to="/about">Haqqımızda</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Əlaqə</NavLink>
        </nav>
        <div className="navbar__loqo ">
          <div>
            <BsSearch className="text-2xl " />
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
      </header>
    </div>
  );
}

export default Navbar;
