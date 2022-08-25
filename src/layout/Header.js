import React from "react";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand scale-up-center" href="#!">
            LOGO
          </a>
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
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flexDirection: "row-reverse" }}
          >
            <ul class="navbar-nav mb-2 mb-lg-0 nav-content">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="./"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admissions
                </a>
                <ul
                  class="dropdown-menu nav-content-dropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#!">
                      Online Admissions
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Admissions Forms
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Documents Required
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-info nav-link"
                  style={{
                    borderRadius: "10px",
                    padding: "5px 10px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
