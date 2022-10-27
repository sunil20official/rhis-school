import React from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

const RhisYouTube = () => {
	return (
    <>
      <div className="youtube">
        <div className="row" style={{alignItems:"center"}}>
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

            <h6 style={{lineHeight:"50px"}}>
              We have grown into one of India's leading group of K-12
              institutions, providing academic excellence to our students. This
              is facilitated by dedicated educators who are trained to
              channelize their energy and resources towards child-centered
              learning. We have also reached out internationally, to establish
              friendship institutions all across the globe.
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
