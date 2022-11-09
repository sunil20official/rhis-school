import React from "react";
import "./Facility.css";
import { GrYoga } from 'react-icons/gr';
import { MdSportsCricket } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
// import swimming from '../../media/images/swimming.png';
// import tennis from '../../media/images/tennis.png';
// import basket from '../../media/images/ball.png';
// import athletics from '../../media/images/athletics.png';
import { MdHealthAndSafety } from 'react-icons/md';
import { RiMentalHealthLine } from "react-icons/ri";
// import lab1 from '../../media/images/lab1.png';
// import lab2 from '../../media/images/lab2.png';
import { GiTeacher } from 'react-icons/gi';
import { GiEarthAsiaOceania } from "react-icons/gi";
// import partner1 from "../../media/images/partner_img_1.png";
// import partner2 from "../../media/images/partner_img_2.png";

const Facility = () => {
  return (
    <div className="facility-container">
      <h1 className="facilities-heading">FACILITIES</h1>
      <div className="facilities-wrap">
        <div className="academic-block">
          <h1 className="facility-block-heading">
            <span className="pink">Age</span> Appropriate <br /> Knowledge{" "}
            <br /> Building
          </h1>
          <p>
            There is a future we believe in, fostered by strong souls and
            inventive minds. We believe the way to usher in change, is to
            empower young minds with stellar education, thus creating the
            enablers of tomorrow. Laying its foundation stone in 2021, Royal
            Hills International School was set up with a vision: To create
            leaders of tomorrow by imparting education. free from all prejudices
            with a focus on the holistic development of students.
          </p>
        </div>

        <span className="border-right"></span>

        <div className="sports-block">
          <h1 className="facility-block-heading">
            <span className="pink">Physical </span> <br /> Activites
          </h1>
          <div className="sports-img-container">
            <div className="sports-box">
              {/* <img src={swimming} alt="swimming" /> */}
              <GrYoga
                style={{ stroke: "white", fontSize: "60px" }}
                className="yoga"
              />
              <p className="sport-name">Yoga</p>
            </div>
            <div className="sports-box">
              <MdSportsTennis
                style={{ stroke: "white", fontSize: "60px" }}
                className="yoga"
              />
              <p className="sport-name">Indoor Sports</p>
            </div>
            <div className="sports-box">
              <MdSportsCricket
                style={{ stroke: "white", fontSize: "60px" }}
                className="yoga"
              />
              <p style={{ textAlign: "center" }} className="sport-name">
                Outdoor Sports
              </p>
            </div>
            <div className="sports-box">
              <FaRunning
                style={{ stroke: "white", fontSize: "60px" }}
                className="yoga"
              />
              <p className="sport-name">Athletics</p>
            </div>
          </div>
        </div>

        <span className="border-right"></span>

        <div className="others-box-cont">
          <h1 className="facility-block-heading">
            <span className="pink">Health</span> <br /> Programs
          </h1>
          <div className="others-box">
            <MdHealthAndSafety
              style={{ stroke: "white", fontSize: "60px" }}
              className="yoga"
            />
            <p style={{ textAlign: "center" }} className="sport-name">
              Free Health <br />
              Check-up Camps
            </p>
          </div>
          <div className="others-box">
            <RiMentalHealthLine
              style={{ stroke: "white", fontSize: "60px" }}
              className="yoga"
            />
            <p style={{ textAlign: "center" }} className="sport-name">
              Mental Health
              <br />
              Acitvites
            </p>
          </div>
        </div>

        <span className="border-right"></span>

        <div className="partner-container">
          <h1 className="facility-block-heading">
            <span className="pink">Other</span> <br /> Activites
          </h1>
          <div className="others-box">
            <GiTeacher
              style={{ stroke: "white", fontSize: "60px" }}
              className="yoga"
            />
            <p style={{ textAlign: "center" }} className="sport-name">
              Counselling
              <br />& Guidance
            </p>
          </div>
          <div className="others-box">
            <GiEarthAsiaOceania
              style={{ stroke: "white", fontSize: "60px" }}
              className="yoga"
            />
            <p style={{ textAlign: "center" }} className="sport-name">
              Social Initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
