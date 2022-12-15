import React from "react";
import "./News.css";
import img1 from "../../../media/news/new_rangoli.jpg";
import img2 from "../../../media/news/new_teachersday.jpg";
import img3 from "../../../media/news/raksha_bandhan_news.jpg";
import { useState } from "react";

const News = () => {
  const [activeBtn, setActiveBtn] = useState("first");

  const onClickFirst = () => {
    setActiveBtn("first");
  };

  const onClickSecond = () => {
    setActiveBtn("second");
  };

  const onClickThird = () => {
    setActiveBtn("third");
  };

  return (
    <div className="news-page-container">
      <h1
        style={{
          textAlign: "center",
          margin: "2rem auto 2rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        News
      </h1>
      <div className="carousel-container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={img1}
                class="d-block w-100 new_img_carousel"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={img2}
                class="d-block w-100 new_img_carousel"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={img3}
                class="d-block w-100 new_img_carousel"
                alt="..."
              />
            </div>
          </div>
          <div className="news-button-container">
            <div
              className="custom-carousel-button active"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            >
              <img
                className={
                  "carousel-img-button " +
                  (activeBtn === "first" && "active-btn-image")
                }
                onClick={onClickFirst}
                src={img1}
                alt="first button"
              />
            </div>
            <div
              className="custom-carousel-button"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <img
                className={
                  "carousel-img-button " +
                  (activeBtn === "second" && "active-btn-image")
                }
                onClick={onClickSecond}
                src={img2}
                alt="first button"
              />
            </div>
            <div
              className="custom-carousel-button"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              <img
                className={
                  "carousel-img-button " +
                  (activeBtn === "third" && "active-btn-image")
                }
                onClick={onClickThird}
                src={img3}
                alt="first button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
