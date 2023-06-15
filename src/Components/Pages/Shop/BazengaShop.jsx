import React, { useEffect } from 'react'
import Navbar from '../../Navbar/Navbar';
import Aos from 'aos';
import Footer from '../../Footer/Footer';
import "aos/dist/aos.css"

import { FaShoppingCart } from "react-icons/fa"
const BazengaShop = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div>
      <Navbar />
      
      <section className='main container section'>
      <div className='secTitle'>
      <h3 className='title'>
        Shopping Page
        <FaShoppingCart style={{color:'#2698ff',fontSize:"25px",marginLeft: "5px"}} />
      </h3>
      </div>
      </section>
      
      <Footer/>
    </div>
  )
}

export default BazengaShop;