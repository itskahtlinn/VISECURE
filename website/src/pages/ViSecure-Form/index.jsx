import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

const Form = () => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://c2hcz115.caspio.com/dp/A427D000c5e9a59a4dc949e89974/emb';
    script.async = true;

    scriptRef.current = script;

    containerRef.current.appendChild(script);

    return () => {
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
}

export default Form;
