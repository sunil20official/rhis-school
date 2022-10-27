import React from "react";
import "./Facility.css";
import swimming from '../../media/images/swimming.png';
import tennis from '../../media/images/tennis.png';
import basket from '../../media/images/ball.png';
import athletics from '../../media/images/athletics.png';
import lab1 from '../../media/images/lab1.png';
import lab2 from '../../media/images/lab2.png';
import partner1 from "../../media/images/partner_img_1.png";
import partner2 from "../../media/images/partner_img_2.png";

const Facility = () => {
  return (
    <div className="facility-container">
      <h1
        style={{
          color: "white",
          fontSize: "50px",
          fontWeight: "bolder",
          letterSpacing: "4px",
        }}
      >
        FACILITIES
      </h1>
      <div className="facilities-wrap">
        <div className="academic-block">
          <h1 className="facility-block-heading">
            <span className="pink">Academic</span> Block <br /> & Boarding{" "}
            <br /> Houses
          </h1>
          <p>
            Kasiga follows both the CBSE and CAIE curricula, facilitating the
            development of the student's ability to develop practical skills
            through knowledge and understanding, nurturing creativity and
            analytical ability and also instill positive values in every
            student.
          </p>
        </div>

        <span className="border-right"></span>

        <div className="sports-block">
          <h1 className="facility-block-heading">
            <span className="pink">Sports</span> <br /> Facilities
          </h1>
          <div className="sports-img-container">
            <div className="sports-box">
              <img src={swimming} alt="swimming" />
              <p className="sport-name">Swimming</p>
            </div>
            <div className="sports-box">
              <img src={tennis} alt="swimming" />
              <p className="sport-name">Tennis</p>
            </div>
            <div className="sports-box">
              <img src={basket} alt="swimming" />
              <p className="sport-name">Basket Ball</p>
            </div>
            <div className="sports-box">
              <img src={athletics} alt="swimming" />
              <p className="sport-name">Athletics</p>
            </div>
          </div>
        </div>

        <span className="border-right"></span>

        <div className="others-box-cont">
          <h1 className="facility-block-heading">
            <span className="pink">Other</span> <br /> Facilities
          </h1>
          <div className="others-box">
            <img src={lab1} alt="swimming" />
            <p className="sport-name">Basket Ball</p>
          </div>
          <div className="others-box">
            <img src={lab2} alt="swimming" />
            <p className="sport-name">Basket Ball</p>
          </div>
        </div>

        <span className="border-right"></span>

        <div className="partner-container">
          <h1 className="facility-block-heading">
            <span className="pink">Our</span> <br /> Partners
          </h1>
          <div className="others-box">
            <img src={partner1} alt="partner logo" />
          </div>
          <div className="others-box">
            <img src={partner2} alt="partner logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
