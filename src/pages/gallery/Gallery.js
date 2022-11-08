import React from 'react';
import './Gallery.css';
import img1 from '../../media/images/assembly.jpg';
import img2 from '../../media/images/bench.jpg';
import img3 from '../../media/images/childrens_drawing.jpg';
import img4 from '../../media/images/flag-post.jpg';
import img5 from '../../media/images/tour.jpg';
import img6 from '../../media/images/sports.jpg';
import img7 from '../../media/images/interior-5.jpg';
import img8 from '../../media/images/image-3.jpg';
import img9 from '../../media/images/gift.jpg';
import img10 from '../../media/images/gift-5.jpg';
import img11 from '../../media/images/flag.jpg';
import img12 from '../../media/images/image-4.jpg';
import img13 from '../../media/images/gift-3.jpg';
import img14 from '../../media/images/image-1.jpg';


const Gallery = () => {
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
        <div className="gallery-img-cont">
          <img className="gallery-img" src={img1} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img2} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img3} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img4} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img5} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img6} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img7} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img8} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img9} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img10} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img11} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img12} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img13} alt="gallery"></img>
        </div>

        <div className="gallery-img-cont">
          <img className="gallery-img" src={img14} alt="gallery"></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery