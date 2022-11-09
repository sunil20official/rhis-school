import React from "react";
import "./Gallery.css";
import Lightroom from "react-lightbox-gallery";

import img1 from "../../media/images/assembly.jpg";
import img2 from "../../media/images/bench.jpg";
import img3 from "../../media/images/childrens_drawing.jpg";
import img4 from "../../media/images/flag-post.jpg";
import img5 from "../../media/images/tour.jpg";
import img6 from "../../media/images/sports.jpg";
import img7 from "../../media/images/interior-5.jpg";
import img8 from "../../media/images/image-3.jpg";
import img9 from "../../media/images/gift.jpg";
import img10 from "../../media/images/gift-5.jpg";
import img11 from "../../media/images/flag.jpg";
import img12 from "../../media/images/image-4.jpg";
import img13 from "../../media/images/gift-3.jpg";
import img14 from "../../media/images/image-1.jpg";
import img15 from "../../media/images/gift-2.jpg"

const Gallery = () => {
  var images = [
    {
      src: img1,
      desc: "",
      sub: "",
    },
    {
      src: img2,
      desc: "",
      sub: "",
    },
    {
      src: img3,
      desc: "",
      sub: "",
    },
    {
      src: img4,
      desc: "",
      sub: "",
    },
    {
      src: img5,
      desc: "",
      sub: "",
    },
    {
      src: img6,
      desc: "",
      sub: "",
    },
    {
      src: img7,
      desc: "",
      sub: "",
    },
    {
      src: img8,
      desc: "",
      sub: "",
    },
    {
      src: img9,
      desc: "",
      sub: "",
    },
    {
      src: img10,
      desc: "",
      sub: "",
    },
    {
      src: img11,
      desc: "",
      sub: "",
    },
    {
      src: img12,
      desc: "",
      sub: "",
    },
    {
      src: img13,
      desc: "",
      sub: "",
    },
    {
      src: img14,
      desc: "",
      sub: "",
    },
    {
      src: img15,
      desc: "",
      sub: "",
    },
  ];
  var settings = {
    columnCount: {
      default: 3,
      mobile: 2,
      tab: 2,
    },
    mode: "dark",
  };

  return (
    <div className="gallery-cont">
      <h1
        style={{
          textAlign: "center",
          margin: "7rem auto 2rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Gallery
      </h1>

      <div className="gallery-grid">
        <Lightroom images={images} settings={settings} />
      </div>
    </div>
  );
};

export default Gallery;