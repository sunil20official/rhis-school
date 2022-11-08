import React, { useState } from "react";
import "./Features.css";

import slide1_img from "../../media/celebration.jpg";
import slide2_img from "../../media/images/tour.jpg";
import slide3_img from "../../media/recreational.jpg";

const Features = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleClickFirst = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };

  const handleClickSecond = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };

  const handleClickThird = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };

  return (
    <div className="features-container">
      <h1 className="feature-heading">Features</h1>
      <div className="feature-carousel-cont">
        <div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide custom_height"
            // data-ride="carousel"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="each-feature">
                  <div className="feature-left-part">
                    <h1>
                      Celebration Of <br /> Festivals
                    </h1>
                    <p>
                      We are happy to proclaim that we consider festivals an
                      opportunity to make students come in proximity to their
                      cultural beliefs.
                      <br />
                      <br />
                      So, in order to shape their inventive minds, we let them
                      experience the diverse festivity with sheer enthusiasm.
                    </p>
                  </div>
                  <div className="feature-right-part">
                    <img
                      className="sliding-image"
                      src={slide1_img}
                      alt="first slide "
                    />
                  </div>
                </div>
              </div>
              {/* second item */}
              <div class="carousel-item">
                <div className="each-feature">
                  <div className="feature-left-part">
                    <h1>
                      Educational Tours <br /> & Excursions
                    </h1>
                    <p>
                      Since our priority is to provide quality education with
                      utmost comfort to our students,
                      <br />
                      <br /> we make sure that they are taken to different
                      educational tours that eventually broaden their
                      perspective in every field.
                    </p>
                  </div>
                  <div className="feature-right-part">
                    <img
                      className="sliding-image"
                      src={slide2_img}
                      alt="second slide "
                    />
                  </div>
                </div>
              </div>
              {/* ṭhird item */}
              <div class="carousel-item">
                <div className="each-feature">
                  <div className="feature-left-part">
                    <h1>
                      Recreational <br /> Activities
                    </h1>
                    <p>
                      Including recreational activities in the educational
                      curriculum has been one of our primary mottos since the
                      inception of our school. We believe that awakened senses
                      in both psychological and physical terms is as important
                      as your academics for overall holistic development. So, in
                      order to cope with that, we come up with different
                      recreational activities for our students at regular
                      intervals of time.
                    </p>
                  </div>
                  <div className="feature-right-part">
                    <img
                      className="sliding-image"
                      src={slide3_img}
                      alt="third slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indicator-container">
          <ul
            style={{ listStyle: "none", display: "contents" }}
            className="carousel-indicators"
          >
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            >
              <div className="ind-img">
                <img
                  className={first ? "custom-active" : "custom-inactive"}
                  src={slide1_img}
                  onClick={handleClickFirst}
                  alt="first slide"
                />
              </div>
            </li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <div className="ind-img">
                <img
                  className={second ? "custom-active" : "custom-inactive"}
                  src={slide2_img}
                  onClick={handleClickSecond}
                  alt="first slide"
                />
              </div>
            </li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              <div className="ind-img">
                <img
                  className={third ? "custom-active" : "custom-inactive"}
                  src={slide3_img}
                  onClick={handleClickThird}
                  alt="first slide"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
