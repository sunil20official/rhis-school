import React from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

const RhisYouTube = () => {
	return (
    <>
      <div className="youtube">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-md-6 youtube-text">
            <h3
              style={{
                margin: "2rem auto",
                paddingBottom: "1rem",
                textAlign: "center",
                borderBottom: "3px solid #f89503",
                width: "75%",
              }}
            >
              <span>SHAPING FUTURE</span>
            </h3>

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
            <button className="btn px-4 py-2 m-4">
              <a
                className="text-white"
                href="https://www.youtube.com/channel/UCDWrh2uxMcfctahqfEYGrRg"
                target="_blank"
                rel="noreferrer"
              >
                Visit Our Channel
              </a>
            </button>
          </div>
          <div className="col-md-6">
            <ReactPlayer
              width="100%"
              height="400px"
              controls
              url="https://youtu.be/lFsrFjXF83w"
              onReady={() => console.log("onReady callback")}
              onStart={() => console.log("onStart callback")}
              onPause={() => console.log("onPause callback")}
              onEnded={() => console.log("onEnded callback")}
              onError={() => console.log("onError callback")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RhisYouTube;

// https://www.youtube.com/watch?v=lFsrFjXF83w&ab_channel=KIDZEE%2CRoyalHillsInternationalSchool%F0%9F%93%92%F0%9F%93%9D
// lFsrFjXF83w&ab
// https://youtu.be/lFsrFjXF83w
