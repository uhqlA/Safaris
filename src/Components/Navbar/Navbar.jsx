import React, {useState} from 'react'
import "./navbar.css"
import Logo from "../../Assets/logo.jpeg"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive ] = useState('navBar')

 //function to toggle navbar
 const showNav = ()=> {
  setActive('navBar activeNavbar')
 }

  //function to close navbar
  const closeNav = ()=> {
    setActive('navBar')
   }


  return ( 
   <section className='navBarSection'>
    <header className='header flex'>
      
      <div className='logoDiv'>
        <a href='/' className='logo flex'>
          <img
          style={{
            width:"20%",
            height: "40px",
            borderRadius: "5px",
            padding:"1px"
          }} 
          src= {Logo} alt="logo" />
          <p>Overlanding Across Africa</p>
        </a>
      </div>

      <div className={active}>
        <ul className="navLists flex">
          <li className="navItem">
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/about" className="navLink">About</Link>
          </li>
          <li className="navItem">
            <a href="/safaris" className="navLink">Safaris</a>
          </li>
          <li className="navItem">
            <Link to="/services" className="navLink">Services</Link>
          </li>
          <li className="navItem">
            <Link to="/gallery" className="navLink">Gallery</Link>
          </li>
          <li className="navItem">
            <Link to="/shop" className="navLink">Shop</Link>
          </li>
          <li className="navItem">
            <Link to="/contact" className="navLink">Contact</Link>
          </li>

          <button className='btn'>
            <a href="/">Book Now</a>
          </button>
        </ul>
        <div onClick={closeNav} className="closeNavbar">
          <AiFillCloseCircle className="icon"/>
 
        </div>
      </div>
      <div onClick={showNav}
      className="toggleNavbar">
        <TbGridDots className="icon"/>
      </div>

    </header>
   </section>
  )
}

export default Navbar;