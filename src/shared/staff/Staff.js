import React from "react";
import "./Staff.css";
import staffuser from "../../media/staffuser.jpg";

const Staff = () => {
  return (
    <div
      style={{
        backgroundColor: "#f89503",
        padding: "1rem 0rem",
        margin: "3rem 0rem",
        border: "10px solid #ebeb85",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ margin: "2rem 0rem", textAlign: "center", color: "white" }}>
        Meet Our Staff
      </h1>
      <div className="staff-container">
        <div className="staff">
          <div data-aos="slide-up">
            <img className="staff-img" src={staffuser} alt="staff" />
          </div>
          <p data-aos="slide-down">teacher name 1</p>
        </div>
        <div className="staff">
          <div data-aos="slide-up">
            <img className="staff-img" src={staffuser} alt="staff" />
          </div>
          <p>teacher name 1</p>
        </div>
        <div className="staff">
          <div data-aos="slide-up">
            <img className="staff-img" src={staffuser} alt="staff" />
          </div>
          <p>teacher name 1</p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
