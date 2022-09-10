import React from "react";
import ReactNavbar from "../layout/ReactNavbar/ReactNavbar"
import logo from '../media/rhis-logo.jpeg';

const Header = () => {
  return (
    <>
      <ReactNavbar 
      burgerColor="#337c87"
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
