import React, { Fragment, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import ContactPhoto from "../PagesAssets/photo1.jpg";
import "./Contact.css";
import { GiPhone } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { FiSend } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  //react hook for adding a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar />
      <img className="photo" src={ContactPhoto} alt="" />
      <div data-aos="fade-right" className="content">
        <h1>Leave us a message </h1>
      </div>
      <Fragment>
        <section className="contact">
          <div data-aos="fade-down" className="contact-heading">
            <h2>Contact us</h2>
          </div>

          <div className="container">
            <div className="row">
              <div className="column">
                <div data-aos="fade-right" className="contact-widget">
                  <div className="contact-widget-item">
                    <div className="icons">
                      <i class="fa-solid fa-location-dot">
                        <GoLocation />
                      </i>
                    </div>
                    <div className="text">
                      <h5>Address</h5>
                      <p
                        style={{
                          color: "blue",
                        }}
                      >
                        Paliament Road, Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icons">
                      <i class="fa-solid fa-phone">
                        <GiPhone />
                      </i>
                    </div>
                    <div className="text">
                      <h5>Contact Us</h5>
                      <a href="tel:+254-712 345 678">+254-712 345 678</a>
                      {/* <p>254-712 345 678 | 254-712 000 000</p> */}
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icons">
                      <i class="fa-regular fa-envelope">
                        <FiSend />
                      </i>
                    </div>
                    <div className="text">
                      <h5>Send us an Email</h5>
                      <a href="mailto:email@example.com">info@support.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div data-aos="fade-left" className="contact-form">
                  <form action="#">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <input type="number" placeholder="Phone Number" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message"></textarea>
                    <button className="site-btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="map-column">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.807064091219!2d36.8178014141023!3d-1.2900330990590874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d9646e9173%3A0xeb7e627d529f74c7!2sThe%20Parliament%20of%20Kenya!5e0!3m2!1sen!2ske!4v1670781214085!5m2!1sen!2ske"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
      <Footer />
    </div>
  );
};

export default Contact;
