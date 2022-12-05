import React from 'react'
import Navbar from '../../Navbar/Navbar';
import ContactPhoto from "../PagesAssets/cheetah1.jpg"
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <img className="photo" src={ContactPhoto} alt="" />
      <div className="content">
        <h1>Leave us a message </h1>
      </div>
      <section className='section flex'>
      <div className="container">
        <div className="item1" style={{background:"blue"}}>
        This layout allows you to put each element more accurately 
        compared to flex box. As you might know, nowadays flex box and 
        grid layout are very popular to create a website or an applications
         because we need to prepare to be used for mobile screen due to smartphone. 
         As the mobile screen is obviously small screen,
         it’s necessary to have “responsive design” feature.
        </div>
        <div className="itme2" style={{background:"green"}}>2</div>
      </div>
      </section>
      
      </div>
  )
}

export default Contact;