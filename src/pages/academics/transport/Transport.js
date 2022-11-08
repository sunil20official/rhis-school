import React from 'react';
import './Transport.css';
import transport from '../../../media/transport.jpg';

const Transport = () => {
  return (
    <div className="transport-page-cont">
      <h1
        style={{
          textAlign: "center",
          margin: "7rem auto 2rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Transport
      </h1>
      <div className="transport-container">
        <div className="transport-content">
          <p>
            As far as we talk about the transport facilities, we ensure that our
            school provides the utmost safety to the students. Moreover, we run
            busses and vans for our students so that they can safely reach on
            time.
          </p>
        </div>
        <div className="transport-image">
          <img style={{width:"100%",borderRadius:"20px"}} src={transport} alt="transport vehicles"/>
        </div>
      </div>
    </div>
  );
}

export default Transport