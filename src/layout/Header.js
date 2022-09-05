import React from "react";
import ReactNavbar from "../layout/ReactNavbar/ReactNavbar"
import logo from '../media/logo.png';

const Header = () => {
  return (
    <>
      <ReactNavbar 
      burgerColor="#f4c119"
      burgerColorHover="#2366b5"
      navColor1="white"
      logo={logo}

      navColor2="white"

      nav2FlexDirection="column"
      nav3FlexDirection="column"
      nav4FlexDirection="column"

      link1Size="16px"
      link2Size="16px"
      link3Size="16px"
      link4Size="16px"
      link5Size="16px"
      link6Size="16px"

      link1Family="Poppins"
      link2Family="Poppins"
      link3Family="Poppins"
      link4Family="Poppins"
      link5Family="Poppins"
      link6Family="Poppins"

      link1ColorHover="blue"
      link2ColorHover="blue"
      link3ColorHover="red"
      link4ColorHover="red"
      link5ColorHover="voilet"
      link6ColorHover="voilet"

      link1Margin="10px"
      link1Padding="5px"

      />
    </>
  );
};

export default Header;

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light" data-aos="fade-right">
        <div className="container-fluid">
          <a className="navbar-brand scale-up-center" href="#!">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flexDirection: "row-reverse" }}
          >
            <ul className="navbar-nav mb-2 mb-lg-0 nav-content">
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  className="dropdown-menu nav-content-dropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Sports Facilities
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Events and Functions
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admissions
                </a>
                <ul
                  className="dropdown-menu nav-content-dropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Online Admissions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Admissions Forms
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Documents Required
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </a>
                <ul
                  className="dropdown-menu nav-content-dropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Syllabus
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Faculty 
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Parent's Login
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item" style={{padding:"5px 0px"}}>
                <button
                  type="button"
                  className="btn btn-info nav-link get-in-touch"
                  style={{
                    borderRadius: "10px",
                    padding: "5px 0px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    border:"none",
                    boxShadow: 'none',

                  }}
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
