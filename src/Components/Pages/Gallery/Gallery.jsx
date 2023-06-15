import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Gallery.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GalleryData from "./GalleryData";

const Gallery = () => {

  //react hook for adding a scroll animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
    <Navbar />
    <section className="main container section">
    
    <div>
      
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">
        {GalleryData.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                
              </div>
            );
          }
        )}
      </div>
    
    
    </div>
    </section>
    <Footer />
    </div>
  );
};
      


export default Gallery;
