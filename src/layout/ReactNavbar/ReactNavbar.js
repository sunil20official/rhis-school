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

  link1Text = "Text 1",
  link2Text = "Text 2",
  link3Text = "Text 3",
  link4Text = "Text 4",
  link5Text = "Text 5",
  link6Text = "Text 6",
  link1Url = "/text1",
  link2Url = "/text2",
  link3Url = "/text3",
  link4Url = "/text4",
  link5Url = "/text5",
  link6Url = "/text6",
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
  const logoRef = useRef(null);
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);
  const link5 = useRef(null);
  const link6 = useRef(null);

  const menuToggleHandler = () => {
    if (menuToggle) {
      menuBurgerItem1.current.classList.remove("menuBurgerItem1");
      menuBurgerItem2.current.classList.remove("menuBurgerItem2");
      menuBurgerItem3.current.classList.remove("menuBurgerItem3");
      return setMenuToggle(false);
    }
    menuBurgerItem1.current.classList.add("menuBurgerItem1");
    menuBurgerItem2.current.classList.add("menuBurgerItem2");
    menuBurgerItem3.current.classList.add("menuBurgerItem3");
    setMenuToggle(true);
  };

  const closeBarOnClick = () => {
    menuBurgerItem1.current.classList.remove("menuBurgerItem1");
    menuBurgerItem2.current.classList.remove("menuBurgerItem2");
    menuBurgerItem3.current.classList.remove("menuBurgerItem3");
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

    logoRef.current.addEventListener("mouseover", () => {
      logoRef.current.style.filter = `drop-shadow(0 0 ${logoHoverSize} ${logoHoverColor})`;
    });

    logoRef.current.addEventListener("mouseleave", () => {
      logoRef.current.style.filter = `none`;
    });

    link1.current.addEventListener("mouseover", () => {
      link1.current.style.color = link1ColorHover;
    });

    link1.current.addEventListener("mouseleave", () => {
      link1.current.style.color = link1Color;
    });

    link2.current.addEventListener("mouseover", () => {
      link2.current.style.color = link2ColorHover;
    });

    link2.current.addEventListener("mouseleave", () => {
      link2.current.style.color = link2Color;
    });

    link3.current.addEventListener("mouseover", () => {
      link3.current.style.color = link3ColorHover;
    });

    link3.current.addEventListener("mouseleave", () => {
      link3.current.style.color = link3Color;
    });

    link4.current.addEventListener("mouseover", () => {
      link4.current.style.color = link4ColorHover;
    });

    link4.current.addEventListener("mouseleave", () => {
      link4.current.style.color = link4Color;
    });

    const search = document.querySelector("#searchIcon");
    const cart = document.querySelector("#cartIcon");
    const profile = document.querySelector("#profileIcon");

    if (searchIcon) {
      search.addEventListener("mouseover", () => {
        search.style.color = searchIconColorHover;
      });

      search.addEventListener("mouseleave", () => {
        search.style.color = searchIconColor;
      });
    }

    if (cartIcon) {
      cart.addEventListener("mouseover", () => {
        cart.style.color = cartIconColorHover;
      });

      cart.addEventListener("mouseleave", () => {
        cart.style.color = cartIconColor;
      });
    }

    if (profileIcon) {
      profile.addEventListener("mouseover", () => {
        profile.style.color = profileIconColorHover;
      });

      profile.addEventListener("mouseleave", () => {
        profile.style.color = profileIconColor;
      });
    }
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

      <div className="nav">
        {/* --------------------NAV PART 1-------------------------------- */}
        <div
          className="nav1"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundImage: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
            opacity:'0.9',
            flexDirection: nav1FlexDirection,
            alignItems: nav1alignItems,
            justifyContent: nav1justifyContent,
            transition: `all ${nav1Transition}s`,
          }}
        >
          <img
            className="logoReactNavbar"
            src={logo}
            style={{
              cursor: "pointer",
              width: logoWidth,
              height: logoHeight,
              transition: `all ${logoTransition}s`,
              animation: menuToggle
                ? `LogoleftIn ${logoAnimationTime}s`
                : `LogoleftOut ${logoAnimationTime}s`,
            }}
            ref={logoRef}
            alt="Not Passed"
          />
        </div>

        {/* --------------------NAV PART 2-------------------------------- */}
        <div
          className="nav2"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
            opacity:'0.9',
            flexDirection: nav2FlexDirection,
            alignItems: nav2alignItems,
            justifyContent: nav2justifyContent,
            transition: `all ${nav2Transition}s`,
          }}
        >
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
            to='/'
            onClick={closeBarOnClick}
          >
            Home
          </Link>
          <Link
            className="linksReactNavbar"
            ref={link2}
            style={{
              fontSize: link2Size,
              fontFamily: link2Family,
              color: link2Color,
              backgroundColor: link2BackgroundColor,
              textDecoration: link2Decoration,
              margin: link2Margin,
              padding: link2Padding,
              border: link2Border,
              transition: `all ${link2Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link2AnimationTime}s`
                : `LinkOut ${link2AnimationTime}s`,
            }}
            to='/about'
            onClick={closeBarOnClick}
          >
            About
          </Link>
          <Link
            className="linksReactNavbar"
            ref={link2}
            style={{
              fontSize: link2Size,
              fontFamily: link2Family,
              color: link2Color,
              backgroundColor: link2BackgroundColor,
              textDecoration: link2Decoration,
              margin: link2Margin,
              padding: link2Padding,
              border: link2Border,
              transition: `all ${link2Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link2AnimationTime}s`
                : `LinkOut ${link2AnimationTime}s`,
            }}
            to='/getintouch'
            onClick={closeBarOnClick}
          >
            Contact Us
          </Link>
        </div>

        {/* --------------------NAV PART 3-------------------------------- */}
        <div
          className="nav3"
          style={{
            transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
            backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
            opacity:'0.9',
            flexDirection: nav3FlexDirection,
            alignItems: nav3alignItems,
            justifyContent: nav3justifyContent,
            transition: `all ${nav3Transition}s`,
          }}
        >
          <Link
            className="linksReactNavbar"
            ref={link3}
            style={{
              fontSize: link3Size,
              fontFamily: link3Family,
              color: link3Color,
              backgroundColor: link3BackgroundColor,
              textDecoration: link3Decoration,
              margin: link3Margin,
              padding: link3Padding,
              border: link3Border,
              transition: `all ${link3Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link3AnimationTime}s`
                : `LinkOut ${link3AnimationTime}s`,
            }}
            to='/admission'
            onClick={closeBarOnClick}
          >
            Admission
          </Link>
          <Link
            className="linksReactNavbar"
            ref={link4}
            style={{
              fontSize: link4Size,
              fontFamily: link4Family,
              color: link4Color,
              backgroundColor: link4BackgroundColor,
              textDecoration: link4Decoration,
              margin: link4Margin,
              padding: link4Padding,
              border: link4Border,
              transition: `all ${link4Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link4AnimationTime}s`
                : `LinkOut ${link4AnimationTime}s`,
            }}
            to='/about'
            onClick={closeBarOnClick}
          >
            Management
          </Link>
          <Link
            className="linksReactNavbar"
            ref={link4}
            style={{
              fontSize: link4Size,
              fontFamily: link4Family,
              textAlign:'center',
              color: link4Color,
              backgroundColor: link4BackgroundColor,
              textDecoration: link4Decoration,
              margin: link4Margin,
              padding: link4Padding,
              border: link4Border,
              transition: `all ${link4Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link4AnimationTime}s`
                : `LinkOut ${link4AnimationTime}s`,
            }}
            to='about'
            onClick={closeBarOnClick}
          >
            Parent's Login
          </Link>
          <Link
            className="linksReactNavbar"
            ref={link4}
            style={{
              fontSize: link4Size,
              fontFamily: link4Family,
              textAlign:'center',
              color: link4Color,
              backgroundColor: link4BackgroundColor,
              textDecoration: link4Decoration,
              margin: link4Margin,
              padding: link4Padding,
              border: link4Border,
              transition: `all ${link4Transition}s`,
              animation: menuToggle
                ? `LinkIn ${link4AnimationTime}s`
                : `LinkOut ${link4AnimationTime}s`,
            }}
            to='about'
            onClick={closeBarOnClick}
          >
            Admin Login
          </Link>
        </div>

        {/* --------------------NAV PART 4-------------------------------- */}

      </div>
    </Fragment>
  );
};

export default ReactNavbar;