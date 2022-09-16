import React, { useState, useRef, Fragment, useEffect } from "react";
import "./ReactNavbar.css";
import { Link } from "react-router-dom";
const ReactNavbar = ({
  burgerColor = "black",
  burgerColorHover = burgerColor,
  navColor1 = "rgb(35, 35, 35)",
  navColor2 = navColor1,
  navColor3 = navColor2,
  navColor4 = navColor3,
  logo,
  logoWidth = "100px",
  logoHeight = "unset",
  logoHoverSize = "15px",
  logoHoverColor = "green",
  logoTransition = 0.5,
  logoAnimationTime = 1,

  nav1FlexDirection = "row",
  nav2FlexDirection = "row",
  nav3FlexDirection = "row",
  nav4FlexDirection = "row",

  nav1alignItems = "center",
  nav1justifyContent = "center",
  nav2alignItems = "center",
  nav2justifyContent = "center",
  nav3alignItems = "center",
  nav3justifyContent = "center",
  nav4alignItems = "center",
  nav4justifyContent = "center",

  nav1Transition = 0.4,
  nav2Transition = nav1Transition + 0.6,
  nav3Transition = nav2Transition + 0.6,
  nav4Transition = nav3Transition + 0.6,

  link1Size = "1vmax",
  link2Size = link1Size,
  link3Size = link2Size,
  link4Size = link3Size,
  link1Family = "Roboto",
  link2Family = link1Family,
  link3Family = link2Family,
  link4Family = link3Family,
  link1Color = "black",
  link2Color = link1Color,
  link3Color = link2Color,
  link4Color = link3Color,

  link1BackgroundColor = "",
  link2BackgroundColor = link1BackgroundColor,
  link3BackgroundColor = link2BackgroundColor,
  link4BackgroundColor = link3BackgroundColor,

  link1ColorHover = link1Color,
  link2ColorHover = link1ColorHover,
  link3ColorHover = link2ColorHover,
  link4ColorHover = link3ColorHover,
  link1Decoration = "none",
  link2Decoration = link1Decoration,
  link3Decoration = link2Decoration,
  link4Decoration = link3Decoration,
  link1Margin = "0",
  link2Margin = link1Margin,
  link3Margin = link2Margin,
  link4Margin = link3Margin,
  link1Padding = "0",
  link2Padding = link1Padding,
  link3Padding = link2Padding,
  link4Padding = link3Padding,
  link1Border = "none",
  link2Border = link1Border,
  link3Border = link2Border,
  link4Border = link3Border,
  link1Transition = 0.5,
  link2Transition = link1Transition,
  link3Transition = link2Transition,
  link4Transition = link3Transition,
  link1AnimationTime = 1.5,
  link2AnimationTime = link1AnimationTime + 0.5,
  link3AnimationTime = link2AnimationTime + 0.5,
  link4AnimationTime = link3AnimationTime + 0.5,

  searchIcon = false,
  SearchIconElement,
  searchIconMargin = "0",
  searchIconUrl = "/Search",
  searchIconSize = "2vmax",
  searchIconColor = "white",
  searchIconColorHover = searchIconColor,
  searchIconTransition = 0.5,
  searchIconAnimationTime = 2,

  cartIcon = false,
  CartIconElement,
  cartIconMargin = "0",
  cartIconUrl = "/Cart",
  cartIconSize = "2vmax",
  cartIconColor = "white",
  cartIconColorHover = cartIconColor,
  cartIconTransition = 0.5,
  cartIconAnimationTime = searchIconAnimationTime + 0.5,

  profileIcon = false,
  ProfileIconElement,
  profileIconMargin = "0",
  profileIconUrl = "/Account",
  profileIconSize = "2.5vmax",
  profileIconColor = "white",
  profileIconColorHover = profileIconColor,
  profileIconTransition = 0.5,
  profileIconAnimationTime = cartIconAnimationTime + 0.5,
}) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const menuBurgerItem1 = useRef(null);
  const menuBurgerItem2 = useRef(null);
  const menuBurgerItem3 = useRef(null);
  const menuBurger = useRef(null);
  const nav100 = useRef(null);
  const logoRef = useRef(null);
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const menuToggleHandler = () => {
    if (menuToggle) {
      menuBurgerItem1.current.classList.remove("menuBurgerItem1");
      menuBurgerItem2.current.classList.remove("menuBurgerItem2");
      menuBurgerItem3.current.classList.remove("menuBurgerItem3");
      nav100.current.classList.remove("nav100");

      return setMenuToggle(false);
    }
    menuBurgerItem1.current.classList.add("menuBurgerItem1");
    menuBurgerItem2.current.classList.add("menuBurgerItem2");
    menuBurgerItem3.current.classList.add("menuBurgerItem3");
    nav100.current.classList.add("nav100");
    setMenuToggle(true);
  };

  const closeBarOnClick = () => {
    menuBurgerItem1.current.classList.remove("menuBurgerItem1");
    menuBurgerItem2.current.classList.remove("menuBurgerItem2");
    menuBurgerItem3.current.classList.remove("menuBurgerItem3");
    nav100.current.classList.remove("nav100");
    return setMenuToggle(false);
  };

  useEffect(() => {
    menuBurger.current.addEventListener("mouseover", () => {
      menuBurgerItem1.current.style.backgroundColor = burgerColorHover;
      menuBurgerItem2.current.style.backgroundColor = burgerColorHover;
      menuBurgerItem3.current.style.backgroundColor = burgerColorHover;
    });
    menuBurger.current.addEventListener("mouseleave", () => {
      menuBurgerItem1.current.style.backgroundColor = burgerColor;
      menuBurgerItem2.current.style.backgroundColor = burgerColor;
      menuBurgerItem3.current.style.backgroundColor = burgerColor;
    });
  });

  return (
    <Fragment>
      <div className="menuBurger" ref={menuBurger} onClick={menuToggleHandler}>
        <div
          ref={menuBurgerItem1}
          className="menuBurgerItem"
          style={{ backgroundColor: burgerColor }}
        ></div>
        <div
          ref={menuBurgerItem2}
          className="menuBurgerItem"
          style={{ backgroundColor: burgerColor }}
        ></div>
        <div
          ref={menuBurgerItem3}
          className="menuBurgerItem"
          style={{ backgroundColor: burgerColor }}
        ></div>
      </div>

      <div ref={nav100} className="nav">
        {/* --------------------NAV PART 1-------------------------------- */}
        <div
          className="nav1"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            opacity: "0.8",
            background: "whitesmoke",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: nav1justifyContent,
            transition: `all ${nav1Transition}s`,
          }}
        >
          {/* -------------------------------------- Home link on large screen ------------------------------ */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            onClick={closeBarOnClick}
          >
            <Link
              to="/"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Home
            </Link>
          </Link>

          {/* -------------------------- About Us dropdown links for large screen ----------------------- */}
          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown font-11"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </button>
              <ul
                class="dropdown-menu custom-dropdown-menu about-transform"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="/about/rhis"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    RHIS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/roots"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Roots – A Play School
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/directordesk"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Director’s Desk
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/principalmsg"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Principal Message
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/social-initiatives"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Social Initiatives
                  </Link>
                </li>
              </ul>
            </div>
          </Link>

          {/* -------------------------- academics dropdown links for large screen ----------------------- */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown font-11"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academics
              </button>
              <ul
                class="dropdown-menu custom-dropdown-menu academics-transform"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="/academics/academic-program"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Academic Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academics/cocurricular-activities"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Co-curricular Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academics/transport"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Transport
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academics/we-care"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    We Care
                  </Link>
                </li>
              </ul>
            </div>
          </Link>

          {/* -------------------------- admission dropdown links for large screen ----------------------- */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown font-11"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admission
              </button>
              <ul
                class="dropdown-menu custom-dropdown-menu admission-transform"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="/admission/admission-procedure"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Admission Procedure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission/fee-structure"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Fee Structure
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
          {/*  */}
        </div>

        {/* --------------------NAV PART 2-------------------------------- */}
        <div
          className="nav2"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundColor: "whitesmoke",
            opacity: "0.8",
            flexDirection: nav2FlexDirection,
            alignItems: nav2alignItems,
            justifyContent: nav2justifyContent,
            transition: `all ${nav2Transition}s`,
          }}
        >
          {/* -------------------------- career page  for large screen ----------------------- */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/careers"
            onClick={closeBarOnClick}
          >
            <Link
              to="/careers"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Careers
            </Link>
          </Link>

          {/* ------------------------------------- Gallery Page on large screen --------------------------------- */}
          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/gallery"
            onClick={closeBarOnClick}
          >
            <Link
              to="/gallery"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Gallery
            </Link>
          </Link>

          {/* -------------------------------------- Franchise page on large school ------------------------------ */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/franchise"
            onClick={closeBarOnClick}
          >
            <Link
              to="/franchise"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Franchise
            </Link>
          </Link>

          {/* -------------------------------------- Contact Us page on large school ------------------------------ */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/contact-us"
            onClick={closeBarOnClick}
          >
            <Link
              to="/contact-us"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Contact Us
            </Link>
          </Link>

          {/* ---------------------  media page on large screen --------------------- */}
          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown font-11"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Media
              </button>
              <ul
                class="dropdown-menu custom-dropdown-menu media-transform"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="/media/news"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/media/events"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
        </div>

        {/* ----------------------------------------- NAV PART 3 ------------------------------------------- */}
        <div
          className="nav3"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundColor: "whitesmoke",
            opacity: "0.8",
            flexDirection: nav3FlexDirection,
            alignItems: "start",
            justifyContent: nav3justifyContent,
            transition: `all ${nav3Transition}s`,
          }}
        >
          <a
            href="https://rhis.nletschool.com/site/login"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn bg-blue">
              ERP Login
            </button>
          </a>
        </div>
      </div>

      {/* ----------------------  this navbar will be visible on the small screen i.e., for the mobile only view ------------------ */}

      <div className="nav-mobile">
        {/* --------------------NAV PART 2 for mobile screen  -------------------------------- */}
        <div
          className="nav2"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundColor: "whitesmoke",
            flexDirection: nav2FlexDirection,
            alignItems: nav2alignItems,
            justifyContent: nav2justifyContent,
            transition: `all ${nav2Transition}s`,
          }}
        >
          {/* ----------------------------------- ERP login link ---------------------------------- */}

          <a
            href="https://rhis.nletschool.com/site/login"
            target="_blank"
            rel="noreferrer"
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            onClick={closeBarOnClick}
          >
            <a
              href="https://rhis.nletschool.com/site/login"
              target="_blank"
              rel="noreferrer"
              className="btn bg-blue custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              ERP Login
            </a>
          </a>

          {/* ----------------------------------- Home link ---------------------------------- */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <Link
              to="/"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Home
            </Link>
          </Link>

          {/*------------------------------------- about us dropdown links --------------------------------  */}

          <Link
            className="linksReactNavbar"
            ref={link1}
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown font-11"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </button>
              <ul
                class="dropdown-menu custom-dropdown-menu trans-about"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="/about/rhis"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Royal Hills International School
                  </Link>
                </li>
                <li>
                  <Link
                    to="about/roots"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Roots – A Play School
                  </Link>
                </li>
                <li>
                  <Link
                    to="about/directordesk"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Director’s Desk
                  </Link>
                </li>
                <li>
                  <Link
                    to="about/principalmsg"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Principal Message
                  </Link>
                </li>
                <li>
                  <Link
                    to="about/social-initiatives"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Social Initiatives
                  </Link>
                </li>
              </ul>
            </div>
          </Link>

          {/* ----------------------------------- academics links dropdown ---------------------------------- */}

          <Link
            className="linksReactNavbar"
            ref={link1}
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown font-11"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academics
              </button>
              <ul
                class="dropdown-menu custom-dropdown-menu trans-academics"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="/academics/academic-program"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Academic Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academics/cocurricular-activities"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Co-curricular Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Transport
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    We Care
                  </Link>
                </li>
              </ul>
            </div>
          </Link>

          {/* ----------------------------------- addmission links dropdown ---------------------------------- */}

          <Link
            className="linksReactNavbar"
            ref={link1}
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown font-11"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admission
              </button>
              <ul
                class="dropdown-menu custom-dropdown-menu trans-admission"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="/about"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Admission Procedure
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Fee Structure
                  </Link>
                </li>
              </ul>
            </div>
          </Link>

          {/* ----------------------------------- Career link ---------------------------------- */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/careers"
            // onClick={closeBarOnClick}
          >
            <Link
              to="/careers"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Careers
            </Link>
          </Link>

          {/* ----------------------------------- Gallery link ---------------------------------- */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/gallery"
            // onClick={closeBarOnClick}
          >
            <Link
              to="/gallery"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Gallery
            </Link>
          </Link>

          {/* ----------------------------------- Franchise link ---------------------------------- */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/franchise"
            // onClick={closeBarOnClick}
          >
            <Link
              to="/franchise"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Franchise
            </Link>
          </Link>

          {/* ----------------------------------- Contact Us link ---------------------------------- */}

          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/contact-us"
            // onClick={closeBarOnClick}
          >
            <Link
              to="/contact-us"
              className="btn btn-secondary custom-dropdown font-11"
              type="button"
              onClick={closeBarOnClick}
            >
              Contact Us
            </Link>
          </Link>
          <Link
            className="linksReactNavbar"
            style={{
              fontSize: link1Size,
              fontFamily: link1Family,
              color: link1Color,
              backgroundColor: link1BackgroundColor,
              textDecoration: link1Decoration,
              margin: link1Margin,
              padding: link1Padding,
              border: link1Border,
              transition: `all ${link1Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link1AnimationTime}s`
                : `LinkOut ${link1AnimationTime}s`,
            }}
            to="/"
            // onClick={closeBarOnClick}
          >
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown font-11"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Media
              </button>
              <ul
                class="dropdown-menu custom-dropdown-menu media-transform"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="/media/news"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/media/events"
                    class="dropdown-item"
                    onClick={closeBarOnClick}
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ReactNavbar;
