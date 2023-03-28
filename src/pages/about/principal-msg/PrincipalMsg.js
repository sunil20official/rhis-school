import React from 'react';
import '../../../shared/management/Management.css';
import principal from '../../../media/principal-img.jpg';

const PrincipalMsg = () => {
	return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "6rem auto 0rem",
          padding: "2rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Principal's Message
      </h1>
      <div className="management-container">
        <div className="man-image-container">
          <img
            className="management-image"
            src={principal}
            alt="principal of school"
          />
        </div>
        <div className="man-message-container">
          <h4
            style={{
              fontWeight: "700",
              marginLeft: "0px",
              color: "rgb(5, 64, 153)",
            }}
          >
            {" "}
            Mr. Abhay Kumar Pandey{" "}
          </h4>
          <h6
            style={{
              marginBottom: "0px",
              fontWeight: "700",
              marginLeft: "0px",
            }}
          >
            Principal,
          </h6>
          <p style={{ color: "rgb(92, 147, 210)" }}> RHIS Sitamarhi</p>
          <p className="management-message">
            It is a matter of great pleasure, and honor for Royal Hills
            International School, Sitamarhi to welcome our new Principal{" "}
            <strong>Mr. Abhay Kumar Pandey</strong>. He has previously worked
            for more than 18 years as a teaching faculty in National Defence
            Academy and Naval engineering College and more than 5 years as a
            core management member in one of the renowned engineering colleges
            of Uttar Pradesh.
            <br />
            <br />
            As a faculty he has remained successful in delivering positive
            results. He is very bold, and brave man with great ideology,
            determinism, and vision. On behalf of the entire administration,
            faculty, and student body, wholeheartedly we welcome him in our
            institution. We hope that with his energy, enthusiasm, and focus on
            education, and learning our institute achieves greater excellence.
            Under his leadership and guidance, may we reach the next
            levels of glory.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrincipalMsg;
