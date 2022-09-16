import React from "react";
import "./Footer.css";
import lerroLogo from "../../media/lerroLogo.png";

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillTwitterCircle,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="lerro-container">
          <img
            style={{
              width: "200px",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
            src={lerroLogo}
            alt="lerro learning foundation logo"
          />
          <div className="news-letter">
            <p className="lerro-heading"> About Lerro Foundation</p>
            <p className="lerro-intro">
              Lerro Learning Foundation , registered on 17th may 2021 , in laid
              a foundation by establishing Royal Hills Internation School and
              RHIS-Junior - A Play School in Sitamarhi with objective of
              establishing education institutions with holistic educations. The
              prime objective of the of Lerro Learning Foundation is to provide
              facilities for quality education to boys and girls of all ages by
              establishing schools that offer pre-primary to middle stage
              education.
            </p>
          </div>
        </div>

        <div className="academics-links-container">
          <h5>ACADEMICS</h5>
          <ul className="useful-links-list">
            <li>
              <Link to="/">CBSE</Link>
            </li>
            <li>
              <Link to="/">ICSE</Link>
            </li>
            <li>
              <Link to="/">IGCSE</Link>
            </li>
            <li>
              <Link to="/">IB</Link>
            </li>
          </ul>
        </div>
        <div className="useful-links-container">
          <h5>USEFUL LINKS </h5>
          <ul className="useful-links-list">
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Career</Link>
            </li>
          </ul>
        </div>
        <div className="social-links-container">
          <h5 style={{ marginTop: "10px" }}> GET SOCIAL </h5>
          <ul className="useful-links-list">
            <li>
              <Link to="/">
                <AiOutlineInstagram style={{ fontSize: "30px" }} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FiFacebook style={{ fontSize: "30px" }} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiOutlineLinkedin style={{ fontSize: "30px" }} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillTwitterCircle style={{ fontSize: "30px" }} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiOutlineYoutube style={{ fontSize: "30px" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line"></hr>
      <div className="bottom">
        <p className="bottom-links">
          <Link to="/">Site Map</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of use</Link>
        </p>
        <p className="copyright">
          copyright 2022 Royal Hills Internationsl School , All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
