import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import img from "../PagesAssets/photo3.jpg";
import Marquee from "react-fast-marquee";
import AboutImg from "../PagesAssets/lion3.jpg";

import "./About.css";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  //react hook for adding a scroll animation

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar />
      <img className="photo" src={img} alt="" />
      <div className="content">
        <h1>Who We Are </h1>
      </div>
      <div className="content1">
        <Marquee speed={30} gradient={false} pauseOnHover>
          <p>
            We’re defined by who we are in our hearts, who we choose to be on
            this earth.”
          </p>
        </Marquee>
      </div>

      <div className="container">
        <div className="top-section">
          <div className="left">
            <p data-aos="fade-right"  className="about-subhending">
            Bazenga <span>Safaris</span>
          </p>
            <h2 data-aos="fade-left" className="about-heading">
              Traveling tends to magnify all human emotions
            </h2>
            <div data-aos="fade-up" className="about-info">
              Bazenga Safaris is an experiential travel outfit founded in Kenya
              (the land of safari) we are based in the heart of Nairobi city.
              Our Inspiration is to offer every traveller, the most
              unforgettable experience beyond their imaginations. While keeping
              the highest professionalism and hospitality.
              <br></br>
              <br></br>
              Our Inspiration to Travel Overland Across Africa and the globe, is
              a dream we live everyday. inspired by the story of humanity's
              gallivanting spirit to explore and the curiosity to discover
              beyond.
              <br></br>
              <br></br>
              We pride in changing the perception about travel in a fast
              changing environment, plagued by: extraction, commoditization,
              Over-tourism and Exploitative practices. Hence at the heart of our
              company, we see travel as a force for Good, Positive Change,
              Empowerment, Development, Equality, Diversity, Awareness, Humanity
              and Peace.
              <br></br>
              <br></br>
              That's why our Viagez across Africa and the globe, are a product
              of concious curation, with great elements embroidered into the
              experiences from start to the end.
              <br></br>
              Sustainably and Environmental Conciseness is part and parcel of
              our travel. So anyone booking a safari with us, makes a direct
              contribution to making the planet a better place to live. (See our
              Sustainability Projects)
              <br></br>
              <br></br>
              Be sure to partake on our travel experiences, with a view of
              gaining new perspectives, challenging your limits, learning and
              meeting new friends
              <br></br>
              <br></br>
              Let us transform your travels into an unforgettable experience.
              <br></br>
              That's why we say: <b>SAFIRI KIBAZENGA</b>
            </div>
          </div>
          <div className="right">
            <img
              data-aos="fade-right"
              className="img"
              src={AboutImg}
              alt="about"
            />
          </div>
        </div>
      </div>

      <div className="section"> 
      <h2>Dont wait any longer: contact us now for booking</h2>
      <div className="info">
      <div className="call">
        <div className="contact">
          <h3>Call us on: 
          <a href="tel:123-456-7890">+254-700 000 000</a></h3>

        </div>
      </div>
      <div className="email">
       <h3>Email Us:
       <a href="mailto:email@example.com">info@bazengasafaris.com</a>
       </h3>
       
      </div>
      <div className="social-media">
        <h4>Follow us:</h4>
        
      </div>

      </div>
      </div>
    </div>
  );
};

export default About;
