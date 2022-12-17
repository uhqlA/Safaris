import React, {useEffect} from "react";
import "./home.css";
import Marquee from "react-fast-marquee";
import video from "../../Assets/bazenga.mp4";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

//Icons
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp} from "react-icons/ai"
import { TbApps } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";

import Aos from "aos";
import 'aos/dist/aos.css';


const Home = () => {

  
//react hook for adding a scroll animation

useEffect(() => {
  Aos.init({duration: 2000})

}, [])

  return (
    <div>
      <Navbar/>


    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Bazenga Safaris</span>
          <Marquee speed={60} gradient={false} pauseOnHover>
            <h1 data-aos="fade-up" className="homeTitle">Overlanding Across Africa</h1>
          </Marquee>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter name 
                here..."
              />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price </label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FaTwitter className="icon" />
            <AiOutlineInstagram className="icon" />
            <AiOutlineLinkedin className="icon" />
            <AiOutlineYoutube className="icon" />
            <AiOutlineWhatsApp className="icon"/>
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>

    <Main />
    <Footer />
    </div>
  );
};

export default Home;
