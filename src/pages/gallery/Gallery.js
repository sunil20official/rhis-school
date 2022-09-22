import React from 'react';
import './Gallery.css';
import img5 from '../../media/kid-playing.png';

const Gallery = () => {
  return (
    <div className='gallery-cont'>
      <h1
        style={{
          textAlign: "center",
          margin: "5rem auto 1rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Gallery
      </h1>

      <div className='gallery-grid'>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>

        <div className='gallery-img-cont'>
          <img className='gallery-img' src={img5} alt='gallery'></img>
        </div>
      </div>
    </div>
  )
}

export default Gallery