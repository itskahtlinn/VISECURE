import React, { useEffect } from 'react';
import "./index.scss";
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import { Link } from 'react-router-dom';

const Visitor = () => {
    useEffect(() => {
        document.title = 'Visecure Website';
      }, []);
      
    return(
      <div className="visitorMain">
      <header>
        <Link to = "/main" className="icon">
            <img src={ViSecureIcon} alt="ViSecure Icon" />
        </Link>
        <a href="#" className="logo">
          ViSecure
        </a>
        <Link to = "/company-partner" className="Company">
          Partner Company
        </Link>
        <Link to = "/about" className="AboutUs">
          About Us
        </Link>
        <a href="#" className="FAQ">
          FAQ's
        </a>
      </header>
      <main>
        <div className="GreetingForm">
          <h1>Good day, Visitors!</h1>
          <p>
            To ensure your safety, please take a moment to fill out our visitor
            form. We appreciate your understanding and cooperation.
          </p>
          <p>Thank you!</p>
          <Link to = "/form"  className="btnAnswerForm">
            Visitor Form
          </Link>
        </div>
      </main>
    </div>
    )
}

export default Visitor;