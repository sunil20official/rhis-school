import React from "react";
import "../rhis/Rhis.css";
import rootImg from "../../../media/rhis-image.png";

const Root = () => {
  return (
    <div className="main-container-rhis">
      <div className="rhis-container">
        <div
          className="heading-cont"
          style={{ borderBottom: "3px solid rgb(255, 112, 0)" }}
        >
          <h1
            style={{
              textAlign: "center",
              margin: "2rem auto 0.5rem",
              letterSpacing: "3px",
            }}
          >
            Roots
          </h1>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            {" "}
            A Playway School
          </p>
        </div>
        <div className="rhis-img-cont">
          <img
            className="rhis-img"
            src={rootImg}
            alt="royal hills internation school"
          />
        </div>
        <div>
          <p className="rhis-text">
            Royal Hills International School Junior was established to provide a
            platform of great opportunities to every child. We endeavor to
            provide exceptional care to our children in a safe and secure
            environment where children feel loved and develop to their fullest
            potential. Here children are not just given wings, but the school
            also ensures that they develop strong roots. Most importantly,
            children are loved and made to feel cherished so that they approach
            life with a positive attitude.
          </p>
          <p className="rhis-text">
            The curriculum at RHIS Junior is conceived in such a way that
            everything the child learns at the pre school prepares him for an
            easy transition into Grade 1 in any formal schools. This smooth step
            towards a bigger future is accomplished via series of activities
            that are woven into academic programs.
          </p>
          <p className="rhis-text">
            We are here for upgrading all round development of the children and
            facilitating the youthful minds to cope with ever — growing
            challenges of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Root;
