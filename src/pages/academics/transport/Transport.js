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
          <h4
            style={{
              textAlign: "center",
              color: "#082a59",
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            TRANSPORT FACILITIES
          </h4>
          <p
            style={{
              background: "#a6153e",
              color: "white",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            As far as we talk about the transport facilities, we ensure that our
            school provides the utmost safety to the students. Moreover, we run
            busses and vans for our students so that they can safely reach on
            time.
            <br />
            <br/>
            A comfortable school bus with the required capacity to
            accommodate students.
            <br />
            <br/>
            School bus drivers are responsible for picking up and dropping off
            students at their designated stops within an hour of the school day
            starting and ending.
          </p>
        </div>
        <div className="transport-image">
          <img
            style={{ width: "100%", borderRadius: "20px" }}
            src={transport}
            alt="transport vehicles"
          />
        </div>
      </div>
    </div>
  );
}

export default Transport