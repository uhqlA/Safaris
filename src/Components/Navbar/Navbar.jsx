import React, {useState} from 'react'
import "./navbar.css"
import Logo from "../../Assets/logo.jpeg"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

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
            <a href="/" className="navLink">Home</a>
          </li>
          <li className="navItem">
            <a href="/" className="navLink">About</a>
          </li>
          <li className="navItem">
            <a href="/" className="navLink">Safaris</a>
          </li>
          <li className="navItem">
            <a href="/" className="navLink">Services</a>
          </li>
          <li className="navItem">
            <a href="/" className="navLink">Gallery</a>
          </li>
          <li className="navItem">
            <a href="/" className="navLink">Shop</a>
          </li>
          <li className="navItem">
            <a href="/" className="navLink">Contact</a>
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