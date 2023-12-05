import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import BG2 from "../../assets/images/bg2.png";


const Admin = () => {
    useEffect(() => {
        document.title = 'Visecure Website';
      }, []);

    return(
        <div className="adminMain"> 
            <header>
            <Link to = "/main" className="icon">
            <img src= {ViSecureIcon} alt="ViSecure Icon" />
            </Link>
            <a href="#" className="logo">
            ViSecure
            </a>
            </header>

        <section className="LogIn" id="LogIn">
            <div id="container1">
            <img src={BG2}  alt="bg2" />

            <div className="content2">
                <Link to ="/main"  className="icon2">
                <img src={ViSecureIcon}  alt="ViSecure Icon" />
                </Link>
                <h3>Hi, Admin!</h3>
            </div>
            </div>
        </section>   
        </div>
    )
}

export default Admin;
