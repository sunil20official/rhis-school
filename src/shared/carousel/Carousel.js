import React from "react";
import "./Carousel.css";

import Typewriter from "typewriter-effect";

import img2 from "../../media/carousel-img-1.png";
import img3 from "../../media/carousel-img-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Carousel = () => {
  const onScroll = () => {
    document
      .getElementById("whatweoffer")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade mr-top-4"
        data-bs-ride="carousel"
        style={{
          marginTop: "0rem",
          position: "relative",
          left: "calc(-50vw + 50%)",
          width: "100vw",
        }}
        data-aos="zoom-out"
      >
        <div className="top-right-menu">
          <ul>
            <li>
              <Link to="/about">About</Link>
              <span className="vertical-bar">|</span>
            </li>
            <li>
              <Link to="/academics">Academics</Link>
              <span className="vertical-bar">|</span>
            </li>
            {/* <li>
              <Link to="/admission">Admissions</Link>
              <span className="vertical-bar">|</span>
            </li> */}
            <li>
              <Link to="/kidslife">Kid's Life</Link>
              <span className="vertical-bar">|</span>
            </li>
            {/* <li>
              <Link to="/parent-corner">Parent Corner</Link>
              <span className="vertical-bar">|</span>
            </li> */}
            <li>
              <Link to="/management">Management Team</Link>
              <span className="vertical-bar">|</span>
            </li>
          </ul>
        </div>
        {/* <div className="scl-name-main-container">
          <div className="scl-name-container">
            <h5 className="royalhills">
              <Typewriter
                options={{
                  strings: [`"Royal Hills"`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h5>
            <p className="inter-scl">Internatinal School</p>
          </div>
        </div> */}
        <div className="scroll-container">
          <div className="scroll" onClick={onScroll}>
            <FontAwesomeIcon className="arrow-scroll-down" icon={faDownLong} />
          </div>
        </div>
        <div className="carousel-inner">
          {/* <div className="carousel-item active">
            <img src={img1} className="d-block w-100 carousel-img" alt="..." />
          </div> */}
          <div className="carousel-item active">
            <img src={img2} className="d-block w-100 carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 carousel-img" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <div className="carousel-btn-container">
            <div className="carousel-btn">
              <FontAwesomeIcon icon={faDownLong} className="rotate-prev" />
            </div>
          </div>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <div className="carousel-btn-container">
            <div className="carousel-btn">
              <FontAwesomeIcon icon={faDownLong} className="rotate-next" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
