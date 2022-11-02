import React from "react";
import { Link } from 'react-router-dom';
import './NavbarTwo.css';
import { AiTwotoneHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { HiAcademicCap } from "react-icons/hi";
import { RiBuilding4Fill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";

const NavbarTwo = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light navbartwo shadow-lg p-3 mb-5 bg-body rounded">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link" aria-current="page">
                  <span>
                    <AiTwotoneHome />
                  </span>
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>
                    <FcAbout className="aboutsvg" />
                  </span>
                  About
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/" class="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider custom-divider" />
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider custom-divider" />
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>
                    <HiAcademicCap />
                  </span>
                  Academics
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/" class="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider custom-divider" />
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider custom-divider" />
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>
                    <RiBuilding4Fill />
                  </span>
                  Admissions
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/" class="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider custom-divider" />
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider custom-divider" />
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  href="https://rhis.nletschool.com/site/login"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link nav-erp-btn"
                >
                  <span>
                    <GrResources className="nav-erp-svg" />
                  </span>
                  ERP login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarTwo;
