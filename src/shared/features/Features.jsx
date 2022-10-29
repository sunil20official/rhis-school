import React from "react";
import "./Features.css";

import slide1_img from "../../media/images/feature_slide_1.jpg";
import slide2_img from "../../media/images/feature_slide_2.png";
import slide3_img from "../../media/images/feature_slide_3.jpg";
import slide4_img from "../../media/images/feature_slide_4.png";
import features_bg from "../../media/images/feature_bg.png";

const Features = () => {
  return (
    <div className="features-container">
      <h1>Features</h1>
      <div className="feature-carousel-cont">
        <div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="each-feature">
                  <div className="feature-left-part">
                    <h1>
                      Boarding <br /> Houses
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
                    <img src={slide1_img} alt="first slide " />
                  </div>
                </div>
              </div>
              {/* second item */}
              <div class="carousel-item">
                <div className="each-feature">
                  <div className="feature-left-part">
                    <h1>
                      Second <br /> Heading
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
                      Third <br /> Heading
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

            {/* previous and next buttons and it should only be visible on the phone screen */}
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="indicator-container">
          <ul style={{listStyle:"none"}}>
            <li>
              <div className="ind-img">
                <img src={slide1_img} alt="first slide" />
              </div>
            </li>
            <li>
              <div className="ind-img">
                <img src={slide2_img} alt="first slide" />
              </div>
            </li>
            <li>
              <div className="ind-img">
                <img src={slide3_img} alt="first slide" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
