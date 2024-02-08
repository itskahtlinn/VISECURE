import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import BG2 from "../../assets/images/bg2.png";


const Admin = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        document.title = 'Visecure Website';
        const script = document.createElement('script');
        script.src = 'https://c3dcq066.caspio.com/dp/0AF5D00087e7be35a0f14936ba9a/emb';
        script.type = 'text/javascript';
        script.async = true;
    
        containerRef.current.appendChild(script);
    
        document.title = 'Visecure Website';
    
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
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
                <div  ref={containerRef} className="content2">
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
