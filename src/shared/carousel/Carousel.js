import React from "react";
import "./Carousel.css";
import img1 from "../../media/artem-kniaz-DqgMHzeio7g-unsplash.jpg";
import img2 from "../../media/robert-collins-tvc5imO5pXk-unsplash.jpg";
import img3 from "../../media/sigmund-OV44gxH71DU-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom';

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ marginTop: "0rem", position:"relative" }}
        data-aos="zoom-out"
      >
        <div className="top-right-menu">
          <ul>
            <li>
              <Link to='/about'>About</Link><span className="vertical-bar">|</span>
            </li>
            <li>
              <Link to='/academics'>Academics</Link><span className="vertical-bar">|</span>
            </li>
            <li>
              <Link to='/admissions'>Admissions</Link><span className="vertical-bar">|</span>
            </li>
            <li>
              <Link to='/kidslife'>Kid's Life</Link><span className="vertical-bar">|</span>
            </li>
            <li>
              <Link to='/parent-corner'>Parent Corner</Link><span className="vertical-bar">|</span>
            </li>
            <li>
              <Link to='/management'>Management Team</Link><span className="vertical-bar">|</span>
            </li>
          </ul>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 carousel-img" alt="..." />
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
              <FontAwesomeIcon icon={faDownLong} className='rotate-prev' />
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
              <FontAwesomeIcon icon={faDownLong} className='rotate-next' />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
