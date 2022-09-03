import React from "react";

import Carousel from "../shared/carousel/Carousel";
import Testimonials from "../shared/Testimonials";
import WhatWeOffer from "../shared/whatWeOffer/WhatWeOffer";
import Staff from "../shared/staff/Staff";
import CountUp from "../shared/countup/CountUp";

const Home = () => {
  
  return (
    <>
    <Carousel/>
    <div className="container-lg">
    
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
