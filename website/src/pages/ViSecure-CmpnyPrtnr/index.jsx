import React, { useEffect } from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import CompanyPartnerMainPic from "../../assets/images/cmpnyPrtnerIntro.png";
import SMLLogo from "../../assets/images/smoothMovesLogo.png";

const CompanyPartner = () => {

    useEffect(() => {
        document.title = 'Company Partners';
       
        const missionTextContainer = document.querySelector(".missionTextContainer");
        const visionTextContainer = document.querySelector(".visionTextContainer");
    
        const handleMissionClick = () => {
          missionTextContainer.style.backgroundColor = "#8EC2E3";
        };
    
        const handleVisionClick = () => {
          visionTextContainer.style.backgroundColor = "#8ECD69";
        };
    
        missionTextContainer.addEventListener("click", handleMissionClick);
        visionTextContainer.addEventListener("click", handleVisionClick);
    
        return () => {
          missionTextContainer.removeEventListener("click", handleMissionClick);
          visionTextContainer.removeEventListener("click", handleVisionClick);
        };
      }, []);

    return(
      <div className='companyPartnerMain'>
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
  
        <div className="cmpnyPrtnrTop" id="cmpnyPrtner-Top">
         <img src={CompanyPartnerMainPic} alt="companyPartnerMainPic" />
          <div className="blackBoxContainer">
            <h1>SMOOTHMOVES INC.</h1>
          </div>
        </div>
  
        <div className="cmpnyPrtnrMainPage" id="cmpnyPrtnr-MainPage">
          <div className="contentContainer1">
            <div className="cmpnyPrtnrContentContainer">
              <div className="multiColoredContainer">
                <div className="recruitmentContainer">
                  <h2> RECRUITMENT </h2>
                </div>
                <div className="trainingContainer">
                  <h2> TRAINING </h2>
                </div>
                <div className="managingContainer">
                  <h2> MANAGING </h2>
                </div>
                <div className="outsourcingContainer">
                  <h2> OUTSOURCING </h2>
                </div>
              </div>
              <div className="textContainer">
                <h1> THE TEAM BEHIND SMOOTHMOVES, INC. </h1>
                <p>
                  We firmly believe that for an organization to progress and ultimately achieve its success,
                  it must be directed to achieve and realize its essence of existence.
                  <br />
                  Many enterprises bring in new ideas, products and services.
                  <br />
                  Thus, having the right people for the right job is sufficient.
                  However, we also believe that providing the best deserves no less than the best
                  and quality should not be compromised with quantity.
                  <br />
                  Our company, SmoothMoves, Inc. is a duly licensed Human Resources Development Organization primarily
                  engaged in RECRUITMENT, TRAINING and HIRING of semi-skilled and full-professional MANPOWER RESOURCES ready for DEPLOYMENT (permanent, project-based, contractual or temporary staff) in every conceivable type of business environment.
                </p>
              </div>
            </div>
            <div className="missionVisionContainer">
              <div className="missionContainer">
                <div className="missionHeaderContainer">
                  <h1>MISSION</h1>
                </div>
                <div className="missionTextContainer">
                  <p>
                    <span>
                      We look after the EMPLOYEE and provide them with basic and extensive training,
                      just compensation and proper benefits.
                    </span>
                    <br />
                    <span>
                      We ensure the growth of our CLIENT by protecting their interests,
                      providing consultations and delivering solutions.
                    </span>
                    <br />
                    <span>
                      We contribute to the development of the SOCIETY by providing right jobs,
                      equal opportunities and more avenues for individual growth.
                    </span>
                  </p>
                </div>
              </div>
              <div className="visionContainer">
                <div className="visionHeaderContainer">
                  <h1>VISION</h1>
                </div>
                <div className="visionTextContainer">
                  <p>
                    <h2> To be preferred manpower service company: </h2>
                    <br />
                    <span>
                      Of CLIENT for our quality outcome and unrivaled services.
                    </span>
                    <br />
                    <span>
                      Of EMPLOYEE for our career development, compensation and benefits.
                    </span>
                    <br />
                    <span>
                      Of the COMMUNITY for our contributions to uplift the economic and social status
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <img src={SMLLogo} alt="companyLogo" />
          </div>
        </div>
      </div>
    )
}

export default CompanyPartner;