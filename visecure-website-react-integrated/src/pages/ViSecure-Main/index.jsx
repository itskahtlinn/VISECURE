import React, { useEffect } from 'react';
import "./index.scss";
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import BG2 from "../../assets/images/bg2.png";
import { Link } from 'react-router-dom';

const Main = () => {
  useEffect(() => {
    document.title = 'Visecure Website';

    const showScrollDown = () => {
      const scrollDownElement = document.getElementById('scroll-down');
      if (scrollDownElement) {
        scrollDownElement.style.display = 'block';
      }
    };

    const hideScrollDown = () => {
      const scrollDownElement = document.getElementById('scroll-down');
      if (scrollDownElement) {
        scrollDownElement.style.display = 'none';
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        hideScrollDown();
      } else {
        showScrollDown();
      }
    };

    window.addEventListener('scroll', handleScroll);

    const backButtonElement = document.getElementById('back-button');
    if (backButtonElement) {
      backButtonElement.addEventListener('click', () => {
        window.history.back();
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (backButtonElement) {
        backButtonElement.removeEventListener('click', () => {
          window.history.back();
        });
      }
    };
  }, []);

    return(
        <div className = "mainContainer">
        <header>
          <Link to = "/main" className="icon">
            <img src={ViSecureIcon} alt="ViSecure Icon" />
          </Link>
          <a href="#" className= "logo">
            ViSecure
          </a>
          <Link to = "/company-partner"  className="Company">
            Company Partner
          </Link>
          <Link to = "/about" className="AboutUs">
            About Us
          </Link>
        </header>
  
        <section className="home" id="home">
          <div className="content" >
            <h1>
              WELCOME TO <br /> VISECURE SYSTEM
            </h1>
            <p className="scrolldown"> Scroll down to see more </p>
          </div>
        </section>
  
        <section className="secpage"  id="sec-page">
          <div className="container1">
            <img src={BG2} alt="bg2" />
  
            <div className="content2">
              <Link to = "/main" className="icon2" >
                <img src={ViSecureIcon} alt="ViSecure Icon" />
              </Link>
              <h3> Hi, Welcome! </h3>
              <p> Please click your destination </p>
              <Link to = "/admin">
                <button className="button">Admin</button>
              </Link>
              <Link to = "/visitor">
                <button className="button">Visitors</button>
              </Link>
            </div>
          </div>
        </section>
  
        <footer>
          <info>
            Visitor Management System <br /> -Crimson Falcons-
          </info>
        </footer>
      </div>
    )
}

export default Main;