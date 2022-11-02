import React , {useState} from "react";
import "./Features.css";

import slide1_img from "../../media/images/feature_slide_1.jpg";
import slide2_img from "../../media/images/feature_slide_2.png";
import slide3_img from "../../media/images/feature_slide_3.jpg";

const Features = () => {

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleClickFirst = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  }

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
                      There is a future we believe in, fostered by strong souls
                      and inventive minds. We believe the way to usher in
                      change, is to empower young minds with stellar education,
                      thus creating the enablers of tomorrow. Laying its
                      foundation stone in 2021, Royal Hills International School
                      was set up with a vision: To create leaders of tomorrow by
                      imparting education. free from all prejudices with a focus
                      on the holistic development of students.
                    </p>
                  </div>
                  <div className="feature-right-part">
                    <img src={slide1_img} alt="first slide " />
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
                      The boarding house design is a fine blend of comfort and
                      safety where structures and open spaces merge beautifully
                      to create a vibrant environment for congenial coexistence.
                      Students of the Kasiga family find school an extension of
                      their home; a place where learning takes place in a caring
                      and safe environment under the care of experienced
                      pastoral staff.
                    </p>
                  </div>
                  <div className="feature-right-part">
                    <img src={slide2_img} alt="first slide " />
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
                      The boarding house design is a fine blend of comfort and
                      safety where structures and open spaces merge beautifully
                      to create a vibrant environment for congenial coexistence.
                      Students of the Kasiga family find school an extension of
                      their home; a place where learning takes place in a caring
                      and safe environment under the care of experienced
                      pastoral staff.
                    </p>
                  </div>
                  <div className="feature-right-part">
                    <img src={slide3_img} alt="first slide " />
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
