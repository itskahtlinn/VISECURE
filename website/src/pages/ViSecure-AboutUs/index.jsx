import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import AboutUs1 from "../../assets/images/AboutUs-1.png";
import AboutUs2 from "../../assets/images/AboutUs-2.png";
import Email from "../../assets/images/email.png";
import Call from "../../assets/images/call.png";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderContentRef = useRef(null);
  const inputRadiosRef = useRef([]);

  const updateSliderPosition = () => {
    const translateValue = -currentIndex * 100 + '%';
    sliderContentRef.current.style.transform = 'translateX(' + translateValue + ')';
  };

  useEffect(() => {
    inputRadiosRef.current.forEach((radio, index) => {
      radio.addEventListener('change', () => {
        setCurrentIndex(index);
        updateSliderPosition();
      });
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % inputRadiosRef.current.length);
      if (currentIndex === 0) {
        sliderContentRef.current.style.transition = 'transform 0.5s ease-in';
        setTimeout(() => {
          sliderContentRef.current.style.transform = 'translateX(0)';
        }, 50);
      }
      inputRadiosRef.current[currentIndex].checked = true;
      updateSliderPosition();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
    }, [currentIndex, inputRadiosRef]);
  
    return(
     <div className='aboutUsMain'>
      <header>
        <Link to = "/main" className="icon">
            <img src= {ViSecureIcon} alt="ViSecure Icon" />
        </Link>
        <a href="#" className="logo">
          ViSecure
        </a>
        <Link to = "/company-partner" className="CompanyPartner">
          Company Partner
        </Link>
        <Link to = "/about" className="AboutUs">
          About Us
        </Link>
      </header>

      <section className="AboutUsIntroContainer">
        <img src={AboutUs1} alt="About Us 1" />
        <div className="AboutUsIntro">
          <h1>What is ViSecure System?</h1>
          <p>
            ViSecure is your trusted partner in modernizing how organizations handle visitor registration, access control, and security.
            At ViSecure, we are committed to enhancing user interactions by redefining the way businesses manage visitor records.
          </p>
        </div>
      </section>

      <section className="inverse full-bleed AboutUsMissionContainer">
        <div className="AboutUsMission">
          <h1>Our Mission</h1>
          <p>
            ViSecure goes beyond being just a visitor management system; it's a commitment to your security, convenience, and fostering connections through user interactions.
            By choosing ViSecure, you join a community of organizations that prioritize safety, efficiency, and professionalism while nurturing connections through every interaction.
          </p>
        </div>
        <img src={AboutUs2} alt="About Us 2" />
      </section>
        <section className="WhyUsContainer">
          <h1>Why Choose ViSecure</h1>
          <p>
            ViSecure goes beyond being just a visitor management system; it's a commitment to your security,
            convenience, and fostering connections through user interactions. By choosing ViSecure,
            you join a community of organizations that prioritize safety,
            efficiency, and professionalism while nurturing connections through every interaction.
          </p>
          <p style={{ marginTop: '10px' }}>
            We look forward to assisting you in transforming the way you manage visitors,
            all while creating secure and engaging user interactions.
            Join us in creating a safer, paperless, and more efficient visitor experience.
          </p>
        </section>

        <section className="inverse full-bleed WhatWeOffer">
        <h1>What We Offer</h1>
        <div className="slider-container">
              <div className="slider-content" ref={sliderContentRef}>
                  <div className="slide">
                      <h4 className="Header">Simplified Registration</h4>
                      <p>ViSecure simplifies the visitor registration process. Visitors
                          answer a digital form before entering your premises,
                          reducing wait times and encouraging user interactions.</p>
                  </div>
                  <div className="slide">
                      <h4 className="Header">Enhanced Security</h4>
                      <p>By moving away from traditional paper records, ViSecure
                          ensures the protection of sensitive visitor information with
                          top-tier security feature, building trust in user interactions.</p>
                  </div>
                  <div className="slide">
                      <h4 className="Header">Real-Time Insights</h4>
                      <p>Gain instant access to real-time visitor information and
                          insights. ViSecure provides data to make informed access
                          control decisions, driven by user interactions.</p>
                  </div>
                  <div className="slide">
                      <h4 className="Header">Customization</h4>
                      <p>Our system is flexible and can be customized to meet your
                          specific needs. Tailor the visitor registration form and
                          process to encourage meaningful user interactions based
                          on your requirements.</p>
                  </div>
                  <div className="slide">
                      <h4 className="Header">User-Friendly Interface</h4>
                      <p>ViSecure is designed with a user-friendly interface,
                          promoting seamless and positive user interactions for both
                          your staff and visitors.</p>
                  </div>
              </div>
              <div className="slider-nav">
                {Array.from({ length: 5 }, (_, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="radio"
                      name="slider"
                      id={`slide${index + 1}`}
                      ref={(el) => (inputRadiosRef.current[index] = el)}
                      onChange={() => setCurrentIndex(index)}
                    />
                    <label htmlFor={`slide${index + 1}`}></label>
                  </React.Fragment>
                ))}
              </div>
          </div>
        </section>

      <footer className="ContactUsContainer">
      <h2> Contact Us </h2>
        <div className="ContactUsImgDetails">
            <div className="ContactUsImg">
                <img src={Email}/>
                <img src={Call}/>
            </div>
            <div className="ContactUsDetails">
                <p> crimsonfalcons@gmail.com </p> 
                <p> 0916-584-5961 </p>
            </div>
        </div>
      </footer>
    </div>
    )
}

export default AboutUs;

