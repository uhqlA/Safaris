import React, { useEffect } from "react";
import "./ContactForm.css"

import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {

     //react hook for adding a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="contact-page-wrapper">
      <h3 
       data-aos="fade-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="10000"

       className="primary-heading">Have Question In Mind?</h3>
      <h3 
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="10000"
        
        className="primary-heading">Let Us Help You!</h3>
      <div className="contact-form-container">
        <input type="text" placeholder="Enter Your Email..." />
        <button className="secondary-button">Submit</button>
      </div>
      <br></br>
    </div>
  );
};

export default ContactForm;
