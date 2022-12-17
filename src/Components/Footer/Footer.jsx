import React, {useEffect} from "react";
import "./footer.css";
import Logo from "../../Assets/logo.jpeg";

import { FiChevronRight, FiSend } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {
  

    //react hook for adding a scroll animation
    useEffect(() => {
      Aos.init({duration: 2000})
    
    }, [])


    return (
    <section className="footer">
      <div className="secContent container">
        <div className="contactDiv flex">
          <div 
          data-aos="fade-up" 
          className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with Bazenga</h2>
          </div>

          <div className="inputDiv flex">
            <input 
            data-aos="fade-up" 
            type="text" placeholder="Enter Email Address" />
            <button 
            data-aos="fade-up" 
            className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <img
                  style={{
                    width: "20%",
                    height: "40px",
                    borderRadius: "5px",
                    padding: "1px",
                    margin: "10px"
                  }}
                  src={Logo}
                  alt="logo"
                />
                Overlanding Across Africa
              </a>
            </div>
            <div 
            data-aos="fade-up" 
            className="footerParagraph">
               Bazenga Safaris is an experiential travel outfit founded in Kenya
              (the land of safari) we are based in the heart of Nairobi city.
              Our Inspiration is to offer every traveller, the most
              unforgettable experience beyond their imaginations. While keeping
              the highest professionalism and hospitality.
            </div>
            <div 
            data-aos="fade-up" 
            className="footerSocials flex">
              <FiFacebook className="icon" />
              <FaTwitter className="icon" />
              <AiOutlineInstagram className="icon" />
              <AiOutlineLinkedin className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineWhatsApp className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">

            {/*Group one  */}
            <div
            data-aos="fade-up" 
            data-aos-duration="3000" 
            className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Sevices
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>


            {/* Group two */}
            <div 
            data-aos="fade-up" 
            data-aos-duration="4000" 
            className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelAfrica
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rent Trucks
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trip Advisor
              </li>
            </div>


            {/* Group 3 */}
             <div
             data-aos="fade-up" 
             data-aos-duration="5000" 
             className="linkGroup">
              <span className="groupTitle">OUR FOCUS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Kenya
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Uganda
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tazania
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Zambia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rwanda
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BAZENGA SAFARIS & WILD EXPENDITIONS</small>
            <small>COPYRIGHTS RESERVED - BAZENGA 2022</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
