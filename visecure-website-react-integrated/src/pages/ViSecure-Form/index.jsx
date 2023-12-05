import React, { useEffect } from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';

const Form = () => {
    useEffect(() => {
        document.title = 'Caspio Form Container';
      }, []);

    return(
      <div className="formMain">
        <Link to = "/main">
          <button className="goBackButton">Go Back</button>
        </Link>
        <h1>Visitor Form</h1>
        <p>Complete all the required fields on this visitor form.</p>

        <div id="container">
            {/*insert script here*/}
        </div>
      </div>
    )
}

export default Form;