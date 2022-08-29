import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import logo from '../../../media/footerLogo.png';

const TopBar = () => {
  return (
    <div className="fixed-top-bar">
      <div className="logo-container">
        <img className="logo-image" src={logo} alt="logo" />
      </div>
      <div className="list-container">
        <ul>
          <li>
            <Link to="/">12345679</Link>
          </li>
          <li>
            <Link to="/">Admissions</Link>
          </li>
          <li>
            <Link to="/">Paretn Login</Link>
          </li>
          <li>
            <Link to="/">Public Mandate Disclosure</Link>
          </li>
          <li>
            <Link to="/google.com">A</Link>
          </li>
          <li>
            <Link to="/">B</Link>
          </li>
          <li>
            <Link to="/">C</Link>
          </li>
          <li>
            <Link to="/">D</Link>
          </li>
          <li>
            <Link to="/">E</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
