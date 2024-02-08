import React, { useEffect } from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import ViSecureIcon from "../../assets/images/visecure-icon.png";

const Complete = () => {
    
    useEffect(() => {
        document.title = 'Complete Form';
      }, []);

    return(
        <div className="completeMain">
        <header>
         <Link to = "/main" className="icon">
            <img src= {ViSecureIcon} alt="ViSecure Icon" />
         </Link>
          <a href="#" className="logo">
            ViSecure
          </a>
          <Link to = "/company-partner" className="partnerCompany">
            Company Partner
          </Link>
          <Link to = "/about" className="AboutUs">
            About Us
          </Link>
        </header>
  
        <main>
          <div className="CompleteForm">
            <h1>Thank You!</h1>
            <p>
              Your meeting has been created successfully. <br /> Please wait for the Approval.
            </p>
            <button className="btnExit">Exit</button>
          </div>
        </main>
      </div>
    )
}

export default Complete;