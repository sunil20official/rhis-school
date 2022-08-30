import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import img1 from "../media/artem-kniaz-DqgMHzeio7g-unsplash.jpg";
import img2 from "../media/robert-collins-tvc5imO5pXk-unsplash.jpg";
import img3 from "../media/sigmund-OV44gxH71DU-unsplash.jpg";
import Carousel from "../shared/carousel/Carousel";
import Testimonials from "../shared/Testimonials";
import WhatWeOffer from "../shared/whatWeOffer/WhatWeOffer";
import Staff from "../shared/staff/Staff";
import CountUp from "../shared/countup/CountUp";

const Home = () => {
  const onScroll = () => {
    document
      .getElementById("whatweoffer")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <>
    <Carousel/>
    <div className="container-lg">
    <div className="scroll-container">
        <div className="scroll" onClick={onScroll}>
          <FontAwesomeIcon icon={faDownLong} />
        </div>
      </div>
      <WhatWeOffer />
      <div id="story" className="story-section" data-aos="zoom-out">
        <h1>Our Story</h1>
        <p className="story-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <Testimonials/>
      <CountUp/>
      <Staff/>
    </div>
    </>
  );
};

export default Home;
