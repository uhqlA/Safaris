import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import img from "../PagesAssets/photo3.jpg";
import Footer from "../../Footer/Footer";
import ContactPhoto from "../PagesAssets/Rally1.jpg";

import "./About.css";

import Aos from "aos";
import "aos/dist/aos.css";
import ContactForm from "../Form/ContactForm";

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
      <div className="about">
        <div className="about-row">
          <div className="about-column">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="about-pic"
            >
              <img src={ContactPhoto} alt="" />
            </div>
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="about-column"
          >
            <div className="about-text">
              <div className="title">
                <span>About Our Bazenga Safaris</span>
                <h3>Traveling tends to magnify all human emotions</h3>
              </div>
              <p>
                Bazenga Safaris is an experiential travel outfit founded in
                Kenya (the land of safari) we are based in the heart of Nairobi
                city. Our Inspiration is to offer every traveller, the most
                unforgettable experience beyond their imaginations. While
                keeping the highest professionalism and hospitality.
                <br></br>
                Our Inspiration to Travel Overland Across Africa and the globe,
                is a dream we live everyday. inspired by the story of humanity's
                gallivanting spirit to explore and the curiosity to discover
                beyond.
                <br></br>
                We pride in changing the perception about travel in a fast
                changing environment, plagued by: extraction, commoditization,
                Over-tourism and Exploitative practices. Hence at the heart of
                our company, we see travel as a force for Good, Positive Change,
                Empowerment, Development, Equality, Diversity, Awareness,
                Humanity and Peace.
                <br></br>
                That's why our Viagez across Africa and the globe, are a product
                of concious curation, with great elements embroidered into the
                experiences from start to the end.
                <br></br>
                Sustainably and Environmental Conciseness is part and parcel of
                our travel. So anyone booking a safari with us, makes a direct
                contribution to making the planet a better place to live. (See
                our Sustainability Projects)
                <br></br>
                Be sure to partake on our travel experiences, with a view of
                gaining new perspectives, challenging your limits, learning and
                meeting new friends
                <br></br>
                Let us transform your travels into an unforgettable experience.
                <br></br>
                That's why we say: <b>SAFIRI KIBAZENGA</b>
              </p>
              <a href="/safaris" class="learn-btn">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
     
      <Footer />
    </div>
  );
};

export default About;
