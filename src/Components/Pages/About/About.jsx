import React from 'react'
import Navbar from "../../Navbar/Navbar"
import img from "../PagesAssets/lion1.jpg"
import Marquee from "react-fast-marquee";

import "./About.css"


const About = () => {
  return (
    <div>
      <Navbar />
    <img className ="photo"
        src={img} 
        alt=""
        />
        <div className='content'>
          <h1>Who We Are </h1>
        
        </div>
        <div className="content1">
        <Marquee speed={30} gradient={false} pauseOnHover>
        <p>We’re defined by who we are in our hearts,
             who we choose to be on this earth.”</p>
             </Marquee>

        </div>


</div>
  )
}

export default About;