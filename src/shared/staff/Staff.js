import React from "react";
import "./Staff.css";
import staffuser from "../../media/staffuser.jpg";

const Staff = () => {
  return (
    <div style={{ backgroundColor: "#2366b5", padding: "1rem 0rem" }}>
      <h1 style={{ margin: "2rem 0rem", textAlign: "center", color: "white" }}>
        Meet Our Staff
      </h1>
      <div className="staff-container">
        <div className="staff">
          <div data-aos='slide-up'>
            <img className="staff-img" src={staffuser} alt="staff" />
          </div>
          <p data-aos='slide-down'>teacher name 1</p>
        </div>
        <div className="staff">
          <div data-aos='slide-up'>
            <img className="staff-img" src={staffuser} alt="staff" />
          </div>
          <p>teacher name 1</p>
        </div>
        <div className="staff">
          <div data-aos='slide-up'>
            <img className="staff-img" src={staffuser} alt="staff" />
          </div>
          <p>teacher name 1</p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
