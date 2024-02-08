import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Form = () => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    console.log('Component is mounting.');

    const script = document.createElement('script');
    script.src =
    "https://c8ebv905.caspio.com/dp/5E49D000c5e9a59a4dc949e89974/emb";
    script.async = true;

    script.onload = () => {
      console.log('Caspio script loaded successfully.');
    };

    script.onerror = () => {
      console.error('Failed to load Caspio script.');
    };

    scriptRef.current = script;
    containerRef.current.innerHTML = ''; 
    containerRef.current.appendChild(script);

    return () => {
      console.log('Component is unmounting.');

      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, []); 

  return (
    <div className="formMain">
      <Link to="/main">
        <button className="goBackButton">Go Back</button>
      </Link>
      <h1>Visitor Form</h1>
      <p>Complete all the required fields on this visitor form.</p>

      <div ref={containerRef} className="container">
        {/* The Caspio script will be appended here */}
      </div>
    </div>
  );
};

export default Form;
