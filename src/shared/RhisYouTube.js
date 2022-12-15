import React from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

const RhisYouTube = () => {
	return (
    <>
      <div className="youtube">
        <div className="row" style={{ alignItems: "center" }}>
          <h1 className="shaping-future-heading">SHAPING FUTURE</h1>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}} className="col-12 youtube-text">
            <h6 style={{ lineHeight: "25px" }}>
              Lerro Learning Foundation, registered on 17th May 2021, in Patna
              laid a foundation by establishing Royal Hills International School
              and Royal Hills International School Junior in Sitamarhi, with
              objective of establishing educational institutions with holistic
              educations. The prime objective of the of Lerro Learning
              Foundation is to provide facilities for quality education to boys
              and girls of all ages by establishing schools that offer
              pre-primary to middle stage education.
            </h6>
            {/* <button className="btn px-4 py-2 m-4">
              <a
                className="text-white"
                href="!"
                target="_blank"
                rel="noreferrer"
              >
                Visit Our Channel
              </a>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RhisYouTube;